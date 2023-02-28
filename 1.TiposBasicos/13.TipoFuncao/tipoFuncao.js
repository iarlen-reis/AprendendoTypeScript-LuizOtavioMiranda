/*
Aprendendo função como tipo:
-
*/
function mapStrings(array, callbackfn) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(callbackfn(array[i]));
    }
    return newArray;
}
var abc = ["a", "b", "c"];
var abcMapped = mapStrings(abc, function (item) {
    return item.toUpperCase();
});
console.log(abcMapped);
