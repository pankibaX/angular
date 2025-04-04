import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() inputValue: string = 'initial';
  private alive = true;

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges() {
    console.log('ngOnChanges called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    // Simulate an API call
    setTimeout(() => {
      if (this.alive) {
        console.log('API call completed');
      }
    }, 2000);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
    this.alive = false;
  }

  changeInput() {
    this.inputValue = 'changed ' + Math.random().toFixed(2);
  }

  destroyComponent() {
    // This would be handled by *ngIf in parent
  }
}
