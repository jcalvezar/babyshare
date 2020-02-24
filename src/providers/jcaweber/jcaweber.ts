import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoadingController } from 'ionic-angular';

/*
  Generated class for the JcaweberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JcaweberProvider {

  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
    console.log('Hello JcaweberProvider Provider');
  }

  enviarGet(servicio) {
	  return new Promise(resolve => {

		console.log('Consulta HTTP');

		let loader = this.loadingCtrl.create({
			content: "Please Wait"
		});
		
		loader.present().then(() => {
			this.http.get("http://jcalvez.info/apps/babyshare/"+servicio+".php").subscribe(data => {
				loader.dismiss();
				resolve(data);
			}, err => {
				console.log(err);
				loader.dismiss();
			});
		});

	  });
	}
}
