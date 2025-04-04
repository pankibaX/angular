import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject, tap } from 'rxjs';
import { User } from '../models/user.model';
import { LoggerService } from './logger.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  sendMessage(message: string) {
    this.messageSource.next(message);
  }

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private users: User[] = [];

  constructor(private http: HttpClient, private logger: LoggerService) { }

  getUsers(): Observable<User[]> {
    if (this.users.length > 0) {
      return of(this.users);
    }
    return this.http.get<User[]>(this.apiUrl).pipe(
      tap(users => {
        this.users = users;
        this.logger.log('Fetched users successfully');
      }),
      catchError(error => {
        this.logger.log(`Error fetching users: ${error.message}`);
        return of([]);
      })
    );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(() => this.logger.log(`Fetched user with id ${id}`)),
      catchError(error => {
        this.logger.log(`Error fetching user ${id}: ${error.message}`);
        return of({} as User);
      })
    );
  }
}
