interface IAnimal {
  eat(): string;
}

interface IPerson extends IAnimal {
  work(): string;
}

interface IProgrammer {
  coding(code: string): string;
}

class Programmer implements IProgrammer {
  constructor(_name: string) {
    this._name = _name;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  coding(code: string) {
    return `${this._name} writes ${code}`
  }
}

export class CWorker extends Programmer implements IPerson {
  constructor(_name: string) {
    super(_name);
  }

  eat() {
    return 'eat';
  }

  work() {
    return 'work';
  }
}

