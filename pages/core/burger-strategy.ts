import { ReadableStreamBYOBRequest } from "stream/web";
import { BurgerBuilder } from "./burger-builder";
import { BurgerDirector } from "./burger-director";

interface IStrategy {
    bakeMeAburger(burgerBuilder: BurgerBuilder, burgerDirector: BurgerDirector): Array<string>;
}

class MakeHamburger implements IStrategy {
    public bakeMeAburger(burgerBuilder: BurgerBuilder, burgerDirector: BurgerDirector): string[] {
        burgerDirector.buildHamburger()
        return burgerBuilder.getRecipe()
    }
}

class MakeChickenburger implements IStrategy {
    public bakeMeAburger(burgerBuilder: BurgerBuilder, burgerDirector: BurgerDirector): string[] {
        burgerDirector.buildChickenburger()
        return burgerBuilder.getRecipe()
    }
}

class Kitchen {
    private strategy: IStrategy;

    constructor(strategy: IStrategy) {
        console.log('Strategy class is', strategy)
        this.strategy = strategy
    }

    public setStrategy(strategy: IStrategy) {
        console.log('strategy', strategy)
        this.strategy = strategy
    }

    public bakeSomething(burgerBuilder: BurgerBuilder, burgerDirector: BurgerDirector): void {
        console.log('Now Kitchen is on fire')
        const result = this.strategy.bakeMeAburger(burgerBuilder, burgerDirector)
        console.log('We baked:', result)
    }
}

export type { IStrategy }
export { Kitchen, MakeHamburger, MakeChickenburger }