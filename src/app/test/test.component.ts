import { Component, OnInit } from '@angular/core';

import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  itemss : Observable<any[]>;
  constructor(db:AngularFirestore) { 
    this.itemss = db.collection('/data').valueChanges();

  }

  ngOnInit() {

  }

}
