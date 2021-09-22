import { Component, Input, OnInit, TrackByFunction } from '@angular/core';
import { AdminArticle } from '../../model/admin-article';


@Component({
  selector: 'app-admin-articles-list',
  templateUrl: './admin-articles-list.component.html',
  styleUrls: ['./admin-articles-list.component.css']
})
export class AdminArticlesListComponent implements OnInit {
  @Input()
  articles: AdminArticle[];

  constructor() {}

  ngOnInit() {
  }

  trackBySlug: TrackByFunction<AdminArticle> = (i, item) => item.slug;
}
