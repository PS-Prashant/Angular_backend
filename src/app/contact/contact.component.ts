import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart3DAllModule, ChartAllModule  } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ RouterOutlet,Chart3DAllModule, ChartAllModule  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

	data: Object[] | undefined = [];
	primaryXAxis = {
		valueType: 'Category'
	};

	dataLabel: Object = {
		visible: true
	}
	legend: Object = {
		visible: true
	}
	tooltip: Object = {
		enable: true
	}

	ngOnInit() {
		this.data = [
			{ x: 'tesla', y: 10 },
			{ x: 'hyundai', y: 20 },
			{ x: 'tata', y: 15 },
			{ x: 'maruti', y: 25 },
			{ x: 'mg', y: 20 },
			{ x: 'op', y: 15 },
			{ x: 'tes', y: 25 }
		]
	}

}
