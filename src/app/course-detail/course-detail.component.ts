import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from "../shared/model/course";
import { Lesson } from "../shared/model/lesson";
import { CoursesService } from "../services/courses.service";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs";


@Component({
    selector: 'course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

    course$: Observable<Course>;
    lessons$: Observable<Lesson[]>;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.course$ = this.activatedRoute.data.map(data => data['detail'][0]);
        this.lessons$ = this.activatedRoute.data.map(data => data['detail'][1]);
    }


}
