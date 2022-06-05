import { IBuilder } from "./burger-builder";

class BurgerDirector {
    private builder!: IBuilder

    public setBuilder(builder: IBuilder): void {
        this.builder = builder
    }

    public buildHamburger(): void{
        this.builder.backingTopBunsPartWithSeeds()
        this.builder.backingMeat()
        this.builder.grillBurgerWithCheese()
        this.builder.prepareBurgerSouce()
        this.builder.backingBottomBunsPart()
    }

}

export { BurgerDirector }