"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this.products = [];
    }
    addProducts(...products) {
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
exports.ShoppingCart = ShoppingCart;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
const produto1 = new Product("Camiseta", 49.9);
const produto2 = new Product("Calça Jeans", 76.4);
const carrinhoDeCompras = new ShoppingCart();
carrinhoDeCompras.addProducts(produto1, produto1, produto2);
console.log(carrinhoDeCompras.getProducts());
console.log(carrinhoDeCompras.totalPrice());
console.log(carrinhoDeCompras.amount());
