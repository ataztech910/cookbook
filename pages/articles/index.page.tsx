import type { GetServerSideProps, NextPage } from 'next'
import axios from 'axios';
import ArticleListElement from '../../ui/molecules/ArticleListElement';
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../store/authSlice';
import { DataStore } from '@aws-amplify/datastore';
import { Articles } from '../models/index';
import { useState } from 'react';

const ListPage: NextPage = ({ notFound }: any) => {
  const isLoggedIn = useSelector(selectAuthState);
  const [ data, setData ]= useState([]);

  useEffect(() => {
    const models = DataStore.query(Articles, c => c.published.eq(true));
    models.then(result => {
      setData(result);
    }); 
  }, [])

  return (
    <section>
      <h1>Articles list</h1>
      {
        data &&
        data.map((item: any) => {
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

// export async function getServerSideProps() {
//   try {
//     // This part can be changed to service
   

//     const { data } = await axios.get<any>(
//       'http://localhost:3005/api/articles'
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

export default ListPage
