export class VoculaBreadcrumbItem {
  path: string;
  title: string;
}

export class VoculaAuthor {
  name: string;
  email: string;
}

export class VoculaMetadata {
  description: string;
  author: VoculaAuthor;
  keywords: string[];
  constructor() {
    this.author = new VoculaAuthor();
  }
}

export class VoculaTaxonomy {
  category: string[];
  tag: string[];
}

export class VoculaPage {
  path: string;
  breadcrumb: VoculaBreadcrumbItem[];
  lang: string;
  title: string;
  date: Date;
  metadata: VoculaMetadata;
  taxonomy: VoculaTaxonomy;
  alternatives: string[];
  body: string;
  children: VoculaPage[];
  constructor() {
    this.breadcrumb = [];
    this.metadata = new VoculaMetadata();
    this.taxonomy = new VoculaTaxonomy()
    this.children = [];
  }
}

export class VoculaSearchResult {
  path: string;
  title: string;
  date: Date;
  preview: string;
  pageRank: number;
}

export class Link {
  path: string;
  title: string;
}
