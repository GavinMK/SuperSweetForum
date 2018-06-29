import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-post-creator-confirm-dialog',
  templateUrl: './post-creator-confirm-dialog.component.html',
  styleUrls: ['./post-creator-confirm-dialog.component.css']
})
export class PostCreatorConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PostCreatorConfirmDialogComponent>) { }

  ngOnInit() {
  }

}
