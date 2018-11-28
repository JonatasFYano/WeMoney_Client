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
var NewCourseComponent = /** @class */ (function () {
    function NewCourseComponent(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.submitted = false;
    }
    NewCourseComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            courseName: ['', [forms_1.Validators.required]],
            description: ['', [forms_1.Validators.required]],
            detail: ['', [forms_1.Validators.required]],
            image: ['', [forms_1.Validators.required]],
        });
    };
    Object.defineProperty(NewCourseComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewCourseComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.f.firstName);
        // this.userService.createCourse(this.registerForm)
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)');
    };
    NewCourseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'newCourse.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, index_1.UserService])
    ], NewCourseComponent);
    return NewCourseComponent;
}());
exports.NewCourseComponent = NewCourseComponent;
//# sourceMappingURL=newCourse.component.js.map