import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];
	
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
  
	isSpaceDebris(type: string): boolean {

		if (type === "Space Debris"){
			return true;
	} else {
			return false;
	}
	} 

	isSpaceStation(type: string): boolean {

		if (type === "Space Station"){
			return true;
	} else {
			return false;
	}
	} 

	isCommunication(type: string): boolean {

		if (type === "Communication"){
			return true;
	} else {
			return false;
	}
	} 
	isProbe(type: string): boolean {

		if (type === "Probe"){
			return true;
	   } else {
			return false;
	   }
	} 
	
	isTelescope(type: string): boolean {

		if (type === "Telescope"){
			return true;
	   } else {
			return false;
	   }
	} 

		
	isPositioning(type: string): boolean {

		if (type === "Positioning"){
			return true;
	   } else {
			return false;
	   }
	} 

}
