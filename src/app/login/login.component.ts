import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ServerCallService } from '../server-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private serverCallService: ServerCallService,
	private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      this.serverCallService
        .accessLogin('post', this.loginForm.value)
        .subscribe({
          next: (res) => {
            if (res?.statusCode == 200) {
				const { accessToken, refreshToken } = res?.data
				localStorage.setItem( "accessToken", accessToken );
				localStorage.setItem( "refreshToken", refreshToken );
				this.router.navigate(["/"]);
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      console.error('Form invalid');
    }
  }
}
