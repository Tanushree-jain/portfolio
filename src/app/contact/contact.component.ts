import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  private googleScriptURL = 'https://script.google.com/macros/s/AKfycbyUiehjJgo8OjlMPaKJs4_Cs15Yk41EGj_7vKASh_Ve2AG8JBDh9CwfA8wZnJWVT40O-A/exec';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.http.post(this.googleScriptURL, formData).subscribe(
        response => {
          alert('Your message has been sent successfully!');
          this.contactForm.reset();
        },
        error => {
          alert('There was an error sending your message. Please try again later.');
        }
      );
    }
  }
}