import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})

  export class AdminpanelComponent implements OnInit {

 

    itemss : Observable<any[]>;
    constructor(db:AngularFirestore) { 
    this.itemss = db.collection('/registration').valueChanges();
  
 
  }
  ngOnInit() {
  }

}
