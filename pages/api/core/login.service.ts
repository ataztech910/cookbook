class LoginService {
    private static instance: LoginService;
    private isLoggedIn: boolean = false;
    private constructor() {}

    public static getInstance(): LoginService {
        if (!LoginService.instance) {
            console.log('LoginService new instance')
            LoginService.instance = new LoginService();
        }
        return LoginService.instance;
    }

    login() {
        // Here we will provide the login logic depending on what strategy is selected
        this.isLoggedIn = true;
    }

    getLoginStatus() {
        return this.isLoggedIn
    }
}

export { LoginService }