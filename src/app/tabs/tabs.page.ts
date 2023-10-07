import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private alert: AlertController, private router: Router) {}

    async logout() {
      const alert = await this.alert.create({
        message: 'Are you sure you proceed to leave?',
        buttons: [
          {
            text:'No',
            handler: () => {
              alert.dismiss();
            }
          },
          {
            text:'Yes',
            handler: () => {
              this.router.navigate(['/login']);
              alert.dismiss();
            }
          }
        ]
      });
      await alert.present();
      return;
    }
}
