import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {

  message!: boolean;
  id: any;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private service: DataService,
    private aroute:ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.id=this.aroute.snapshot.params['id']
    this.service.getUserbyId(this.id).subscribe((data)=>{
      this.updateForm=data;
      console.log(this.updateForm)
    },
    (error)=>{
      console.log(error)
    })


  }
  updateForm = new FormGroup({
    name:new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender:new FormControl('', Validators.required),
    status:new FormControl('', Validators.required)

  });
  onSubmit() {
    if(this.updateForm.valid) {
      console.log(this._v());
      this.id=this.aroute.snapshot.params['id']
      this.service.updateUser(this.id).subscribe((data)=>{
        this.message=true;
        this.updateForm.reset({})
        console.log(data)
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
    return this.updateForm.value;
  }

}
