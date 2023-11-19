"use strict";
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
var notificationService_1 = require("../services/notificationService");
var navbar_1 = require("../components/navbar");
var Announcements = function () {
    var _a = react_1.useState(""), topic = _a[0], setTopic = _a[1];
    var _b = react_1.useState(""), title = _b[0], setTitle = _b[1];
    var _c = react_1.useState(""), body = _c[0], setBody = _c[1];
    var _d = react_1.useState(""), imageUrl = _d[0], setImageUrl = _d[1];
    var handleCallNotifications = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!imageUrl) return [3 /*break*/, 2];
                    // If imageUrl is not empty, call the handleSendImageNotification function
                    return [4 /*yield*/, notificationService_1.handleSendImageNotification(topic || "all", title, body, imageUrl)];
                case 1:
                    // If imageUrl is not empty, call the handleSendImageNotification function
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: 
                // If imageUrl is empty, call the handleSendNotification function
                return [4 /*yield*/, notificationService_1.handleSendNotification(topic || "all", title, body)];
                case 3:
                    // If imageUrl is empty, call the handleSendNotification function
                    _a.sent();
                    _a.label = 4;
                case 4:
                    // Optionally, you can clear the input fields here
                    setTopic("");
                    setTitle("");
                    setBody("");
                    setImageUrl("");
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    // Handle any errors here
                    console.error("Error sending notification:", error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(navbar_1["default"], null),
        react_1["default"].createElement("div", { className: "min-h-screen flex justify-center" },
            react_1["default"].createElement("div", { className: "w-full lg:w-1/2  p-4 flex flex-col " },
                react_1["default"].createElement("p", { className: "text-2xl font-semibold" }, "Announcements"),
                react_1["default"].createElement("label", { htmlFor: "topic" }, "Topic:"),
                react_1["default"].createElement("input", { className: "bg-white shadow-md rounded px-8 pt-3 mt-3 pb-3 mb-4", type: "text", id: "topic", name: "topic", placeholder: "Notification topic", value: topic, onChange: function (e) { return setTopic(e.target.value); } }),
                react_1["default"].createElement("label", { htmlFor: "title" }, "Title:"),
                react_1["default"].createElement("input", { className: "bg-white shadow-md rounded px-8 pt-3 mt-3 pb-3 mb-4", type: "text", id: "title", name: "title", placeholder: "Notification title", value: title, onChange: function (e) { return setTitle(e.target.value); } }),
                react_1["default"].createElement("label", { htmlFor: "body" }, "Text:"),
                react_1["default"].createElement("input", { className: "bg-white shadow-md rounded px-8 pt-3 mt-3 pb-20 mb-4", type: "text", id: "body", name: "body", placeholder: "Enter text here...", value: body, onChange: function (e) { return setBody(e.target.value); } }),
                react_1["default"].createElement("label", { htmlFor: "imageUrl" }, "Image URL:"),
                react_1["default"].createElement("input", { className: "bg-white shadow-md rounded px-8 pt-3 pb-20 mt-3 mb-4", type: "text", id: "imageUrl", name: "notificationImage", placeholder: "Image URL", autoComplete: "off", value: imageUrl, onChange: function (e) { return setImageUrl(e.target.value); } }),
                react_1["default"].createElement("button", { type: "button" // Use type="button" to prevent form submission
                    , className: "px-4 py-2 font-bold text-white bg-blue-500 rounded hover-bg-blue-700 focus:outline-none focus:shadow-outline", onClick: handleCallNotifications }, "Send Notification")))));
};
exports["default"] = Announcements;
