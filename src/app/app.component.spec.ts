import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './auth/login/login.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let fixture: ComponentFixture<LoginPage>;
  let component: LoginPage;


  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppRoutingModule,IonicStorageModule.forRoot(),FormsModule,ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
 });

  it('Inicialización de la app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
 
  it('Debe existir un ion-button que debe contener el valor acceder', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const bannerElement: HTMLElement = fixture.nativeElement;
    const boton = bannerElement.querySelector('ion-button')!;

    expect(boton.textContent).toEqual('Acceder');
  });


  it("El formulario debe contener 2 campos", () => {
      const fixture = TestBed.createComponent(LoginPage);
      const formElement =fixture.debugElement.nativeElement.querySelector('#loginForm');
      const inputElements = formElement.querySelectorAll('ion-input');
      expect(inputElements.length).toEqual(2);
  });

  it('El formulario no es valido cuando los campos estan vacios', () => {
    expect(component.ionicForm.valid).toBeFalsy();
  });

  it('Check campo email inicial vacio invalido', () => {
    let email = component.ionicForm.controls['email']; (1)
    expect(email.valid).toBeFalsy(); (2)
  });

  it('Check campo pass inicial invalido', () => {
    let password = component.ionicForm.controls['password']; (1)
    expect(password.valid).toBeFalsy(); (2)
  });

  it('Check email es requerido', () => {
    let errors = {};
    let email = component.ionicForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });

  it('Check password es requerido', () => {
    let errors = {};
    let password = component.ionicForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });

  it('Check formato email no válido', () => {
    let errors = {};
    let email = component.ionicForm.controls['email'];
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('Check formato pass no válido', () => {
    let errors = {};
    let password = component.ionicForm.controls['password'];
    password.setValue("123");
    errors = password.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('Enviar request formulario login correcto y respuesta form válido', () => {
    expect(component.ionicForm.valid).toBeFalsy();
    component.ionicForm.controls['email'].setValue("test@test.com");
    component.ionicForm.controls['password'].setValue("123456789");
    expect(component.ionicForm.valid).toBeTruthy();

  });

});
