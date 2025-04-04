import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {


  ngOnInit(): void {
  }

  message!: string;

  constructor(private dataService: DataService) { }

  sendMessage() {
    this.dataService.sendMessage(this.message);
  }

}
