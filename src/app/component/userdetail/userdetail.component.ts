import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/interface/response.interface';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  response: Response;
  mode: 'edit'  | 'locked' = 'locked';  // literal type: two modes, the mode can be either in edit mode or it can be in locked mode
  buttonText: 'Save Changes' | 'Edit' = 'Edit'; // the words on the button can either be 'Save Changes' or 'Edit' by default

  constructor(private activatedRoute: ActivatedRoute, private userSerrvice: UserService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log('User ID:', params.get('uuid')!);
      this.userSerrvice.getUser(params.get('uuid')!).subscribe(
        (response: any) => {
          console.log(response);
          this.response = response;

        }
      );
    });
  }

  // edit is disabled, but once click the 'Edit' button, then edit is enabled.   
  changeMode( mode?: 'edit'  | 'locked' ): void {  // ? means optional
    console.log(mode);
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';  // : means otherwise
    /* check to see if the mode is locked? if the mode is locked, put a question mark, then we set the mode to edit.
    you can see that we only have these two options(types of mode), as I defined this mode as a literal type, 
    so we can only pass edit and lock, eventhough we are not defining a type, that is another way to enforce the values that this mode can have. 
    When click the 'Edit' button, if the mode is 'locked', then we set it to 'edit', otherwise, we set it to 'locked', 
    because that is the only other state that can be in this mode. By default, the mode is going to be 'locked', 
    which is when they first come in to the page, and when they click the 'Edit' button, if it is 'locked' mode, we set it to 'edit' mode,
    otherwise, which means if it is 'edit' mode, then we set it to 'locked' mode. */
    this.buttonText = this.buttonText === 'Edit' ? 'Save Changes' : 'Edit';
    if (mode === 'edit') {
      // Logic to update the user on the back end
      console.log('Updating using on the back end');
    }
  }
  
}
