import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
/* MATERIAL */
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  standalone: true,
 imports: [
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email='';
  password='';

  constructor(private api:ApiService, private router:Router){}
  login(){

    this.api.login({
      email:this.email,
      password:this.password
    }).subscribe((res:any)=>{

      localStorage.setItem('token',res.token);

      
 this.router.navigate(['/tasks']);

    });

  }

}
