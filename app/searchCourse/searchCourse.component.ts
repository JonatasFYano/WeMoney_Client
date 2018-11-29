import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'searchCourse.component.html'
})

export class SearchCourseComponent {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private userService: UserService,) { }

    searchTerm: any;
    items:any = [
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

    itemsCopy = [
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
    ]

    search(): void {
        let term = this.searchTerm;
        this.items = this.itemsCopy.filter(function(tag) {
            return tag.titulo.toLowerCase().indexOf(term) >= 0;
        }); 
    }
}