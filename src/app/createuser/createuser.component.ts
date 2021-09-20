import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  message!: boolean;

  constructor(
    private router:Router,
    private service: DataService
  ) { }

  createForm = new FormGroup({
    name:new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender:new FormControl('', Validators.required),
    status:new FormControl('', Validators.required)

  });
  onSubmit() {
    if(this.createForm.valid) {
      console.log(this._v());
      this.service.postData(this.createForm.value).subscribe((data)=>{
        console.log(data)
        this.message=true;
        this.createForm.reset({})

      },
      (error)=>{
        console.log(error);
      })

    }
  }
  onClose(){
    this.message=false;
  }
  _v() {
    return this.createForm.value;
  }
  ngOnInit(): void {
  }


}
