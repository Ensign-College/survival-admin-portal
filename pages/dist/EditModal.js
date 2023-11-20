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
exports.__esModule = true;
var react_1 = require("react");
var EditForm_1 = require("../components/forms/EditForm");
var EditModal = function (_a) {
    var card = _a.card, supabase = _a.supabase, onClose = _a.onClose, onSubmit = _a.onSubmit, onUpdate = _a.onUpdate;
    var _b = react_1.useState(null), cardDetails = _b[0], setCardDetails = _b[1];
    var _c = react_1.useState(card), localCard = _c[0], setLocalCard = _c[1];
    react_1.useEffect(function () {
        if (card === null || card === void 0 ? void 0 : card.id) {
            supabase
                .from("card_details")
                .select()
                .eq("card_id", card.id)
                .single()
                .then(function (_a) {
                var data = _a.data;
                setCardDetails(data);
            });
        }
    }, [card, supabase]);
    react_1.useEffect(function () {
        if (card && cardDetails) {
            setLocalCard(__assign(__assign({}, card), { card_detail_text: cardDetails.text, card_detail_pictures: cardDetails.pictures.join(",") }));
        }
    }, [card, cardDetails]);
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var cardError, cardDetailPicturesArray, _a, updatedCardDetails, cardDetailsError;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    if (!localCard) return [3 /*break*/, 3];
                    return [4 /*yield*/, supabase
                            .from("card")
                            .update({
                            title: localCard.title,
                            image_logo: localCard.image_logo,
                            card_detail_id: localCard.card_detail_id,
                            last_edited: new Date()
                        })
                            .eq("id", localCard.id)];
                case 1:
                    cardError = (_b.sent()).error;
                    if (cardError) {
                        console.error("An error occurred while updating card:", cardError);
                    }
                    else {
                        console.log("Card updated successfully");
                    }
                    cardDetailPicturesArray = [];
                    if (localCard.card_detail_pictures) {
                        // Split the comma-separated string into an array
                        cardDetailPicturesArray = localCard.card_detail_pictures
                            .split(",")
                            .map(function (s) { return s.trim(); });
                    }
                    return [4 /*yield*/, supabase
                            .from("card_details")
                            .update({
                            text: localCard.card_detail_text,
                            pictures: cardDetailPicturesArray
                        })
                            .eq("card_id", localCard.id)];
                case 2:
                    _a = _b.sent(), updatedCardDetails = _a.data, cardDetailsError = _a.error;
                    if (cardDetailsError) {
                        console.error("An error occurred while updating card details:", cardDetailsError);
                    }
                    else {
                        setCardDetails(updatedCardDetails);
                        onUpdate(localCard);
                        console.log("Card details updated successfully");
                    }
                    _b.label = 3;
                case 3:
                    onClose();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (e) {
        var _a;
        if (localCard) {
            var _b = e.target, name = _b.name, value = _b.value;
            setLocalCard(__assign(__assign({}, localCard), (_a = {}, _a[name] = value, _a)));
        }
    };
    var handleDeleteImage = function (imageUrl) {
        if (localCard) {
            var cardDetailPicturesArray = localCard.card_detail_pictures.split(",");
            var newCardDetailPictures = cardDetailPicturesArray
                .filter(function (url) { return url !== imageUrl; })
                .join(",");
            setLocalCard(__assign(__assign({}, localCard), { card_detail_pictures: newCardDetailPictures }));
        }
    };
    return (react_1["default"].createElement("div", { className: "modal-overlay" },
        react_1["default"].createElement("div", { className: "bg-white w-full lg:w-2/3 m-8 p-8 rounded-xl" },
            react_1["default"].createElement("div", { className: "flex flex-row-reverse justify-between mb-4" },
                react_1["default"].createElement("button", { onClick: onClose, className: "modal-close-icon text-red-600 hover:bg-red-100 rounded" },
                    react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", className: "w-6 h-6" },
                        react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }))),
                react_1["default"].createElement("h2", { className: "text-2xl font-semibold" }, "Edit Card")),
            localCard && (react_1["default"].createElement(EditForm_1["default"], { localCard: localCard, onSubmit: handleSubmit, handleChange: handleChange, handleDeleteImage: handleDeleteImage })))));
};
exports["default"] = EditModal;
