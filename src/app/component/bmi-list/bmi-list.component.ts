import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

interface User {
  Name: string;
  Weight: number;
  Height: number;
  Bmi: number;
  Gender: string;
}


@Component({
  selector: 'app-bmi-list',
  templateUrl: './bmi-list.component.html',
  styleUrls: ['./bmi-list.component.scss']
})
export class BmiListComponent implements OnInit {
  usersCol: AngularFirestoreCollection<User>;
  users: any;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges(); //valueChanges 會給 users 一個 observable
  }

}
