import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm !: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,private user:UserService) { }

    ngOnInit() {
        this.resetPasswordForm = this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.resetPasswordForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.resetPasswordForm.invalid) {
            let data={
                password:this.resetPasswordForm.value.password,
                confirmPassword:this.resetPasswordForm.value.confirmPassword
              }
                this.user.resetPassword(data).subscribe((response:any)=>{
                  console.log(response)
                })
        }
    }
}
