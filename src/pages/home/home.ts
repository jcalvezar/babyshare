import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { JcaweberProvider } from '../../providers/jcaweber/jcaweber';
import { BS_babies } from '../../models/model';

import { LogbabyPage } from '../logbaby/logbaby';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myBabies: BS_babies[] = [];
  
  constructor( public navCtrl: NavController, public jca: JcaweberProvider ) {

  }

	ionViewDidEnter() {
		// Refresh
		console.log("Leyendo bebes...");
		
		this.jca.enviarGet("babies").then(data => {
				
				console.log(data);
				this.myBabies = data['babies'];

			}, (err) => {
				console.log(err);
			});
	}
	
	ver(i) {
		console.log("I= "+i);
		
		this.navCtrl.push(LogbabyPage, { baby: this.myBabies[i] });
	}
}
