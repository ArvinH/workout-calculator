// Shape of percentage
interface IPercentage {
  carb: number;
  protein: number;
  fat: number;
}
// shape of percentageMap
interface IPercentageMap {
  [index: string]: IPercentage;
  normal: IPercentage;
  highCarb: IPercentage;
  highProtein: IPercentage;
  ketoneDiet: IPercentage;
}

class FoodCalculator {
  private tdee: number;
  private mealNums: number;
  private percentage: IPercentage;
  private percentageMap: IPercentageMap;
  constructor(tdee: number, mealNums: number, percentage: string) {
    this.tdee = tdee;
    this.mealNums = mealNums;
    this.percentageMap = {
      normal: {
        carb: 50,
        protein: 30,
        fat: 20
      },
      highCarb: {
        carb: 60,
        protein: 25,
        fat: 15
      },
      highProtein: {
        carb: 25,
        protein: 45,
        fat: 30
      },
      ketoneDiet: {
        carb: 10,
        protein: 20,
        fat: 70
      }
    };
    this.percentage = this.percentageMap[percentage];
  }
  public calculate(): object {
    // 1g protein = 4 cal; 1g carb = 4 cal; 1g fat = 9 cal
    const { carb, protein, fat } = this.percentage;
    const carbCal = (carb / 100) * this.tdee;
    const proteinCal = (protein / 100) * this.tdee;
    const fatCal = (fat / 100) * this.tdee;
    const result = {
      carb: (carbCal / 4 / this.mealNums).toFixed(2),
      protein: (proteinCal / 4 / this.mealNums).toFixed(2),
      fat: (fatCal / 9 / this.mealNums).toFixed(2)
    };
    return result;
  }
}

export default FoodCalculator;

export { IPercentage };
