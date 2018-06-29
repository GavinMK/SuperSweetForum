import {Component, Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable, of} from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material';
import {PostCreatorConfirmDialogComponent} from './post-creator-confirm-dialog/post-creator-confirm-dialog.component';

@Injectable()
export class PostCreatorDeactivateGuard implements CanDeactivate<Component> {
  dialogRef: MatDialogRef<PostCreatorConfirmDialogComponent>;

  constructor(private dialog: MatDialog) {}

  canDeactivate(comp: any){
    if(!comp.saved) {
      this.dialogRef = this.dialog.open(PostCreatorConfirmDialogComponent, {
        disableClose: true
      });
      return this.dialogRef.afterClosed();
    }
    return of(true);

  }
}
