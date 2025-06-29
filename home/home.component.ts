import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, NgForm, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [RouterLink, ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  name1 = new FormControl('Rishi');
  city1 = new FormControl('USA');
  pinc1 = new FormControl('4265987');

  constructor(private router:Router){

  }

  goToProfile(){
    this.router.navigate(['profile'], {queryParams:{name:'Valeeswaran Krishnamoorthy'}})
  }

  getInfo(){
    console.log(this.name1.value);
  }

  setInfo(){
    this.name1.setValue('Vaishnawi');
    this.city1.setValue('Thiruvidaimarudur');
    this.pinc1.setValue('612104');
  }  

  homeForm = new FormGroup({
    name:new FormControl('', [Validators.required]),
    city:new FormControl('', [Validators.required, Validators.minLength(5)]),
    pinc:new FormControl('', [Validators.required])

  });

  submitData(){
    console.log("submit data called");
    console.log(this.homeForm.value)
    
  }

  get name(){
    return this.homeForm.get('name')
  }
  get city(){
    return this.homeForm.get("city")
  }
  get pinc(){
    return this.homeForm.get('pinc')
  }

  userData:any|null=null;

  addUser(val:NgForm){
    console.log(val);
    this.userData=val;
   
    
  }
}


