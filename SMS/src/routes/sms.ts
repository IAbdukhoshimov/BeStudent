import {Router } from "express";
import { SmsController } from "../controller/sms";

const router  = Router({mergeParams:true})
const  controller = new SmsController()


router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .get(controller.get)
    .patch(controller.update)
    .delete(controller.delete)


export default router 
