import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private logs: string[] = [];
  private logSubject = new BehaviorSubject<string[]>(this.logs);

  log(message: string) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: ${message}`;
    this.logs.push(logMessage);
    this.logSubject.next([...this.logs]);
  }

  clear() {
    this.logs = [];
    this.logSubject.next([...this.logs]);
  }

  getLogs(): Observable<string[]> {
    return this.logSubject.asObservable();
  }
}
