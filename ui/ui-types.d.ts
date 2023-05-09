interface IListPage {
    notFound?: boolean
    data?: IArticle[]
};

interface IArticelEdit { 
    article: IArticle
    isEdit: boolean 
    editArticle: any
};

interface INavigationParams {
    navigation : Array<INavigation>
};

interface IAddArticleButton {
    openModal: () => void
}

interface IDate { 
    date?: string
};

interface IArticleActions {
    saveArticle?: () => void 
    deleteArticle?: () => void 
    editArticle?: () => void 
}

interface INavigation {
    link: string
    title: string
}

interface IArticle {
    id: numer
    title: string
    description: string
    text: string
    updatedAt?: string
    publishingDate?: string
}