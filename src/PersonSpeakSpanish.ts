interface ISpeakable {
  speak(): string;
}

interface ISpeakSpanish extends ISpeakable {
  speakSpanish(): string
}

interface IUser {
  name: string
}

export class CPerson implements ISpeakSpanish {
  speak(): string {
    return 'person'
  }

  speakSpanish(): string {
    return 'speakSpanish'
  }
}

export class CUser implements ISpeakSpanish, IUser {
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

  speak(): string {
    return `${this.name} speak`;
  }

  speakSpanish(): string {
    return `${this.name} speak spanish`;
  }
}
