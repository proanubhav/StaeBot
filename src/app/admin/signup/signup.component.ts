import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.signupForm = this.fb.group({
      'firstName': ['', Validators.required],
      'phoneNumber': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const { firstName, phoneNumber, email, password } = this.signupForm.value;      
      this.authService.signup(firstName, phoneNumber, email, password).subscribe(
        response => {
          Swal.fire({
            title: 'Successful',
            text: `Hi ${response.data.firstName} you Signup Successfully`,
            icon: 'success',
            showConfirmButton: true,
            confirmButtonColor: '#e4354a',
            confirmButtonText: 'OK',
          }).then(({ isConfirmed }) => {
            this.router.navigate(['login']);
          })
        },
        error => {
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
