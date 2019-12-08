import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.loading$ = this.router.events.map(event => {
      return event instanceof NavigationStart || event instanceof RoutesRecognized
    });
  }

}
