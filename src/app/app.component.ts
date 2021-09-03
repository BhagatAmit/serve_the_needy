import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServeTheNeedy';
  isShown: boolean = true; // hidden by default
  toggleShow() {
    this.isShown = !this.isShown;
  }
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void { }
 
}
