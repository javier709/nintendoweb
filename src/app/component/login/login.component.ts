import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private fb: FormBuilder) { }

  //agrego validaciones y campos requeridos del formulario

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  // si se crea correctamente el formulario aparece un mensaje, tambien se puede ver por consola
  onSubmit() {
    alert('Formulario enviado!.');
    console.log(this.loginForm.value);
  }

  getControl(controlName: string) {
    return this.loginForm.get(controlName) as FormControl;
  }

}
