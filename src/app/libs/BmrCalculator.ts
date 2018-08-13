class BmrCalculator {
  private gender: string;
  private age: number;
  private weight: number;
  private height: number;
  constructor(gender: string, age: number, weight: number, height: number) {
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.height = height;
  }
  public calculate() {
    // men 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5
    // women 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161.
    const baseFormulaResult =
      10 * this.weight + 6.25 * this.height - 5 * this.age;
    let result = 0;
    switch (this.gender) {
      case "male":
        result = baseFormulaResult + 5;
        break;

      case "female":
        result = baseFormulaResult - 161;
        break;
      default:
        break;
    }
    return Math.ceil(result);
  }
}

export default BmrCalculator;
