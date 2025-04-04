import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() message!: string;
  @Output() notify = new EventEmitter<string>();

  sendMessage() {
    this.notify.emit('Message from child');
  }

}
