import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VoculaPage, Link, VoculaSearchResult } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class PageService {

  private httpHeader: HttpHeaders;
  
  public activePage: VoculaPage;
  public subLinks: Array<Link> = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.activePage = new VoculaPage();
  }

  private pathLevelUp(path: string) {
    let folders = path.split("/");
    folders.splice(folders.length-1,1);
    return folders.join("/") ? folders.join("/") : "/";
  }

  public async LoadPage(path: string): Promise<VoculaPage> {
    this.httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    let data = await this.http.get<VoculaPage>(`${environment.apiUrl}/sites/${environment.siteName}/pages?lang=${environment.language}&path=${path}&recursion=true`, { headers: this.httpHeader }).toPromise();
    this.activePage = data;
    this.subLinks = [];
    if (this.router.url != "/") {
      // Link to directory level up
      let link = new Link();
      link.title = "cd ..";
      link.path = this.pathLevelUp(this.router.url);
      this.subLinks.push(link);
    }
    this.activePage.children.forEach(element => {
      let link = new Link();
      link.title = element.title;
      link.path = element.path;
      this.subLinks.push(link);
    });
    return data;
  }

  public GetActivePage(): Observable<VoculaPage> {
    const page = new Observable<VoculaPage>(observer => {
      setTimeout(() => { observer.next(this.activePage)}, 100);
    });
    return page;
  }

  public async Search(query: string): Promise<VoculaSearchResult[]> {
    this.httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    let data = await this.http.get<VoculaSearchResult[]>(`${environment.apiUrl}/sites/${environment.siteName}/pages/search?lang=${environment.language}&keyword=${query}`, { headers: this.httpHeader }).toPromise();
    return data;
  }

}
