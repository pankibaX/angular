import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  logs$ = this.logger.getLogs();

  constructor(private logger: LoggerService) {
    this.logger.log('AppComponent initialized');
  }

  ngOnInit() {
    this.logger.log('AppComponent ngOnInit');
  }

  clearLogs() {
    this.logger.clear();
  }
}
