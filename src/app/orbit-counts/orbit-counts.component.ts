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

	let totalCountArray: number[]= [];
	let total: number = 0;
	let communication: number = 0;
	let probe: number = 0;
	let positioning: number = 0;
	let spaceDebris: number = 0;
	let spaceStation: number = 0;
	let telescope: number = 0;
	
	 if (this.satellites) {
		for(let index = 0; index < this.satellites.length; index++) {
			if (this.satellites[index].type === "Communication") {
				communication++
			}
			if (this.satellites[index].type === "Probe") {
				probe++
			}
			if (this.satellites[index].type === "Positioning") {
				positioning++
			}
			if (this.satellites[index].type === "Space Debris") {
				spaceDebris++
			}
			if (this.satellites[index].type === "Space Station") {
				spaceStation++
			}
			if (this.satellites[index].type === "Telescope") {
				telescope++
			}
		}
		total = communication + probe + positioning + spaceDebris + spaceStation + telescope;
		totalCountArray.push(communication, probe, positioning, spaceDebris, spaceStation, telescope, total)
	 }
return total;

} 
// 4) Counting Satellites
// orbit-counts is a component that shows the total number of satellites currently displayed in the table. Or at least, that's what it should do. Right now, it's just displaying NaN.

// To fix this, you'll need to replace the NaN string with a structural directive to indicate how many satellites are on display in the table. Like orbit-list, the orbit-counts component has access to the array of fetched satellites using an input property called satellites.

// The desired functionality is that the number displayed with change with the number of satellites displayed. Checkout this gif for reference. Note, you do not need to display the counts for each satellite type to pass the autograder, just use the satellite property to show the total number of satellites displayed.

// Bonus Missions
// 1) Zebra Stripes
// Alternate the color for every other row in the table. Choose whichever pair of colors you prefer, but the highlighting for space debris should still be distinct.

}