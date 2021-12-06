import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  msg:string='';
  constructor(private animationCtrl: AnimationController,
              public formBuilder: FormBuilder) {
                
               
    
  }

  ngOnInit() {
    this.animateList('.login-form',3000,1);
    this.ionicForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
   })
  }

  logForm(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Faltan valores requeridos')
      return false;
    } else {
      console.log(this.ionicForm.value);
      return true;
    }

  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  recordar(event){
    if(event.target.checked){
      console.log("Recordar marcado");
    }else{
      console.log("Recordar desmarcado");
    }
  }

  animateList(selector, duration, delayBetweenItems): void{

    const animationArray: Animation[] = [];
    const elemArray = document.querySelectorAll(selector);
    for (let i = 0; i <= elemArray.length; i++){
      // console.log('aqui: ', elemArray[i]);
      const animation: Animation = this.animationCtrl.create()
      .addElement(elemArray[i])
      .easing('cubic-bezier(0, 0.55, 0.45, 1)')
      .duration(duration)
      .delay(i * delayBetweenItems)
      .fromTo('opacity', '0', '1')

      animationArray.push(animation);
    }
    animationArray.forEach((animation: Animation) => {
      animation.play();
    });
  }

  validateErrors(){
    if(this.isSubmitted && this.errorControl.email.errors?.pattern){
      this.msg='*Debes introducir un email con un formato válido';
      return true;
    }
    if(this.isSubmitted && this.errorControl.email.errors?.required){
      this.msg='*El campo email es requerido';
      return true;
    }
    if(this.isSubmitted && this.errorControl.password.errors?.required){
      this.msg='*El campo contraseña es requerido';
      return true;
    }
    if(this.isSubmitted && this.errorControl.password.errors?.minlength){
      this.msg='*La contraseña debe tener 5 carácteres como mínimo';
      return true;
    }
  }

}
