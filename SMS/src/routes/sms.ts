import {Router } from "express";
import { SmsController } from "../controller/sms";
import {SmsValidator} from "../validators/sms"

const router  = Router({mergeParams:true})
const  controller = new SmsController()
const validator = new SmsValidator()


router.route("/").get(controller.getAll).post(validator.create, controller.create)
router
    .route("/:id")
    .get(controller.get)
    .patch(controller.update)
    .delete(controller.delete)


export default router 
