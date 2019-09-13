import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public cssClass: string;
  private answers = ['Abita Purple Haze', 'Coors Lite', 'Bud Light',
             'You should stay sober today', 'Michelob Ultra', 'Miller Genuine Draft',
             'Tecate', 'Bud Light Lime', 'Guinness',
             'Corona Light', 'Coors Banquet', 'Dos Equis',
             'Blue Moon', 'Pabst Blue Ribbon',
             'Yuengling Lager', "Stella Artois", 'Miller High Life',
             'Heineken', 'Busch', 'Natural Light', 'Modelo Especial', 'Corona Extra', 'Budweiser', 'Miller Lite']

  constructor(private toastCtrl: ToastController) {}

  giveAnswer() {
    this.cssClass = "animated shake";
    let answer = this.answers[Math.floor(Math.random() * this.answers.length)];
    // this.presentToast(answer);

    var temp = this;
    setTimeout(function(){
      temp.presentToast(answer);
    }, 2000)
  }

  async presentToast(answer) {
    const toast = await this.toastCtrl.create({
      message: answer,
      duration: 5000,
      position: 'top'
    });

    toast.onDidDismiss().then(() => {
      console.log('toast dismissed');
      this.cssClass = "";
    });
    toast.present();
  }

}
