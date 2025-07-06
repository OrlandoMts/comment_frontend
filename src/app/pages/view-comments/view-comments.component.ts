import { DatePipe } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-view-comments',
  imports: [DatePipe],
  templateUrl: './view-comments.component.html',
  styles: ``,
})
export class ViewCommentsComponent {
  private _desRef = inject(DestroyRef);
  private commentSrv = inject(CommentService);
  public comments: any[] = [];

  ngOnInit() {
    // TODO: manejar la subscripcion
    this.commentSrv
      .getComments()
      .pipe(takeUntilDestroyed(this._desRef))
      .subscribe((res: any) => {
        this.comments = res!.data;
      });
  }
}
