import { Router } from "express";
import UserController from "../controllers/userController";
import LoginRequired from "../middlewares/loginRequired"
import { checkUserPermission } from "../middlewares/checkUserPermission"

const router = new Router();

router.post('/', UserController.store)

router.get('/:id', LoginRequired, checkUserPermission,  UserController.getId)
router.get('/', LoginRequired, checkUserPermission, UserController.getAll)
router.put('/:id', LoginRequired, checkUserPermission, UserController.put)
router.delete('/:id', LoginRequired, checkUserPermission,UserController.delete)


export default router;