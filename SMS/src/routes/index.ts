import { Router } from "express";
import SmsRouter from "./sms";

const router = Router({mergeParams:true})

router.use("/sms",SmsRouter)

export default router