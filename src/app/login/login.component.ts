import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutheticationService } from '../authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showError = false;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private authService: AutheticationService, private router: Router) { }

  
  ngOnInit(): void {

  }

 
  submit() {      
     if(this.loginForm.value.username == 'kminchelle') {
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(res => {
        if(res) {
          this.router.navigate(['product-store'])
        }   
      })
     } else if(this.loginForm.value.username == 'user'){
      this.router.navigate(['product-checkout'])
     } else {
        this.showError = true;
     }

  }


}
