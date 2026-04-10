import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  imports: [FormsModule],
  templateUrl: './reg-form.html',
  styleUrl: './reg-form.css'
})
export class RegFormComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit(): void {
    console.log('Registration data:', this.formData);
  }
}
