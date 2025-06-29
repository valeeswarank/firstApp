import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  name:string|null="";


  constructor(private route:ActivatedRoute){

  }
  ngOnInit(){
    this.name = this.route.snapshot.paramMap.get('name')
    console.log(this.name)
    this.route.queryParams.subscribe(params=>{
      console.log(params['name'])
      this.name = params['name'];
    })

  }
}
