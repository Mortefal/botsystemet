import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

interface Accusation {
  accuser: string;
  accused: string;
  paragraf: string;
  punishment: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public accusses: AngularFireList<Accusation>;
  constructor(private db: AngularFireDatabase) {
    this.accusses = this.db.list('/accusses');
  }
}
