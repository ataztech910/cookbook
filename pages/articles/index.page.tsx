import type { NextPage } from 'next'
import ArticleListElement from '../../ui/molecules/ArticleListElement';
import { Fragment } from 'react';
import { selectAuthState } from '../store/authSlice';
import { useAppSelector } from '../hooks';

const ListPage: NextPage = ({ data, notFound }: IListPage) => {
  const isLoggedIn = useAppSelector(selectAuthState);

  return (
    <section>
      <h1>Articles list</h1>
      {
        data?.map((item: any) => {
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

export default ListPage
