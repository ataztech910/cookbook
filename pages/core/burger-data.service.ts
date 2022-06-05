import { getMock } from "../mocks"
import { BurgerSteps } from "./burger-config";

class BurgerDataService {
    private static instance: BurgerDataService;
    private steps!: {key: keyof typeof BurgerSteps, value: string}[]
    private constructor() { 
        this.steps = []
    }

    public static getInstance(): BurgerDataService {
        if (!BurgerDataService.instance) {
            console.log('BurgerDataService new instance')
            BurgerDataService.instance = new BurgerDataService();
        }
        return BurgerDataService.instance;
    }

    getStep(key: keyof typeof BurgerSteps) {
        let currentStep = this.steps.find( (step: {key: keyof typeof BurgerSteps, value: string}) => step.key === key )
        if (!currentStep) {
            currentStep = {
                key,
                value: getMock.baking[key]
            }
            this.steps.push(currentStep)
        }
        return currentStep
    }

}

export { BurgerDataService }