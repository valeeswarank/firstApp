import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/Users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUsers():Observable<Users[]>{
    const url = "http://localhost:3000/users";
    return this.http.get<Users[]>(url);
  }

  setUsers(user:Users):Observable<Users>{
    const url = "http://localhost:3000/users";
    return this.http.post<Users>(url, user);
  }  

  deleteUser(id:number):Observable<Users>{
    const url = "http://localhost:3000/users";
    return this.http.delete<Users>(url+"/"+id);
  } 
  
 
  selectedUser(id:number):Observable<Users>{
    const url = "http://localhost:3000/users";
    return this.http.get<Users>(url+"/"+id);
  } 

  updateUser(user:Users):Observable<Users>{
    const url = "http://localhost:3000/users";
    return this.http.put<Users>(url+"/"+user.id, user)
  }
  
  
}
