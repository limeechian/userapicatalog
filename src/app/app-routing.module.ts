import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';

// define the routes in the application that we want here
const routes: Routes = [
  // if you do: ctrl + space within the curly braces{}, you can see all the options that we can pass in here, and one of the options is the path
  { path: 'users', component: UsersComponent },
  { path: 'user/:uuid', component: UserdetailComponent }, // uuid == user id, means some random id 
  { path: '**', redirectTo: 'users' } /* when someone put in route that doesn't exist, we want to catch that as well
    if they put any route that is not 'users', or that is not 'user/:uuid', then in this case, it is going back to the UsersComponent. 
    the order of the these path(s) matters, so make sure you put this '**' at the very bottom of all your routes. 
    
    So, if they go to /users, then it is going to load the UsersComponent; if they do to /user, then it is going to load the UserdetailComponent;
    if they go to anything else, then it is also going to load the UsersComponent. 
    Now, you can see that it(the 1st and 2nd path) is repeating, --> { path: '**', component: UsersComponent } 
    So, instead of passing in a component, we can do: ctrl + space, then you select the `redirectTo?`, and you redirect to a specific route 'users'  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
