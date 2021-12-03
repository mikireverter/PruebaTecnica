import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public rootPage: any = 'HomePage';


  constructor(public platform: Platform,
              private storage: Storage,
              private router: Router) {
                this.storage.create();
                const store = new Storage();

    
      let token = storage.get('token');
     
    this.platform.ready().then(() => {
        this.storage.get('token').then((val) => { // <-- Here!
          if(!val){
            this.router.navigate(['/login']);       
          }
          else{
            this.router.navigate(['/home']);       
          }
        });
       
   

  });

}



}


