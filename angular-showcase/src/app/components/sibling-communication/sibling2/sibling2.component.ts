import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit, OnDestroy {

  receivedMessage!: string;
  private subscription!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.message$.subscribe(
      message => this.receivedMessage = message
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
