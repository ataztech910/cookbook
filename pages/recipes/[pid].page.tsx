import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ArticleDataService, IArticle } from '../core/articles-data.service'
import styles from '../../styles/Recipes.module.scss'
import { BurgerDirector } from '../core/burger-director'
import { BurgerBuilder } from '../core/burger-builder'
import { IStrategy, Kitchen } from '../core/burger-strategy'
import { Strategies, StrategiesNames } from '../core/burger-config'

const Recipe = ({ initialData }: Partial<any>) => {
  const router = useRouter()
  const [content, setContent] = useState<IArticle>({} as IArticle);
  const { pid } = router.query
  let links = ArticleDataService.getInstance().getNavigation()
  const burgerBuilder = new BurgerBuilder()
  const burgerDirector = new BurgerDirector()
  burgerDirector.setBuilder(burgerBuilder)

  let burgerType = null
  let context: Kitchen
  let currentBurgerType: StrategiesNames
  const changeBurgerType = () => {
    console.log("current burger type", currentBurgerType)
    // Next line of code having no sence. We will just switch strategies to show the example is works
    const newStrategy = currentBurgerType === StrategiesNames.HAMBURGER ? StrategiesNames.CHICKENBURGER : StrategiesNames.HAMBURGER
    currentBurgerType = newStrategy
    context.setStrategy(Strategies[currentBurgerType])
    context.bakeSomething(burgerBuilder, burgerDirector)
  }

  useEffect(() => {
    if (pid) {
      setContent( content => ({...ArticleDataService.getInstance().getArticle(pid as string) as any}))
    }
  }, [pid])

  useEffect(() => {
    if(Object.keys(content).length > 0) {
      console.log("content.burger", content.burger)
      burgerType = Strategies[content.burger as StrategiesNames]
      context = new Kitchen(burgerType)
      context.bakeSomething(burgerBuilder, burgerDirector)
    }
  }, [content])

  return (
  <div className={styles.recipes}>
    <div className={styles.flex}>
      <div className={styles.blog}>
        <h1>{content.title}</h1>
        <p>{content.content}</p>
        <button onClick={ () => changeBurgerType() }> Change burger type </button>
      </div>
      <div>
        {
          links && links.map( link => {
            return (
              <div 
                key={link} 
                onClick={() => router.push(`${link}`)}
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