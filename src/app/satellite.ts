export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {

	if (this.type === "Space Debris"){
		return true;
   } else {
		return false;
   }
} 

}

// TODO 3a: fix isSpaceDebris check


// You need to make it easier to spot dangerous space debris in the satellite data. Inside of the Satellite class, there is a broken method called isSpaceDebris. This is meant to return true only when a Satellite object has this type.

// To highlight space debris, you first need to fix this method. Next, use the method to add a warning class onto the table cell. There's already a css style rule to make any element marked with the warning class appear red.

// Repair the isSpaceDebris method in the Satellite class. isSpaceDebris returns true if the satellite type is 'Space Debris', and it returns false otherwise.

// Use isSpaceDebris to add the warning CSS class to the <td> containing the satellite's type. Use an Angular attribute directive to accomplish this.