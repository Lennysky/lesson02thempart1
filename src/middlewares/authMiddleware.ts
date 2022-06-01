import {NextFunction, Request, Response} from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
   /*По-настоящему:
   * - токен достается из хэдера;
   * - токен либо декодируется здесь;
   * - либо запрос делается в БД актуальный/неактуальный токен
   * - пропускается, либо не пропускается
   * */

    if(req.query.token === "123") {
        next();
    } else {
        res.sendStatus(401)
    }
    next();
}