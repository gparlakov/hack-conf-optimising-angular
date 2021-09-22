import { Component, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';
import { TextWidthService } from '../../../core/services/text-width.service';
import { AdminArticle } from '../../model/admin-article';

let componentInstancesCount = 1;
@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminArticleComponent implements DoCheck {
  @Input()
  article: AdminArticle;

  count = componentInstancesCount;
  counterType: string;
  changeDetections = 1;

  shortText: string;

  seeMore = true;
  showEllipsis: boolean;

  constructor(private textWidth: TextWidthService) {
    componentInstancesCount += 1;
  }

  ngDoCheck(): void {
    if (this.article) {
      const { body, width, height, counterType } = this.article;
      this.counterType = counterType;
      this.shortText = this.article.shortText = this.textWidth.fitTextIn(body, width, height);
      this.showEllipsis = this.shortText !== body;
      console.log('cycle');

      this.twoMsOperation();
    }
    this.changeDetections += 1;
  }

  buttonToggleSeeMoreClick() {
    this.seeMore = !this.seeMore;
  }

  text() {
    return this.seeMore
      ? this.shortText + (this.showEllipsis ? '...' : '')
      : this.article != null
      ? this.article.body
      : '';
  }

  private twoMsOperation() {
    // const d = new Date();
    for (let i = 0; i < 400; i++) {
      const x = document.querySelectorAll('*').length;
    }
    // console.log(new Date().valueOf() - d.valueOf());
  }

  private fiveMsOperation() {
    // const d = new Date();
    for (let i = 0; i < 800; i++) {
      const x = document.querySelectorAll('*').length;
    }
    // console.log(new Date().valueOf() - d.valueOf());
  }
}
