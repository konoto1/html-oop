import { Vehicle } from "./vehicle/Vehicle.js";
import { Truck } from "./vehicle/Truck.js";
import { Motocross } from "./vehicle/Motocross.js";
import { Harley } from "./vehicle/Harley.js";
import { Britva } from "./vehicle/Britva.js";
import { Tractor } from "./vehicle/Tracktor.js";
import { Harvester } from "./vehicle/Harvester.js";
import { Loader } from "./vehicle/Loader.js";


const vehicle = new Vehicle('Lamborghini');
console.log(vehicle.intro());
console.log(vehicle.about());

const truck = new Truck('Peterbilt');
console.log(truck.intro());
console.log(truck.about());

const motocross = new Motocross('KTM');
console.log(motocross.intro());
console.log(motocross.about());


const harley = new Harley('Harley');
console.log(harley.intro());
console.log(harley.about());

const britva = new Britva('Ducati');
console.log(britva.intro());
console.log(britva.about());

const tractor = new Tractor('John Deere');
console.log(tractor.intro());
console.log(tractor.about());

const harvester = new Harvester('Claas');
console.log(harvester.intro());
console.log(harvester.about());

const loader = new Loader('Caterpillar');
console.log(loader.intro());
console.log(loader.about());