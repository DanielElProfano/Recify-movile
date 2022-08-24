import { v4 as uuidv4 } from 'uuid'

export const createId = async () => {
    const Id = await uuidv4()
    return Id
}
