import { Component } from '@angular/core';
import { ApiService, Course } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses: Course[] = [];

  constructor(private api: ApiService){
    this.api.getCourses().subscribe((data)=>{
      this.courses = data;
    });
  }

}
