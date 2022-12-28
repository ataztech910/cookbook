import { getMock } from "../pages/mocks";

enum Configuration {
    HOST = 'http://localhost:3005'
};

const expectations = {
    mainPage: {
        header: 'Welcome to the cookbook'
    },
    about: {
        header: 'This is the About page of CookBook'
    },
    auth: {
        login: getMock.users[0].user,
        password: getMock.users[0].password
    },
    articles: {
        header: 'Articles list',
        add: '+ add article',
        itemUrl: '/articles/123/',
        itemHeader: 'test title'
    }
}

export { Configuration, expectations };