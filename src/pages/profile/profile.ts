
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfoProvider } from '../../providers/user-info/user-info';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  firstName: string;
  lastName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userInfoProvider: UserInfoProvider ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  saveForm() {
    let userDetails = 
    { 
      firstName: this.firstName, 
      lastName: this.lastName
    }
    console.log('saving User Details');
    // this.storage.set('location', JSON.stringify(location)).then(() => {
    //   this.navCtrl.push(HomePage);
    // });

    this.userInfoProvider.UpdateUserInfo(userDetails);
  }  
}
