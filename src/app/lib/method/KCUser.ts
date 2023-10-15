import { IUser, User } from "@/class/User" 
import { QuerySelect } from "@/lib/query/querybuilder/QuerySelect" 
import { QueryInsert } from "@/lib/query/querybuilder/QueryInsert" 
import { KCToken } from "./KCToken" 
import { Token } from "../class/Token" 
import { QueryEdit } from "../query/querybuilder/QueryEdit"

export class KCUser {
    private static table: string = "user"
    private static signIn: User|null = null

    static getSignInUser() {
        return this.signIn
    }

    static async processObjects(data: IUser[]) {
        const result: User[] = await Promise.all(data.map(async (item: any) => {
            return this.processObject(item) 
          })) 

        return result
    }

    static async processObject(data: IUser) {
        return new User(
            data.id,
            data.name,
            data.email,
            data.password,
            data.telephone,
            data.address1,
            data.address2,
            data.address3,
            data.picture,
            data.catsitter,
        )
    }

    static async add(user: User) {
        const isDuplicated = await this.isDuplicateUser(user)
        if (isDuplicated)
            return -1

        const values = new Map<string, any>()
        values.set("name", user.getName())
        values.set("email", user.getEmail())
        values.set("password", user.getPassword())
        values.set("telephone", user.getTelephone())
        values.set("address1", user.getAddress1())
        values.set("address2", user.getAddress2())
        values.set("address3", user.getAddress3())
        values.set("picture", user.getPicture())
        values.set("catsitter", user.isCatSitter())

        const query = new QueryInsert(this.table, values)
        const result = <number> await query.execute()
        return result
    }

    static async edit(user: User) {
        const query = new QueryEdit(this.table)
        query.value("name", user.getName())
        query.value("email", user.getEmail())
        query.value("password", user.getPassword())
        query.value("telephone", user.getTelephone())
        query.value("address1", user.getAddress1())
        query.value("address2", user.getAddress2())
        query.value("address3", user.getAddress3())
        query.value("picture", user.getPicture())
        query.value("catsitter", user.isCatSitter())

        const result = <number> await query.execute()
        return result
    }

    static async isDuplicateUser(user: User) {
        const query = new QuerySelect(this.table)
        query.where("email").equal(user.getEmail())
        const result = <IUser[]> await query.execute()
        return result.length > 0
    }
    
    static async doSignIn(user: User) {
        KCToken.removeByOwner(user)
        this.signIn = user
    }

    static async doSignOut(user: User) {
        KCToken.removeByOwner(user)
        this.signIn = null
    }

    static async getAll() {
        const query = new QuerySelect(this.table)
        const result = <IUser[]> await query.execute()

        if (result)
            return this.processObjects(result) 
        else
            return null  
    }

    static async get(id: number) {
        const query = new QuerySelect(this.table)
        query.where("id").equal(id)
        const result = <IUser[]> await query.execute()

        if (result)
            return (await this.processObjects(result))[0] 
        else
            return null  
    }

    static async getByEmail(email: string) {
        const query = new QuerySelect(this.table)
        query.where("email").equal(email)
        const result = <IUser[]> await query.execute()

        if (result)
            return (await this.processObjects(result))[0] 
        else
            return null  
    }
}