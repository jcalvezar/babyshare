import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { JcaweberProvider } from '../../providers/jcaweber/jcaweber';
import { BS_babies, BS_evento } from '../../models/model';

/**
 * Generated class for the LogbabyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-logbaby',
  templateUrl: 'logbaby.html',
})
export class LogbabyPage {
	
  baby: BS_babies;
  eventos: BS_evento[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.baby = navParams.get('baby');
	  
	  this.eventos = [
						{ 	id: 1, time: "10-10-2010 10:00", title: "Cagó", subtitle: "Marrón, blando, todo normal..." },
						{ 	id: 2, time: "10-10-2010 09:00", title: "Meó", subtitle: "Amarillo, claro, todo normal..." },
						{ 	id: 3, time: "10-10-2010 08:00", title: "Desayunó", subtitle: "Sanguche de mortadela, todo normal..." }
	  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogbabyPage');
  }

}
