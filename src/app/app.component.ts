import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from './core/services/page.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { VoculaPage, Link } from './core/models/models';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'vocula-web';

  subLinks = new Observable<Array<Link>>(observer => {
    setInterval(() => {observer.next(this.page.subLinks)}, 100);
  });

  constructor(
    @Inject(DOCUMENT) private doc,
    private renderer: Renderer2,
    private router: Router,
    private page: PageService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit() {
    const script = this.renderer.createElement("script");
    script.type = "text/javascript";
    script.src = "/assets/onload.js";
    script.text = "";
    this.renderer.appendChild(this.doc.body, script);
  }

  public SearchHandler(key: string) {
    if (key.length >= 3)
      this.router.navigate(['search'], { queryParams: { q: key } });
  }

}
