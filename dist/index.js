"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const videos_routes_1 = require("./routes/videos-routes");
const authMiddleware_1 = require("./middlewares/authMiddleware");
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(authMiddleware_1.authMiddleware);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/videos', videos_routes_1.videosRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map