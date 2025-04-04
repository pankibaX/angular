import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  parentMessage = 'Message from parent';
  childMessage = '';

  onNotify(message: string) {
    this.childMessage = message;
  }

}
