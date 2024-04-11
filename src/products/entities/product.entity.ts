interface UpdateWithOptions {
  name?: string;
  description?: string;
  price?: number;
}

export class Product {
  //   id: number;
  //   name: string;
  //   description: string;
  //   price: number;

  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
  ) {}

  updateWith({ name, description, price }: UpdateWithOptions) {
    if (name) {
      this.name = name;
    }
    if (description) {
      this.description = description;
    }
    if (price) {
      this.price = price;
    }
  }
}
