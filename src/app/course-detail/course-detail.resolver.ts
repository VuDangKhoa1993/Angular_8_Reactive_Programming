import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Course } from "app/shared/model/course";
import { Lesson } from "app/shared/model/lesson";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CoursesService } from "app/services/courses.service";

@Injectable({
    providedIn: 'root'
})
export class CourseDetailResolver implements Resolve<[Course, Lesson[]]> {

    constructor(
        private courseService: CoursesService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[Course, Lesson[]]> {
        return this.courseService.findCourseByUrl(route.params['id'])
            .switchMap(course => this.courseService.findLessonsForCourse(course.id)
                .map(lesson => <any>([course, lesson])));
    }
}