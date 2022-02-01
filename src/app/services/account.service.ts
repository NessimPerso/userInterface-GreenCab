import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject !: BehaviorSubject<User | null>;
    public user !: Observable<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
		if (localStorage != null && localStorage.getItem('user') != null) {
        	this.userSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('user') || '{}'));
        	this.user = this.userSubject.asObservable();
		}
    }

    public get userValue(): User | null{
		if (this.userSubject != null) {
        	return this.userSubject.value;
		}
		return null;
    }

    login(email: string, password: string) {
        return this.http.get<User>('http://localhost:8080/passenger/connection?email='.concat(email).concat('&password=').concat(password))
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: User) {
        return this.http.post('http://localhost:8080/passenger/register', user);
    }
}