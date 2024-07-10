import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type requestCallType = 'serverCall' | 'localCall'

@Injectable({
  providedIn: 'root',
})

export class ServerCallService {
  constructor(
	private http: HttpClient
  ) {}

  getData( methodType: string, payload?: any, requestFor?: requestCallType ): Observable<any> {

	if ( requestFor == 'localCall' ) {
		return ( this.http as any )[methodType]( 'http://localhost:3000/test', payload );
	} else {
		return ( this.http as any )[methodType]( 'https://learn-backened.onrender.com/test', payload );
	}
	
  }

  accessLogin( methodType: string, payload?: any, requestFor?: requestCallType ): Observable<any> {
	return ( this.http as any )[methodType]( 'http://localhost:8000/api/v1/users/login', payload, { withCredentials: true } );
  }

  getUserData( methodType: string = 'get' ): Observable<any>  {
    return ( this.http as any )[methodType]( 'http://localhost:8000/api/v1/users/user-details', { withCredentials: true } );
  }

}
