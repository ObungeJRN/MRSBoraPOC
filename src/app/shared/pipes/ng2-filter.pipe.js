"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:forin */
var core_1 = require("@angular/core");
var Ng2FilterPipe = (function () {
    function Ng2FilterPipe() {
    }
    Ng2FilterPipe.prototype.transform = function (array, filter) {
        var type = typeof filter;
        if (type === 'string') {
            if (this.isNumber(filter)) {
                return array.filter(this.filterDefault(filter));
            }
            return array.filter(this.filterByString(filter));
        }
        if (type === 'object') {
            return array.filter(this.filterByObject(filter));
        }
        return array.filter(this.filterDefault(filter));
    };
    Ng2FilterPipe.prototype.filterByString = function (filter) {
        filter = filter.toLowerCase();
        return function (value) {
            return !filter || value.toLowerCase().indexOf(filter) !== -1;
        };
    };
    Ng2FilterPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var key in filter) {
                if (!value.hasOwnProperty(key)) {
                    return false;
                }
                var type = typeof value[key];
                var isMatching = void 0;
                if (type === 'string') {
                    isMatching = _this.filterByString(filter[key])(value[key]);
                }
                else if (type === 'object') {
                    isMatching = _this.filterByObject(filter[key])(value[key]);
                }
                else {
                    isMatching = _this.filterDefault(filter[key])(value[key]);
                }
                if (!isMatching) {
                    return false;
                }
            }
            return true;
        };
    };
    /**
     * Defatul filterDefault function
     *
     * @param filter
     * @returns {(value:any)=>boolean}
     */
    Ng2FilterPipe.prototype.filterDefault = function (filter) {
        return function (value) {
            return !filter || filter === value;
        };
    };
    Ng2FilterPipe.prototype.isNumber = function (value) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    };
    return Ng2FilterPipe;
}());
Ng2FilterPipe = __decorate([
    core_1.Pipe({
        name: 'filterBy',
        pure: false
    }),
    core_1.Injectable()
], Ng2FilterPipe);
exports.Ng2FilterPipe = Ng2FilterPipe;
//# sourceMappingURL=ng2-filter.pipe.js.map