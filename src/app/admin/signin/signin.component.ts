import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  isLogin: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLogin = true;
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        response => {
          this.isLogin = false;      
          Swal.fire({
            title: 'Successful',
            text: `Hi ${response.data.firstName} you Logged in Successfully`,
            icon: 'success',
            showConfirmButton: true,
            confirmButtonColor: '#e4354a',
            confirmButtonText: 'OK',
          }).then(({ isConfirmed }) => {
            this.router.navigate(['admin/dashboard']);
          })
        },
        error => {
          this.isLogin = false;
          console.error('Login failed', error);
          Swal.fire({
            title: 'Warning',
            text: `${error.message}`,
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonColor: '#e4354a',
            confirmButtonText: 'OK',
          }).then(({ isConfirmed }) => {
            
          })
          // Show error message to the user
        }
      );
    }
  }
}
