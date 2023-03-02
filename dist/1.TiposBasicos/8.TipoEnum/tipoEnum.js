"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLUE"] = 1] = "BLUE";
    Colors[Colors["YELLOW"] = 2] = "YELLOW";
})(Colors || (Colors = {}));
console.log(Colors);
var Familly;
(function (Familly) {
    Familly["ISABEL"] = "M\u00E3e";
    Familly["JOSE"] = "Pai";
    Familly["IARLEN"] = "Filho";
})(Familly || (Familly = {}));
(function (Colors) {
    Colors[Colors["PURPLE"] = 4] = "PURPLE";
    Colors[Colors["PINK"] = 5] = "PINK";
    Colors[Colors["GRAY"] = 6] = "GRAY";
})(Colors || (Colors = {}));
function selectAColor(color) {
    console.log(Colors[color]);
}
selectAColor(Colors.PURPLE);
