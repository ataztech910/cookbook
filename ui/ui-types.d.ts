interface IAddArticleButton {
    openModal: () => void
}

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
    updatedAt: string
}