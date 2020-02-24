import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { JcaweberProvider } from '../../providers/jcaweber/jcaweber';
import { BS_adults } from '../../models/model';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  myAdults: BS_adults[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public jca: JcaweberProvider ) {

  }

	ionViewDidEnter() {
		// Refresh
		console.log("Leyendo adultos...");
		
		this.jca.enviarGet("adults").then(data => {
				
				console.log(data);
				this.myAdults = data['adults'];

			}, (err) => {
				console.log(err);
			});
	}
}
