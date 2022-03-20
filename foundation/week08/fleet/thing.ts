class Thing {
    private name: string;
    private completed: boolean;
  
    constructor(name: string) {
      this.name = name;
      this.completed = false;
    }
  
    public complete(): void {
      this.completed = true;
    }
  
    getName(): string {
      return this.name;
    }
  
    getCompleted(): boolean {
      return this.completed;
    }
  
    toString(): string {
      return `[${this.completed ? 'x' : ' '}] ${this.name}`;
    }
  }
  
  export { Thing };
  
//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

