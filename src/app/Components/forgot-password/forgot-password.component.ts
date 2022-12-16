import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit() {
      this.forgotPasswordForm = this.formBuilder.group({
          email: ['', Validators.required],
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgotPasswordForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.forgotPasswordForm.valid) {
        let data={
          email:this.forgotPasswordForm.value.email
        }
          this.user.forgetPassword(data).subscribe((response:any)=>{
            console.log(response)
          })
      }
  }

}
