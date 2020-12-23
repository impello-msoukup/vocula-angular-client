import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { VoculaPage } from '../core/models/models';
import { PageService } from '../core/services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public pageData: VoculaPage = new VoculaPage();

  constructor(
    private router: Router,
    private page: PageService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.page.LoadPage(this.router.url.split('?')[0]).then((data: VoculaPage) => {
      this.pageData = data;
      this.pageData.breadcrumb.splice(-1, 1);
      this.title.setTitle(this.pageData.title);
      this.meta.updateTag({ name: 'description', content: this.pageData.metadata.description });
    });  
  }

}
