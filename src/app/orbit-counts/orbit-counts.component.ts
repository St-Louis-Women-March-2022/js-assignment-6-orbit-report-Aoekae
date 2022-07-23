import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];
	
	isCommunication: boolean = false;
	isProbe: boolean = false;
	isPositioning: boolean = false;
	isTelescope: boolean = false;
	isSpaceDebris: boolean = false;
	isSpaceStation: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
		for (let index=0; index < this.satellites.length; index++){
			if (this.satellites[index].type===type) {
				count++
			}
		}
	} return count;
  }
}