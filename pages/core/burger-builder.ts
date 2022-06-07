import { BurgerSteps } from "./burger-config"
import { BurgerDataService } from "./burger-data.service"

interface IBuilder {
    [BurgerSteps.TOP_BUNS_WITH_SEEDS]: () => void
    [BurgerSteps.TOP_BUNS_WITHOUT_SEEDS]: () => void
    [BurgerSteps.MEAT]: () => void
    [BurgerSteps.FISH]: () => void
    [BurgerSteps.CHICKEN]: () => void
    [BurgerSteps.BURGER_SOUCE]: () => void
    [BurgerSteps.FISH_SOUCE]: () => void
    [BurgerSteps.SPECIAL_SOUCE]: () => void
    [BurgerSteps.BOTTOM_BUNS]: () => void
    [BurgerSteps.GRILL_BURGER_WITH_CHEESE]: () => void
    getRecipe(): Array<string>
    resetBuilder(): void
}

class BurgerBuilder implements IBuilder {
    private recipe: Array<string> = []
    getRecipe(): Array<string> {
        const steps = this.recipe
        this.resetBuilder()
        return steps
    }
    resetBuilder() {
        this.recipe = []
    }
    setStep(name: BurgerSteps) {
        this.recipe.push(
            BurgerDataService
                .getInstance()
                .getStep(name).value
        )
    }
    [BurgerSteps.TOP_BUNS_WITH_SEEDS](): void {
        this.setStep(BurgerSteps.TOP_BUNS_WITH_SEEDS)
        console.log('Top bun with seeds is builded')
    }
    [BurgerSteps.TOP_BUNS_WITHOUT_SEEDS](): void {
        this.setStep(BurgerSteps.TOP_BUNS_WITHOUT_SEEDS)
        console.log('Top bun without seeds is builded')
    }
    [BurgerSteps.MEAT](): void {
        this.setStep(BurgerSteps.MEAT)
        console.log('Meat is builded')
    }
    [BurgerSteps.FISH](): void {
        this.setStep(BurgerSteps.FISH)
        console.log('Fish is builded')
    }
    [BurgerSteps.CHICKEN](): void {
        this.setStep(BurgerSteps.CHICKEN)
        console.log('Chicken is builded')
    }
    [BurgerSteps.BURGER_SOUCE](): void {
        this.setStep(BurgerSteps.BURGER_SOUCE)
        console.log('Burger souce is builded')
    }
    [BurgerSteps.FISH_SOUCE](): void {
        this.setStep(BurgerSteps.FISH_SOUCE)
        console.log('Fish souce is builded')
    }
    [BurgerSteps.SPECIAL_SOUCE](): void {
        this.setStep(BurgerSteps.SPECIAL_SOUCE)
        console.log('Special souce is builded')
    }
    [BurgerSteps.BOTTOM_BUNS](): void {
        this.setStep(BurgerSteps.BOTTOM_BUNS)
        console.log('Bottom bun is builded')
    }
    [BurgerSteps.GRILL_BURGER_WITH_CHEESE](): void {
        this.setStep(BurgerSteps.GRILL_BURGER_WITH_CHEESE)
        console.log('Grill with cheese is builded')
    }
}
export type { IBuilder }
export { BurgerBuilder }