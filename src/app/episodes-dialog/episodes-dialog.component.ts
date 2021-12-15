import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-episodes-dialog',
  templateUrl: './episodes-dialog.component.html',
  styleUrls: ['./episodes-dialog.component.scss'],
})
export class EpisodesDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public character: any) {}

  ngOnInit(): void {
    console.log(this.character, 'episodes');
  }
}
