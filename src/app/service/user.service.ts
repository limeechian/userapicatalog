import { HttpClient } from '@angular/common/http'; // HttpClient, coming from the same package (just like you import HttpClientModule in the app.module.ts file)
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Response } from '../interface/response.interface';
import { User } from '../interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl: string = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }  // import or inject the HttpClient by just going inside the constructor, give it a name: HttpClient 

  // Function 1 - Fetch users
  getUsers(size: number = 10): Observable<any> { // Observable of any
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`).pipe(
      map(response => this.processResponse(response)));
  } 

  // Function 2 - Fetch one user using the user UUID
  getUser(uuid: string): Observable<any> { 
    return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`).pipe(
      map(response => this.processResponse(response)));
  } 
/* These are the two functions, they are both sending get requests, and we are just specifying the results size for function 1, 
and specifying the uuid for function 2. Now, we can use these two functions in the components, and then fetch the data that we need. 

So, we have the component folder, and we have the users component folder and userdetail component folder
In the users component, we are going to fetch the data, fetch all the users, means we are going to call getUsers() function, means use function 1.
In the userdetail component, we are going to call getUser() function, means use function 2, so that we can show the detail for that specific user by that uuid. */

  private processResponse(response: Response): Response {
    return { // return in array, array of users
      info: { ...response.info },
      results: response.results.map((user: any) => (<User>{
        uuid: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        username: user.login.username,
        gender: user.gender,
        address: `${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.state} ${user.location.country} ${user.location.postcode}`, // string ``
        dateOfBirth: user.dob.date,
        phone: user.phone,
        imageUrl: user.picture.medium,
        coordinates: { latitude: +user.location.coordinates.latitude, longitude: +user.location.coordinates.longitude }  // coordinates is an object, put + will change things from being strings to numbers
      })) 
    };
  }

}
