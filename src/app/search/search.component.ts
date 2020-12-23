import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoculaSearchResult } from '../core/models/models';
import { Meta, Title } from '@angular/platform-browser';
import { PageService } from '../core/services/page.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchResults: VoculaSearchResult[];
  public foundCount: number;

  constructor(
    private route: ActivatedRoute,
    private page: PageService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    let query = this.route.snapshot.queryParamMap.get("q");
    this.page.Search(query).then((data: VoculaSearchResult[]) => {
      this.foundCount = data.length;
      this.searchResults = data;
      this.title.setTitle('Search');
      this.meta.updateTag({ name: 'description', content: 'Search results' });
    });
  }

}
