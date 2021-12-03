import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   email:string;
   password:string;
   show_errors:boolean=false;
   no_valid_email:boolean=false;
   no_valid_pass:boolean=false;
   login_correcto:boolean=true;
   no_valid_pass_length:boolean=false;

  constructor(private animationCtrl: AnimationController) { 
    
  }

  ngOnInit() {
    this.animateList('.login-form',3000,1);
  }

  logForm(){




    this.show_errors=false;
    this.no_valid_email=false;
    this.no_valid_pass=false;
    this.login_correcto=false;
    this.no_valid_pass_length=false; 



    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(this.email)) {
        // Invalid Email
        this.show_errors=true;
        this.no_valid_email=true;
        console.log('no_valid_email');

      }

      if(!this.password){
        this.show_errors=true;
        this.no_valid_pass=true;
        console.log('no_valid_pass');

      }

      if(this.password && this.password.length<5){
        this.show_errors=true;
        this.no_valid_pass_length=true;
        console.log('no_valid_pass');

      }

      if(!this.no_valid_email && !this.no_valid_pass && !this.no_valid_pass_length){
        this.show_errors=true;
        this.login_correcto=true;
       console.log('OK!');
      }

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

}
