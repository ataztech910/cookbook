import Link from 'next/link';
import styles from '../../styles/Atoms.module.scss';
import ArticleDate from '../atoms/ArticleDate';
import ArticleDescription from '../atoms/ArticleDescription';
import ArticleTitle from '../atoms/ArticleTitle';
import DeleteArticleButton from '../atoms/DeleteArticle';
import EditArticleButton from '../atoms/EditArticle';
import { ArticleState } from '../../pages/store/articleSlice';

const ArticleListElement = ({ article, isLoggedIn } : {article : IArticle, isLoggedIn: boolean }) => {
    console.log('article', article)
    return (
       <section className={styles.articleListElement}>
        <Link href={`/articles/${article.id}`} className={styles.linkToDiv}>
            <div>
                <div><ArticleTitle isEdit={false} title={article.title} /></div>
                <div><ArticleDescription isEdit={false} description={article.description} /></div>
                <div><ArticleDate date={article.publishingDate}/></div>
            </div>
        </Link>

        {isLoggedIn && 
            <div>
                <div>
                    <EditArticleButton article={article as ArticleState} editArticle={() => {}} /> <br />
                </div>
                <div>
                    <DeleteArticleButton deleteArticle={() => {}} /> <br />
                </div>
            </div> 
        }
       </section>
    )
}

export default ArticleListElement;
