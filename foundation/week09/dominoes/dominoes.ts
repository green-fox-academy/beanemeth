class Domino {
    private values: number[];
    constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
    }
  
    getValues(): number[] {
      return this.values;
    }
  }
  
  export { Domino };