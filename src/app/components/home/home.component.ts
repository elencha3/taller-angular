import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { UserResponseModel } from 'src/app/model/user-response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page: number;
  totalPages: number;
  loading: boolean = true;
  uResponse!: UserResponseModel;
  

  constructor(private userService: UsersService) { 
    this.page = 0;
    this.totalPages = 0;
  }

  ngOnInit(): void {
  }

  updateData(): void {
    this.loading = true;
    this.userService.getUsers(this.page).subscribe( r=>{
      
    })
  }

}
