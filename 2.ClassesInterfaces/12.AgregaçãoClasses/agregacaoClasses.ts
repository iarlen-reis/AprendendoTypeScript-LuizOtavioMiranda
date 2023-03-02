/*
Apredendo agregação entre classes:
- É a ação de ligar duas classes, porém uma das classes não funcionará
    adequadamente sem a outra.

- De forma clara, é quando uma classe precisa agregar outra classe para excercer
    sua função primaria.

- 
*/

export class ShoppingCart {
  private readonly products: Product[] = [];

  addProducts(...products: Product[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts() {
    return this.products;
  }

  amount() {
    return this.products.length;
  }

  totalPrice() {
    return this.products
      .reduce((total, product) => (total += product.price), 0)
      .toFixed(2);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const produto1 = new Product("Camiseta", 49.9);
const produto2 = new Product("Calça Jeans", 76.4);

const carrinhoDeCompras = new ShoppingCart();

carrinhoDeCompras.addProducts(produto1, produto1, produto2);

console.log(carrinhoDeCompras.getProducts());

console.log(carrinhoDeCompras.totalPrice());

console.log(carrinhoDeCompras.amount());
