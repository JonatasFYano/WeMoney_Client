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
    items = [
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Save $$$ with a bit of planning",detalhe: "Why is it so hard to save money? They can help you out!", professor:"Joaquim"},
        {titulo:"Investments 101",detalhe: "Want to invest money but don't know where to start? They do.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},

    ];
    itemsCopy = [
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Save $$$ with a bit of planning",detalhe: "Why is it so hard to save money? They can help you out!", professor:"Joaquim"},
        {titulo:"Investments 101",detalhe: "Want to invest money but don't know where to start? They do.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
        {titulo:"Bitcoin for what you need!",detalhe: "Specialists that can talk about this topic from scratch!.", professor:"Joaquim"},
    ]

    search(): void {
        let term = this.searchTerm;
        this.items = this.itemsCopy.filter(function(tag) {
            return tag.titulo.indexOf(term) >= 0;
        }); 
    }
}