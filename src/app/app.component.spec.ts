import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './auth/login/login.page';

describe('AppComponent', () => {

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppRoutingModule,IonicStorageModule.forRoot()]
    }).compileComponents();
  }));

  it('should create the app', () => {
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

  it('Debe existir un ion-input de tipo email', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const bannerElement: HTMLElement = fixture.nativeElement;
    const input = bannerElement.querySelector('ion-input')!;
    expect(input.type).toEqual('email');
  });

});
