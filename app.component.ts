import { Component, signal, effect, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgIf, NgSwitchCase } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgSwitch } from '@angular/common';
import { NgSwitchDefault } from '@angular/common';
import { UsrComponent } from './usr/usr.component';
import { CommonModule } from '@angular/common';
import { CurruncyConvertorPipe } from './pipe/curruncy-convertor.pipe';
import { ProductService } from './services/product.service';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { Users } from './interfaces/Users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurruncyConvertorPipe, CommonModule, RouterLink, FormsModule, TopbarComponent, SidebarComponent, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, UsrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'First Angular Web Application'
  author = "Krishnamoorthy Valeeswaran"
  date = "20250525"
  version = "1.0"
  amount=1000

  userName2="Rishi V"

  alertFirst() {
    console.log("this is my first alert message")
    this.alertSecond()
  }

  alertSecond() {
    console.log("this is my second alert message")
  }

  sum_number(a: number, b: number) {
    let x: number = 100
    console.log(a + b + x)
  }
  count: number = 0

  handleIncrement() {
    this.count = this.count + 1
  }
  handleDecrement() {
    this.count = this.count - 1
  }
  handleRest() {
    this.count = 0
  }

  handleCounter(val: string) {
    if (val == "plus") {
      this.count = this.count + 1
    } else if (val == "minus") {
      this.count = this.count - 1
    }
    else {
      this.count = 0
    }
  }

  username = ""

  getUserName(event: Event) {
    let name = (event.target as HTMLInputElement).value
    console.log(name)
    //this.username=name;
  }
  setUserName(){
    this.username="valee"
  }

  getUserNameWithTemplate(val:string){
    this.username=val
  }

  display=true

  show(){
    this.display=true
  }
  hide(){
    this.display=false
  }
  toggle(){
    this.display = !this.display
  }

  bgcolor='red'

  users=["valee","bhuvana","vaishu","rishi"]

  students=[
    {name:"valee", age:49},
    {name:"bhuvana",age:47},
    {name:"vaishu",age:17},
    {name:"rishi",age:21}
  ]

  handleEvent(event:Event){
    console.log("function called", event.type);
    console.log("function called", (event.target as HTMLInputElement).name, (event.target as HTMLInputElement).value);

  }

  data = 100;
  counts = signal(0) ;
  
  constructor(private productService:ProductService, private usersService:UsersService){
    effect(()=>{
      console.log(this.data);
      console.log(this.counts());
      if (this.counts()!=this.data){
        
      }
    })
  }

  productData:any;
  usersData:Users[]=[];
  selectedUser:Users|undefined;

  ngOnInit(){
    console.log(this.productService.productData());
    this.productService.productList().subscribe((data:any)=>{
      console.log(data);
      this.productData=data.products;
    });

    this.getUser();
 
  }

  getUser(){
    this.usersService.getUsers().subscribe((data:Users[])=>{
      console.log(data);
      this.usersData=data;
      
    })       
  }
  addUser(user:Users){
    if(!this.selectedUser){
      console.log(user);
      this.usersService.setUsers(user).subscribe((data:Users)=>{
        console.log(data);
        if(data){
          this.getUser();
        }
      })
    }else{
      console.log("for update the user");
      const userData={...user,id:this.selectedUser.id}
      this.usersService.updateUser(userData).subscribe((data:Users)=>{
        if(data){
          this.getUser();
        }
      })
    }
  }

  deleteUser(id:any){
    console.log(id);
     this.usersService.deleteUser(id).subscribe((data:Users)=>{
      console.log(data);
      if(data){
        this.getUser();
      }
    })   
  }

  selectUser(id:number){
    console.log(id);
     this.usersService.selectedUser(id).subscribe((data:Users)=>{
      console.log(data);
      if(data){
        //this.getUser();
        this.selectedUser=data;
      }
    })       
  }

  x = signal(10);
  y = signal(10);
  z = computed(()=> this.x() + this.y());

  updateValue(){
    this.data = this.data + 100;
    this.counts.set(this.data);
    console.log("z=", this.z())
    this.x.set(this.data);
    console.log("z=", this.z());

  }

  username1=signal('valee');

  changeName(){
    this.username1.set('Rishi');
    console.log("username1: ", this.username1())
  }
  
  names=['valee','bhuvana', 'rishi', 'vaishu', 'veera']

  name1="valee"

  task = "Wake up valee!";
  taskList:{id:number,name:string}[]=[]

  addTask(){
    this.taskList.push({id:this.taskList.length+1, name:this.task});
    console.log(this.taskList)
  }
  deleteTask(id:number){
    this.taskList = this.taskList.filter((item)=>item.id!=id)
  }

  color1="red";
  color2="green";
  flag=false;

  show1=true;
  show2=false;

  toggleMe(){
    this.show2=!this.show2;
  }

  color=""

  users1=[
    {
      id:1,
      name: 'valee',
      age: 49
    },
    {
      id:2,
      name: 'bhuvane',
      age: 46
    },
    {
      id:3,
      name: 'rishi',
      age: 21
    },
    {
      id:4,
      name: 'vaishu',
      age: 17
    },    
  ]
}
