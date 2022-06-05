import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ArticleDataService, IArticle } from './core/articles-data.service'
import styles from '../styles/Recipes.module.scss'
import { BurgerDirector } from './core/burger-director'
import { BurgerBuilder } from './core/burger-builder'

const Recipe = ({ initialData }: Partial<any>) => {
  const router = useRouter()
  const [content, setContent] = useState<IArticle>({} as IArticle);
  const { recipes, comment_page } = router.query
  let links = ArticleDataService.getInstance().getNavigation()
  const burgerBuilder = new BurgerBuilder()
  const burgerDirector = new BurgerDirector()
  burgerDirector.setBuilder(burgerBuilder)
  
  useEffect(() => {
    if (recipes) {
      setContent( content => ({...ArticleDataService.getInstance().getArcticle(recipes[1]) as any}))
      burgerDirector.buildHamburger()
      console.log('getting the recipe', burgerBuilder.getRecipe())
      console.log('checking what is in steps list now', burgerBuilder.getRecipe())
    }
  }, [recipes])

  return (
  <div className={styles.recipes}>
    <div className={styles.flex}>
      <div className={styles.blog}>
        <h1>{content.title}</h1>
        <p>{content.content}</p>
      </div>
      <div>
        {
          links && links.map( link => {
            return (
              <div 
                key={link} 
                onClick={() => router.push(`recipes/${link}`)}
                className={styles.link}
              >
                {link}
              </div>
            )
          })
        }
      </div>
    </div>
  </div>)
}

export default Recipe