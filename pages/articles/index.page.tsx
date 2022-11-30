import type { GetServerSideProps, NextPage } from 'next'
import axios from 'axios';
import ArticleListElement from '../../ui/molecules/ArticleListElement';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../store/authSlice';

const ListPage: NextPage = ({ data, notFound }: any) => {
  const isLoggedIn = useSelector(selectAuthState);
  return (
    <section>
      <h1>Articles list</h1>
      {
        data && !notFound && 
        data.map((item: IArticle) => {
          return <Fragment key={item.id}>
                  <ArticleListElement  
                    isLoggedIn={isLoggedIn}
                    article={item} 
                    />
                  </Fragment>
        })
      }
      {
        notFound && <span>No articles found</span>
      }
    </section>
  )
}

export async function getServerSideProps() {
  try {
    // This part can be changed to service
    const { data } = await axios.get<any>(
      'http://localhost:3005/api/articles'
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

export default ListPage
