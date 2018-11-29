"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var index_1 = require("../_services/index");
var SearchCourseComponent = /** @class */ (function () {
    function SearchCourseComponent(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.submitted = false;
        this.items = [
            {
                titulo:"Bitcoin for what you need!",
                detalhe: "Specialists that can talk about this topic from scratch!.", 
                professor:"Joaquim", 
                imagem:"app/assets/images/bitcoin.jpg",
            },
            {
                titulo:"Save $$$ with a bit of planning",
                detalhe: "Why is it so hard to save money? They can help you out!", 
                professor:"Joaquim", 
                imagem:"app/assets/images/trump.jpg",
            },
            {
                titulo:"Investments 101",
                detalhe: "Want to invest money but don't know where to start? They do.", 
                professor:"Joaquim", 
                imagem:"app/assets/images/investimento.jpg",
            },
            {
                titulo:"Learn about Stock Exchange",
                detalhe: "Today and right now. Think about this way of profiting.", 
                professor:"Joaquim", 
                imagem:"app/assets/images/stockexchange.jpg",
            },
            {
                titulo:"Accounting like a pro",
                detalhe: "Learn the basics of accounting with those specialists!", 
                professor:"Joaquim", 
                imagem:"app/assets/images/accounting.jpg",
            },
            {
                titulo:"What career path to go in finance?",
                detalhe: "Take some career advice and be prepare to go step further", 
                professor:"Joaquim", 
                imagem:"app/assets/images/finance_path.jpg",
            },
            {
                titulo:"Should I buy this?!",
                detalhe: "With the money I earn monthly, can I afford this debt? Check with real specialists!.", 
                professor:"Joaquim", 
                imagem:"app/assets/images/should_i_buy.jpg",
            },
            {
                titulo:"Administer your household",
                detalhe: "Understand what it takes to provide in your home!", 
                professor:"Joaquim", 
                imagem:"app/assets/images/household.png"
            },
            {
                titulo:"Topics from University",
                detalhe: "If you're having trouble, they can help you out!", 
                professor:"Joaquim", 
                imagem:"app/assets/images/university.jpg",
            },
        ];
        this.itemsCopy = [
            {
                titulo:"Bitcoin for what you need!",
                detalhe: "Specialists that can talk about this topic from scratch!.", 
                professor:"Joaquim", 
                imagem:"app/assets/images/bitcoin.jpg",
            },
            {
                titulo:"Save $$$ with a bit of planning",
                detalhe: "Why is it so hard to save money? They can help you out!", 
                professor:"Joaquim", 
                imagem:"app/assets/images/trump.jpg",
            },
            {
                titulo:"Investments 101",
                detalhe: "Want to invest money but don't know where to start? They do.", 
                professor:"Joaquim", 
                imagem:"app/assets/images/investimento.jpg",
            },
            {
                titulo:"Learn about Stock Exchange",
                detalhe: "Today and right now. Think about this way of profiting.", 
                professor:"Joaquim", 
                imagem:"app/assets/images/stockexchange.jpg",
            },
            {
                titulo:"Accounting like a pro",
                detalhe: "Learn the basics of accounting with those specialists!", 
                professor:"Joaquim", 
                imagem:"app/assets/images/accounting.jpg",
            },
            {
                titulo:"What career path to go in finance?",
                detalhe: "Take some career advice and be prepare to go step further", 
                professor:"Joaquim", 
                imagem:"app/assets/images/finance_path.jpg",
            },
            {
                titulo:"Should I buy this?!",
                detalhe: "With the money I earn monthly, can I afford this debt? Check with real specialists!.", 
                professor:"Joaquim", 
                imagem:"app/assets/images/should_i_buy.jpg",
            },
            {
                titulo:"Administer your household",
                detalhe: "Understand what it takes to provide in your home!", 
                professor:"Joaquim", 
                imagem:"app/assets/images/household.png"
            },
            {
                titulo:"Topics from University",
                detalhe: "If you're having trouble, they can help you out!", 
                professor:"Joaquim", 
                imagem:"app/assets/images/university.jpg",
            },
        ];
    }
    SearchCourseComponent.prototype.search = function () {
        var term = this.searchTerm;
        this.items = this.itemsCopy.filter(function (tag) {
            return tag.titulo.toLowerCase().indexOf(term) >= 0;
        });
    };
    SearchCourseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'searchCourse.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, index_1.UserService])
    ], SearchCourseComponent);
    return SearchCourseComponent;
}());
exports.SearchCourseComponent = SearchCourseComponent;
//# sourceMappingURL=searchCourse.component.js.map