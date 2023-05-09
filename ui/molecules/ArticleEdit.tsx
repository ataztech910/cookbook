import ArticleDescription from '../atoms/ArticleDescription';
import ArticleModalSaveButton from '../atoms/ArticleModalSaveButton';
import ArticleText from '../atoms/ArticleText';
import ArticleTitle from '../atoms/ArticleTitle';

const ArticleEdit = ({ article, isEdit, editArticle }: IArticelEdit) => {

    return (
        <>
         <ArticleTitle title={article.title} isEdit={true} />
         <ArticleDescription description={article.description} isEdit={true} />
         <ArticleText text={article.text} isEdit={true} />
         <ArticleModalSaveButton saveArticle={editArticle} />
        </>
    )
}

export default ArticleEdit;
