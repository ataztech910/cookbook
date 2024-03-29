import { types } from "sass";
import { loginType, UserBuilderMethods } from "./configuration";
import { updateStorage } from "../../core/local-storage";
import { LoginContext } from "./login-strategy";
import { ApplicationUser } from "./user-builder";
import { LocalStorageKeys } from "../../core/configs";

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
        this.isLoggedIn = loginState.isLoggedIn;
        this.applicationUser = new ApplicationUser(loginState)
        loginState.userProperties.forEach((property: keyof typeof UserBuilderMethods) => {
            UserBuilderMethods[property] && this.applicationUser[UserBuilderMethods[property]]()
        })
        this.token = loginState.token;
        updateStorage(LocalStorageKeys.LOGIN, JSON.stringify(loginState))
        return loginState;
    }

    anyAPICall(data: any) {
        console.log('here we can call an API', data);
    }

    getLoginStatus() {
        return this.isLoggedIn
    }

    getToken() {
        return this.token
    }
}

export { LoginService }