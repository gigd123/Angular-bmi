import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, Subject, fromEvent } from 'rxjs';
import { takeUntil, switchMap, map, take, tap, filter } from 'rxjs/operators';
import { FireBaseService } from '../../services/fire-base.service';

@Component({
  selector: 'app-bmi-input',
  templateUrl: './bmi-input.component.html',
  styleUrls: ['./bmi-input.component.scss']
})
export class BmiInputComponent implements OnInit {
  // public userHeight = 0;
  // public userWeight = 0;


  constructor(
    FormB: FormBuilder,
    private afs: AngularFirestore,
    private fireBase: FireBaseService) { }
  form: FormGroup;

  public userData: Subject<any> = new Subject();

  public userData$ = this.userData.asObservable().pipe(
    filter(data => (data.height.length >= 2 && data.weight.length >= 2) && (+data.height > 0 && data.weight > 0)),
    map(data => {
      return Object.assign(data, {
        bmi: (+data.weight / Math.pow(+data.height * 0.01, 2)).toFixed(2)
      });
    }),
    tap(data => console.log(data))
  ).subscribe();

  ngOnInit() {
  }

  private sendData() {
    console.log('add data');
  }
  // 利用 filter 判斷輸入的數字有幾個，決定是否發送資料
  // 利用 debounceTime 判斷多久才發送
  // distinctUntilChanged  判斷裡面的數據更換時候才發出
}
