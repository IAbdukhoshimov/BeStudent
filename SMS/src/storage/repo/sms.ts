import { ISms } from "../../models/Sms"

export interface ISmsAllResponse {
    payloads: ISms[]
    count: number
}

export interface SmsRepo {
    create(payload: ISms): Promise<ISms>
    update(id: string, payload: ISms): Promise<ISms>
    delete(id: string): Promise<any>
    find(query: Object): Promise<ISms[]>
    findOne(query: Object): Promise<ISms>
    findById(id: string): Promise<ISms>
}