import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-course',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-course.component.html',
  styleUrl: './new-course.component.css'
})
export class NewCourseComponent {
  isError = false;
  courseForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    duration: new FormControl('',[Validators.required]),
    show: new FormControl(false,[Validators.required]),
    description: new FormControl('',[Validators.required]),
  });

  constructor( private router: Router, private api: ApiService){

  }

  async doSubmit(){
    if(this.courseForm.valid){
      this.isError = false;
      this.isError = !await this.api.newCourse(this.courseForm.value);
      this.router.navigateByUrl('/course');
    }else{
      this.isError = true;
      console.log("Please enter valid data")
    }
  }
}
