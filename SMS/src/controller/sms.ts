import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";

export class SmsController{
    getAll= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const smss = await storage.sms.find(req.query)

        res.status(200).json({
            success:true,
            data:{
                smss
            }
        })
    })

    get = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const sms = await storage.sms.findById(req.params.id)

        res.status(200).json({
            success:true,
            data:{
                sms
            }
        })
    })

    getOne = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const sms = await storage.sms.findOne(req.body)

        res.status(200).json({
            success:true,
            data:{
                sms
            }
        })
    })

    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const sms = await storage.sms.create(req.body)

        res.status(201).json({
            success:true,
            data:{
                sms
            }
        })
    })

    update = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const sms = await storage.sms.update(req.params.id,req.body)

        res.status(200).json({
            success:true,
            data:{
                sms
            }
        })
    })

    delete = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const sms = await storage.sms.delete(req.params.id)
            if(!sms){
                return "not found in database"
            }
            res.status(200).json({
                success:true,
                data:{
                    sms
                }
            })
        })
}