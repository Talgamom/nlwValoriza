import {Router} from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmins";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUsersSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserControler = new AuthenticateUserController();
const createcomplimentController = new CreateComplimentController
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();


router.post("/users", createUserController.handle);
router.post("/tags" ,ensureAuthenticated,ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserControler.handle)
router.post("/compliments", ensureAuthenticated,createcomplimentController.handle)


router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated,listUserReceiveComplimentsController.handle)

router.get("/tags/", ensureAuthenticated, listTagsController.handle)

router.get("/users/", ensureAuthenticated, listUsersController.handle)

export {router}