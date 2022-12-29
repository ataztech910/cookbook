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
import { useEffect, useState } from 'react'
import { Articles } from '../models'
import { DataStore } from '@aws-amplify/datastore';

const ArticlePage: NextPage = ({ notFound }: any) => {
  const isLoggedIn = useSelector(selectAuthState);
  const [ data, setData ] = useState({} as any);
  const router = useRouter();
  const routeBack = () => {
    router.push('/articles');
  }

  useEffect(() => {
    const models = DataStore.query(Articles as any, router.query.pid);
    models.then(result => {
      result && setData(result);
    }); 
  }, [])
  
  return (
    <section className={styles.section}>
      { data && <div>
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
            <ArticleDate date={data.updatedAt} />
          </div>
        </div>
      }
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

// export async function getServerSideProps(context) {
//   const { pid } = context.query;
//   console.log(context);
//   try {
//     // This part can be changed to service
//     const { data } = await axios.get<any>(
//       'http://localhost:3005/api/articles/' + pid
//     );
//     if (!data) {
//       return {
//         props: { notFound: true },
//       };
//     }

//     return {
//       props: { data },
//     };
//   } catch (error) {
//     return {
//       props: { notFound: true },
//     };
//   }
// };


export default ArticlePage
