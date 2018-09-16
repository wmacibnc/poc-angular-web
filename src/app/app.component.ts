import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'uHuBank';

	constructor(public dialog: MatDialog) {

	}

}
