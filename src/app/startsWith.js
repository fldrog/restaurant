var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var StartsWith = (function () {
    function StartsWith() {
    }
    StartsWith.prototype.transform = function (value, _a) {
        var field = _a[0], letter = _a[1];
        return value.filter(function (item) { return item[field].startsWith(letter); });
    };
    StartsWith = __decorate([
        angular2_1.Pipe({
            name: 'startsWith',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], StartsWith);
    return StartsWith;
})();
exports.StartsWith = StartsWith;
//# sourceMappingURL=startsWith.js.map