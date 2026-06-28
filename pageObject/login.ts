export class Login {
  private name: string;
  private age: number;
  constructor(name: string, age: number = 23) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }
}
