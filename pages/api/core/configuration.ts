import { LoginWithGQL, LoginWithMock, LoginWithAmplify } from "./login-strategy"

enum Configuration {
    CORRECT_REQUEST = 'Success !',
    WRONG_REQUEST = 'No such request'
}
enum LoginStrategiesNames {
    MOCK = 'mock',
    GQL = 'gql',
    AMPLIFY = 'amplify'
}

enum UserBuilderMethods {
    PRODUCE_REGULAR_USER = 'produceRegularUser',
    PRODUCE_UPDATED_USER = 'produceUpdatedUser',
    PRODUCE_ADMIN_USER = 'produceAdminUser'
}

const LoginStrategies = {
    [LoginStrategiesNames.MOCK]: new LoginWithMock(),
    [LoginStrategiesNames.GQL]: new LoginWithGQL(),
    [LoginStrategiesNames.AMPLIFY]: new LoginWithAmplify(),
}

const currentLoginStrategy = LoginStrategies[LoginStrategiesNames.AMPLIFY]

export { Configuration, currentLoginStrategy, UserBuilderMethods }