import axios from 'axios'
import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import ArticleDate from '../../ui/atoms/ArticleDate'
import ArticleText from '../../ui/atoms/ArticleText'
import ArticleTitle from '../../ui/atoms/ArticleTitle'
import DeleteArticleButton from '../../ui/atoms/DeleteArticle'
import EditArticleButton from '../../ui/atoms/EditArticle'
import { selectAuthState } from '../store/authSlice'
import styles from '../../styles/Articles.module.scss';
import BackToListButton from '../../ui/atoms/BackToList'
import { useRouter } from 'next/router'

const ArticlePage: NextPage = ({ data, notFound }: any) => {
  const isLoggedIn = useSelector(selectAuthState);
  const router = useRouter();
  const routeBack = () => {
    router.push('/articles');
  }
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.title}>
          <BackToListButton backToList={ () => routeBack()} />
          <h1>
            <ArticleTitle title={data.title} isEdit={false} />
          </h1>
        </div>
        <div>
          <ArticleText text={data.text} isEdit={false} />
        </div>
        <div>
          <ArticleDate date={data.publishingDate} />
        </div>
      </div>
      {isLoggedIn && <div>
                <div>
                    <EditArticleButton article={data} editArticle={() => {}} /> <br />
                </div>
                <div>
                    <DeleteArticleButton deleteArticle={() => {}} /> <br />
                </div>
      </div> }
    </section>
  )
}

export async function getServerSideProps(context) {
  const { pid } = context.query;
  console.log(context);
  try {
    // This part can be changed to service
    const { data } = await axios.get<any>(
      'http://localhost:3005/api/articles/' + pid
    );
    if (!data) {
      return {
        props: { notFound: true },
      };
    }

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { notFound: true },
    };
  }
};


export default ArticlePage
