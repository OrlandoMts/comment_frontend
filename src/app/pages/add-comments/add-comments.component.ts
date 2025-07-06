import { Component, DestroyRef, inject } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import Swal from 'sweetalert2';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-add-comments',
  imports: [ReactiveFormsModule],
  templateUrl: './add-comments.component.html',
  styles: ``,
})
export class AddCommentsComponent {
  private _desRef = inject(DestroyRef);
  private commentSrv = inject(CommentService);
  private _fb = inject(FormBuilder);
  public formData: FormGroup = this._fb.group({
    text: ['', Validators.required],
  });

  submit() {
    if (this.formData.invalid) return this.formData.markAllAsTouched();
    const { text } = this.formData.value;
    this.commentSrv
      .addComment(text)
      .pipe(takeUntilDestroyed(this._desRef))
      .subscribe((res) => {
        Swal.fire({
          title: res?.msg,
          text: 'No olvides leer Romanos 5 😉',
          icon: 'success',
          confirmButtonText: 'Cerrar',
        });
        this.formData.get('text')?.setValue('');
      });
  }
}
