import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../user';


@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})


export class ListofusersComponent implements OnInit {
  p: Number = 1;
  count: Number = 10;
   dataList:any=[];
  constructor(private service: DataService, private router:Router) {
    this.service.getUsers().subscribe((data)=>{
    console.log(data);
    this.dataList=data
     const datainfo=JSON.stringify(data);
     console.log(datainfo)
     this.dataList=JSON.parse(datainfo)
   console.log(this.dataList.data)
    },
    (error)=>{
      console.log(error)
    })
  }

  ngOnInit(): void {
  }
  updateuser(id:number){
     this.router.navigate(['editusers', id])
  }
  deleteUser(id:number){
       this.service.deleteUserInformation(id).subscribe((data)=>{
         console.log(data)
         this.router.navigate(['deleteuser'])
       },
       (error)=>{
         console.log(error)
       })
  }
}
