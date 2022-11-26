import { UserBuilderMethods } from "./configuration";

interface IUser {
    isLoggedIn: boolean;
    token: string;
    userProperties: Array<keyof typeof UserBuilderMethods>;
    userPropertiesActions?: string[]
}

interface ILoginStrategy {
    login(user: string, password: string): Promise<IUser>;
}

export type { IUser, ILoginStrategy}