import { getMock } from "../../mocks";
import { ILoginStrategy, IUser } from "./types";
import { generateToken } from "./utils";
import { gql } from "@apollo/client";
import client from "../../../apollo-client";

class LoginWithMock implements ILoginStrategy {
    public async login(user: string, password: string) {
        const users = getMock.users
        const checkUser: any = users.find((userItem: {user: string, password: string, userProperties: any[]}) => { 
            return userItem.user === user && userItem.password === password
        })

        let loginState = { isLoggedIn: false, token: '', userProperties: [] }
        if (checkUser) {
            loginState = { isLoggedIn: true, token: generateToken(), userProperties: checkUser.userProperties }
        }
        return loginState;
    }
}

class LoginWithGQL implements ILoginStrategy {
    async gqlLogin(user: string, password: string) {
        const { data } = await client.query({
            query: gql`
              query {
                getUser(user: "${user}", password: "${password}") {
                  user
                  userProperties
                }
              }
            `,
          });
        console.log('data', data)
        return await data
    }
    public async login(user: string, password: string) {
        let loginState = { isLoggedIn: false, token: '', userProperties: [] }
        const checkUser = await this.gqlLogin(user, password)
        console.log('checkUser', checkUser)
        if (checkUser && checkUser.getUser) {
            loginState = { isLoggedIn: true, token: generateToken(), userProperties: checkUser.getUser.userProperties }
        }
        return loginState
    }
}

class LoginContext {
    private strategy: ILoginStrategy;

    constructor(strategy: ILoginStrategy) {
        console.log('Login strategy class is', strategy)
        this.strategy = strategy
    }

    public useLogin(user: string, password: string): Promise<IUser> {
        console.log('Now login is on fire')
        return this.strategy.login(user, password)
    }
}

export { LoginContext, LoginWithMock, LoginWithGQL }