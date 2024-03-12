"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const wishlist_1 = __importDefault(require("./routes/wishlist"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('Ping received');
    res.send('Pong');
});
app.use('/api/user', user_1.default);
app.use('/api/wishlist', wishlist_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
