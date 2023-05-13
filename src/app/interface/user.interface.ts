import { Coordinate } from "./coordinate.interface";


export interface User {
     uuid: string;
     firstName: string;
     lastName: string;
     email: string;
     username: string;
     gender: string;
     address: string;
     dateOfBirth: string;
     phone: string;
     imageUrl: string;
     coordinates: Coordinate; // we want to show the user location, we don't have this Coordinate interface yet, but we are going to define it later
/* here we are just defining everything that we want our user to have, and we know that the api that we are using, it has all of these information,
if there is something that it doesn't have, then at least we should be able to figure it out using the existing information that we already have.
The point is someway somehow, we should be able to get all of these information using that one api, either if we have to multiply something by something else, 
or concatenate some characters together, we know one way or another we can get all of these information. */


}