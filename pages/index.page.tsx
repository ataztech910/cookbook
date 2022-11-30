import type { NextPage } from 'next'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import styles from '../styles/Home.module.scss'
import AddArticleButton from '../ui/atoms/AddArticle'
import ArticleDate from '../ui/atoms/ArticleDate'
import ArticleDescription from '../ui/atoms/ArticleDescription'
import ArticleModalCloseButton from '../ui/atoms/ArticleModalCloseButton'
import SaveArticleButton from '../ui/atoms/ArticleModalSaveButton'
import ArticleText from '../ui/atoms/ArticleText'
import ArticleTitle from '../ui/atoms/ArticleTitle'
import BackToListButton from '../ui/atoms/BackToList'
import DeleteArticleButton from '../ui/atoms/DeleteArticle'
import EditArticleButton from '../ui/atoms/EditArticle'
import LinkToPage from '../ui/atoms/LinkToPage'
import Separator from '../ui/atoms/Separator'
import ArticleListElement from '../ui/molecules/ArticleListElement'
import NavigationBar from '../ui/molecules/NavigationBar'
import { LoginService } from './api/core/login.service'

const Home: NextPage = () => {
  const intl = useIntl();

  const user = LoginService.getInstance();
  const title = intl.formatMessage({ id: "page.home.head.title" });
  console.log(title);

  const mockArticle = {id: 123, title: 'test title', description: 'test description', text: 'test text', publishingDate: '11.11.2022'};
  return (
    <div className={styles.container}>
      <h1>Hello there ! This is the main page of CookBook</h1>
      <h2>{title}</h2>
      <div>
        <AddArticleButton openModal={ () => {} }/>
        <ArticleDate date="11.11.2022"/>
        <ArticleTitle isEdit={true} title="test" />
        <ArticleDescription isEdit={true} description="description" />
        <ArticleText isEdit={true} text="text" />
        <ArticleModalCloseButton closeModal={ () => {} } /><br />
        <SaveArticleButton saveArticle={ () => {} } /> <br />
        <BackToListButton backToList={ () => {} } /> <br />
        <DeleteArticleButton deleteArticle={() => {}} /> <br />
        <EditArticleButton article={mockArticle} editArticle={() => {}} /> <br />
        <LinkToPage link="/about" title="About" /> <br />
        <Separator /> <br />
        <NavigationBar navigation={
          [
            {title: 'About', link: '/about'},
            {title: 'About1', link: '/about1'},
            {title: 'About2', link: '/about2'}
          ]
          } />
          <br />
          <ArticleListElement
              isLoggedIn={true}
              article={mockArticle} 
              />
      </div>
      <Link href="/about">About</Link>
    </div>
  )
}

export default Home
