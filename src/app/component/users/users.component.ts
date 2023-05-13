import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/interface/response.interface';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  response: Response;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers(20).subscribe(
      (results: any) => {
        console.log(results);
        this.response = results; /* we want to set this response to whatever result we are going to get. we set(assign) it equal to
        the result that we get from the api, now we have a way in the template to access this information that is coming for us
        because we set it down there to this response right here. */
        
      }
    );
  }


    
  

  
}
