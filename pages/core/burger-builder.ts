import { types } from "sass";
import { BurgerSteps } from "./burger-config";
import { BurgerDataService } from "./burger-data.service";

interface IBuilder {
    backingTopBunsPartWithSeeds(): void;
    backingTopBunsPartWithoutSeeds(): void;
    backingMeat(): void;
    backingFish(): void;
    backingChicken(): void;
    prepareBurgerSouce(): void;
    prepareFishSouce(): void;
    prepareSpecialSouce(): void;
    backingBottomBunsPart(): void;
    grillBurgerWithCheese(): void;
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
    setStep(name: keyof typeof BurgerSteps) {
        this.recipe.push(
            BurgerDataService
                .getInstance()
                .getStep(name).value
        )
    }
    backingTopBunsPartWithSeeds(): void {
        this.setStep("backingTopBunsPartWithSeeds")
        console.log('Top bun with seeds is builded')
    }
    backingTopBunsPartWithoutSeeds(): void {
        this.setStep("backingTopBunsPartWithoutSeeds")
        console.log('Top bun without seeds is builded')
    }
    backingMeat(): void {
        this.setStep("backingMeat")
        console.log('Meat is builded')
    }
    backingFish(): void {
        this.setStep("backingFish")
        console.log('Fish is builded')
    }
    backingChicken(): void {
        this.setStep("backingChicken")
        console.log('Chicken is builded')
    }
    prepareBurgerSouce(): void {
        this.setStep("prepareBurgerSouce")
        console.log('Burger souce is builded')
    }
    prepareFishSouce(): void {
        this.setStep("prepareFishSouce")
        console.log('Fish souce is builded')
    }
    prepareSpecialSouce(): void {
        this.setStep("prepareSpecialSouce")
        console.log('Special souce is builded')
    }
    backingBottomBunsPart(): void {
        this.setStep("backingBottomBunsPart")
        console.log('Bottom bun is builded')
    }
    grillBurgerWithCheese(): void {
        this.setStep("grillBurgerWithCheese")
        console.log('Grill with cheese is builded')
    }
}

export { IBuilder, BurgerBuilder }