"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var supabase_js_1 = require("@supabase/supabase-js");
var react_1 = require("react");
var EditModal_1 = require("./EditModal");
var supabaseClients_1 = require("../services/supabaseClients");
var AuthForm_1 = require("./AuthForm");
var PictureInput_1 = require("../components/inputs/PictureInput");
var navbar_1 = require("../components/navbar");
var supabase = supabase_js_1.createClient(supabaseClients_1.SUPABASE_URL, supabaseClients_1.SUPABASE_API_KEY);
var HomePage = function () {
    var _a = react_1.useState([]), cards = _a[0], setCards = _a[1];
    var _b = react_1.useState({
        title: "",
        image_logo: "",
        card_detail_id: 0,
        card_detail_text: "",
        card_detail_pictures: ""
    }), form = _b[0], setForm = _b[1];
    var _c = react_1.useState(false), isCardDetailsTextOpen = _c[0], setIsCardDetailsTextOpen = _c[1];
    react_1.useEffect(function () {
        fetchCards();
    }, []);
    var _d = react_1.useState(false), isNotificationFormVisible = _d[0], setIsNotificationFormVisible = _d[1];
    var toggleNotificationForm = function () {
        setIsNotificationFormVisible(!isNotificationFormVisible);
    };
    var _e = react_1.useState(false), isAuthenticated = _e[0], setIsAuthenticated = _e[1];
    var handleAuthenticated = function () {
        setIsAuthenticated(true);
    };
    var fetchCards = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, supabase.from("card").select()];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error) {
                        console.error("Error fetching cards:", error);
                    }
                    else {
                        console.log("cards: ", data);
                        // @ts-ignore
                        setCards(data || []);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var resetForm = function () {
        setForm({
            title: "",
            image_logo: "",
            card_detail_id: 0,
            card_detail_text: "",
            card_detail_pictures: ""
        });
    };
    var handleDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supabase.from("card")["delete"]().match({ id: id })];
                case 1:
                    error = (_a.sent()).error;
                    if (error) {
                        console.error("Error deleting card:", error);
                    }
                    else {
                        // @ts-ignore
                        setCards(cards.filter(function (card) { return card.id !== id; }));
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleEdit = function (id) {
        // @ts-ignore
        var card = cards.find(function (card) { return card.id === id; });
        // @ts-ignore
        setCurrentCard(card);
        setIsEditModalOpen(true);
    };
    var _f = react_1.useState(false), isEditModalOpen = _f[0], setIsEditModalOpen = _f[1];
    var _g = react_1.useState(null), currentCard = _g[0], setCurrentCard = _g[1];
    var handleChange = function (e) {
        var _a;
        setForm(__assign(__assign({}, form), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var newCard, _a, data, error, firstCard, cardError, newCardDetails, firstCardDetail, response, updatedCard;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    if (form.card_detail_text.trim() === "") {
                        alert("Card detail text is required");
                        return [2 /*return*/];
                    }
                    newCard = { title: form.title, image_logo: form.image_logo };
                    return [4 /*yield*/, supabase
                            .from("card")
                            .insert([newCard])
                            .select()];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    firstCard = data ? data[0] : null;
                    cardError = error;
                    if (cardError || !firstCard) {
                        // @ts-ignore
                        alert("Error inserting new card:", cardError);
                        console.error(cardError);
                        return [2 /*return*/];
                    }
                    newCardDetails = {
                        title: form.title,
                        pictures: form.card_detail_pictures.split(","),
                        card_id: firstCard.id,
                        text: form.card_detail_text
                    };
                    return [4 /*yield*/, supabase.from("card_details").insert([newCardDetails])];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, supabase
                            .from("card_details")
                            .select()
                            .eq("card_id", firstCard.id)
                            .single()];
                case 3:
                    firstCardDetail = _b.sent();
                    console.log("card detail: " + firstCardDetail.data.id);
                    return [4 /*yield*/, supabase
                            .from("card")
                            .update([{ card_detail_id: firstCardDetail.data.id }])
                            .eq("id", firstCard.id)];
                case 4:
                    response = _b.sent();
                    console.log("Response: " + response);
                    updatedCard = __assign(__assign({}, firstCard), { card_detail_id: firstCardDetail.id });
                    // @ts-ignore
                    setCards(__spreadArrays(cards, [updatedCard]));
                    resetForm();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCardUpdate = function (updatedCard) {
        setCards(function (prevCards) {
            return prevCards.map(function (card) { return (card.id === updatedCard.id ? updatedCard : card); });
        });
    };
    var toggleCardDetailsText = function () {
        setIsCardDetailsTextOpen(!isCardDetailsTextOpen);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(navbar_1["default"], null),
        React.createElement("div", { className: "min-h-screen p-8" },
            React.createElement("h1", { className: "pb-8 text-2xl font-bold" }, "Welcome to Survival Admin Portal"),
            isAuthenticated ? (React.createElement("div", { className: "flex flex-col p-2 pt-0 md:p-8 md:flex-row" },
                React.createElement("div", { className: "w-full pr-8 md:w-1/3 lg:w-full" },
                    React.createElement("h1", { className: "mb-4 text-4xl" }, "New Card"),
                    React.createElement("form", { onSubmit: handleSubmit, className: "mb-8" },
                        React.createElement("div", { className: "mb-4" },
                            React.createElement("label", { className: "block mb-2 text-sm font-bold text-gray-700" }, "Title:"),
                            React.createElement("input", { type: "text", name: "title", value: form.title, onChange: handleChange, className: "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" })),
                        React.createElement("div", { className: "mb-4" },
                            React.createElement("label", { className: "block mb-2 text-sm font-bold text-gray-700" }, "Image Logo URL:"),
                            React.createElement("input", { type: "text", name: "image_logo", value: form.image_logo, onChange: handleChange, className: "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" })),
                        React.createElement("div", { className: "mb-4" },
                            React.createElement("label", { className: "block mb-2 text-sm font-bold text-gray-700" }, "Card details id:"),
                            React.createElement("input", { type: "number", name: "card_detail_id", value: form.card_detail_id, onChange: handleChange, className: "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" })),
                        React.createElement("div", { className: "mb-4" },
                            React.createElement("button", { onClick: toggleCardDetailsText, className: "text-blue-500 hover:underline" }, isCardDetailsTextOpen
                                ? "Collapse"
                                : "Add Card Details Text"),
                            isCardDetailsTextOpen && (React.createElement("div", { className: "mt-2" },
                                React.createElement("label", { className: "block mb-2 text-sm font-bold text-gray-700" }, "Card Details Text:"),
                                React.createElement("textarea", { name: "card_detail_text", value: form.card_detail_text, 
                                    // @ts-ignore
                                    onChange: handleChange, className: "w-full h-32 px-3 py-2 text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline" })))),
                        React.createElement(PictureInput_1["default"], { pictures: form.card_detail_pictures, handleChange: handleChange }),
                        React.createElement("button", { type: "submit", className: "px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" }, "Insert New Card"))),
                React.createElement("div", { className: "w-full space-y-4 md:w-2/3 lg:w-full" },
                    React.createElement("h1", { className: "mb-4 text-4xl" }, "Current Cards"),
                    cards.map(function (card, index) { return (React.createElement("div", { key: index, className: "flex items-center justify-between p-4 border rounded shadow-lg hover:bg-teal-800 hover:text-white hover:shadow-slate-950 hover:border-transparent", style: { minWidth: "300px" } },
                        React.createElement("div", { className: "flex items-center" },
                            card.image_logo === "https://example.com/logo.png" ? (React.createElement("div", { className: "flex items-center justify-center w-16 h-16 mr-4 bg-gray-200" },
                                React.createElement("span", { className: "text-gray-400" }, "No Image"))) : (React.createElement("img", { src: card.image_logo, alt: card.title, className: "object-cover w-16 h-16 max-w-full max-h-full mr-4" })),
                            React.createElement("h2", { className: "flex-shrink-0 text-xl" }, card.title)),
                        React.createElement("div", { className: "flex button-container" },
                            React.createElement("button", { onClick: function () { return handleEdit(card.id); }, className: "px-2 mr-1 bg-transparent rounded text-slate-400 hover:bg-teal-600 hover:text-white" }, "Edit"),
                            React.createElement("div", { className: "group" },
                                React.createElement("button", { onClick: function () { return handleDelete(card.id); }, className: "px-2 py-1 text-white bg-transparent rounded group-hover:bg-red-400 group-hover:text-white" },
                                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", className: "w-6 h-6 text-red-600 group-hover:fill-red-600 group-hover:text-white" },
                                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }))))))); }),
                    isEditModalOpen && (React.createElement(EditModal_1["default"], { card: currentCard, supabase: supabase, onClose: function () { return setIsEditModalOpen(false); }, onUpdate: handleCardUpdate, onSubmit: handleEdit }))))) : (React.createElement(AuthForm_1["default"], { onAuthenticated: handleAuthenticated })))));
};
exports["default"] = HomePage;
