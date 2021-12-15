import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-characters-dialog',
  templateUrl: './characters-dialog.component.html',
  styleUrls: ['./characters-dialog.component.scss'],
})
export class CharactersDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public episode: any) {}

  ngOnInit(): void {}
}
