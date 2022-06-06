import { IBuilder } from "./burger-builder";
import { BurgerSteps } from "./burger-config";

class BurgerDirector {
    private builder!: IBuilder

    public setBuilder(builder: IBuilder): void {
        this.builder = builder
    }

    public buildHamburger(): void{
        this.builder[BurgerSteps.TOP_BUNS_WITH_SEEDS]()
        this.builder[BurgerSteps.MEAT]()
        this.builder[BurgerSteps.GRILL_BURGER_WITH_CHEESE]()
        this.builder[BurgerSteps.BURGER_SOUCE]()
        this.builder[BurgerSteps.BOTTOM_BUNS]()
    }

}

export { BurgerDirector }