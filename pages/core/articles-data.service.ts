import { getMock } from "../mocks"

interface ICategory {
title: string
url: string
}

interface IArticle {
    id: string
    title: string
    author: string
    burger: string
    content: string
    category: ICategory
    image: string
    createdAt: string
    allowComments: boolean
    status: 'public' | 'draft'
}

class ArticleDataService {
    private static instance: ArticleDataService;
    private constructor() { }
    private articles: {[key:string]: IArticle} = {}
    private navigation: Array<string> = []

    public static getInstance(): ArticleDataService {
        if (!ArticleDataService.instance) {
            console.log('ArticleDataService new instance')
            ArticleDataService.instance = new ArticleDataService();
        }
        return ArticleDataService.instance;
    }

    getNavigation() {
        if (Array.isArray(this.navigation) && this.navigation.length === 0) {
            this.navigation = getMock.articles.map(atricle => atricle.id)
        }
        return this.navigation
    }

    getArticle(id: string) {
        if (!this.articles[id]) {
            this.articles[id] = getMock.articles.find( (article) => article.id === id ) as IArticle
        }
        return this.articles[id]
    }

}
export type { IArticle }
export { ArticleDataService }