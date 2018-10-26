import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatToolbar } from '@angular/material'
import { MatIcon } from '@angular/material/icon';
import { Observable, Subscription } from 'rxjs';
import {FormControl} from '@angular/forms';
export interface data{
  id : number,
  name : string,
  totalmarks:object

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: Observable<any[]>; 
    constructor(db: AngularFirestore) {
    this.items = db.collection('/data').valueChanges();
    console.log(this.items);
  }
}
