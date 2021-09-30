import Joi from 'joi'
import { NextFunction, Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'

export class SmsValidator {
    keys = {
        required: 'required',
        optional: 'optional'
    }
    SmsSchema = Joi.object({
        name: Joi.string().required(),
        subject: Joi.string().required(),
        email:Joi.required()
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.SmsSchema.validate(req.body)
        if (error) return next(error)

        next()
    })

}

