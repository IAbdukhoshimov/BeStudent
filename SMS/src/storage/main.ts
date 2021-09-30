import { SmsStorage } from "./mongo/sms"

interface IStorage {
    sms: SmsStorage
}

export let storage: IStorage = {
    sms: new SmsStorage()
}