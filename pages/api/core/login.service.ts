import { types } from "sass";
import { loginType, UserBuilderMethods } from "./configuration";
import { LoginContext } from "./login-strategy";
import { ApplicationUser } from "./user-builder";

class LoginService {
    private static instance: LoginService;
    private isLoggedIn: boolean = false;
    private token: string = '';
    private applicationUser: ApplicationUser = {} as ApplicationUser
    private constructor() {}

    public static getInstance(): LoginService {
        if (!LoginService.instance) {
            console.log('LoginService new instance')
            LoginService.instance = new LoginService();
        }
        return LoginService.instance;
    }

    async login(user: string, password: string) {
        // Here we will provide the login logic depending on what strategy is selected
        const loginContext = new LoginContext(loginType);
        const loginState = await loginContext.useLogin(user, password)
        console.log('loginState', loginState)
        this.isLoggedIn = loginState.state;
        this.applicationUser = new ApplicationUser(loginState)
        loginState.userProperties.forEach((property: keyof typeof UserBuilderMethods) => {
            UserBuilderMethods[property] && this.applicationUser[UserBuilderMethods[property]]()
        })
        this.token = loginState.token;
    }

    getLoginStatus() {
        return this.isLoggedIn
    }

    getToken() {
        return this.token
    }
}

export { LoginService }