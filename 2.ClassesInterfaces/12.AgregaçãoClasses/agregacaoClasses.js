"use strict";
/*
Apredendo agregação entre classes:
- É a ação de ligar duas classes, porém uma das classes não funcionará
    adequadamente sem a outra.

- De forma clara, é quando uma classe precisa agregar outra classe para excercer
    sua função primaria.

-
*/
exports.__esModule = true;
exports.Product = exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.products = [];
    }
    ShoppingCart.prototype.addProducts = function () {
        var _this = this;
        var products = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            products[_i] = arguments[_i];
        }
        products.forEach(function (product) { return _this.products.push(product); });
    };
    ShoppingCart.prototype.getProducts = function () {
        return this.products;
    };
    ShoppingCart.prototype.amount = function () {
        return this.products.length;
    };
    ShoppingCart.prototype.totalPrice = function () {
        return this.products
            .reduce(function (total, product) { return (total += product.price); }, 0)
            .toFixed(2);
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
var produto1 = new Product("Camiseta", 49.9);
var produto2 = new Product("Calça Jeans", 76.4);
var carrinhoDeCompras = new ShoppingCart();
carrinhoDeCompras.addProducts(produto1, produto1, produto2);
console.log(carrinhoDeCompras.getProducts());
console.log(carrinhoDeCompras.totalPrice());
console.log(carrinhoDeCompras.amount());
