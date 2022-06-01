"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    /*По-настоящему:
    * - токен достается из хэдера;
    * - токен либо декодируется здесь;
    * - либо запрос делается в БД актуальный/неактуальный токен
    * - пропускается, либо не пропускается
    * */
    if (req.query.token === "123") {
        next();
    }
    else {
        res.sendStatus(401);
    }
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map