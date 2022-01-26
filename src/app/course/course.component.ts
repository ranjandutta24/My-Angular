import { Component, OnInit } from '@angular/core';

import { CourserService } from '../courses.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    
    title = 'Course Component/folder(create from CLI, with html,css,tc,unit_test file)';
    courses;
    imageUrl ="https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=162&w=235";
    

    isActive=true;
    title1 = 'on/off';
    action(){
        console.log("Button was Clicked")
    }
    change(){
        this.isActive = ! this.isActive
    }
    email = ""
    onKeyUp()  {
        console.log(this.email);
    }
    course={
        title : 'my course',
        rating: 4.835,
        students: 30837,
        price: 500.00,
        releasDate: new Date(2022,1,20),
        describtion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fugiat quos suscipit accusantium maiores doloribus, autem, et officia praesentium officiis saepe! Officiis provident laudantium ipsa impedit illo qui nesciunt, reiciendis magnam error explicabo, beatae amet, vel quasi doloribus in. Ut odit magnam magni nemo tempore consequuntur unde ad quibusdam et!'
    }

    constructor(service:CourserService){
        
        this.courses = service.getCourses();
    }

  ngOnInit(): void {
  }

}
