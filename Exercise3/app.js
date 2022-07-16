
//1. as you can see toyota2 does not have a logModel function
// borrow that function from toyota1 and call i, so it console.logs "Toyota Rav4"

const toyota1 = {
    model: 'Toyota',
    type: 'Camry',
    logModel(){
        console.log(this.model, this.type);
    }
}

const toyota2 = {
    model: 'Toyota',
    type: 'Rav4',
}


let binded = toyota1.logModel.bind(toyota2)
binded()

//2. The following code does not work turn it into working code

const flights = {

    flights: [],

    priorityFlights: [],

    scheduleFlight(flight){
        this.flights.push(flight);
    },

    removeFlight(flight){
        this.flights = this.flights.filter(flightFilter);
        function flightFilter(f){
            if (flight === f){
                return priorityFlights.includes(flight);
            }
            return true
        }
    },

    makePriorityFlight(flight){
        this.priorityFlights.push(flight);
    }

}


flights.scheduleFlight('1');

flights.makePriorityFlight('1');

flights.removeFlight('1')

console.log(flights.flights);


//3. CarConstructor creates cars but what if someone decides to call it without new keyword,
// write a logic inside the CarConstructor function so it checks if the CarConstructor is called without
// new keyword it logs "please call me with new keyword" if not it creates a car

function CarConstructor(model, year){
    this.mode = model;
    this.year = year;
}

function CarConstructor(model, year){
    
    if(!new.target){ 
        return "please call me with new keyword"
    } else {
        this.model = model,
        this.year = year
    }
}

//4.make a new array out of objArr so that every object has the same logName function that is declared below
// use logName function do not create your own

const objArr = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

let logName = function(){
    console.log(this.name);
}

const mapped = objArr.map((element) => ({
  ...element,
  func: logName
}));

//5.use foreach method and use arrayOfObjectNames functionto log the fallowing objects names from the array;

const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]



function logArrayObjectNames(){
    console.log(this.name);
}

arrayOfObjectNames.forEach(function(element) {
    let boundObj = logArrayObjectNames.bind(element)
    boundObj()
})

// 6) for above mentioned arrayOfObjectNames Return an array of functions that when called would log each objects name
// use Array.map and logArrayObjectNames function

mappedFunc.forEach(i => i()); // this would print 1, 2, 3

const mappedFunc = arrayOfObjectNames.map( (item) => {
 function logArrayObjectNames(){
    console.log(this.name);
}
    let boundObj = logArrayObjectNames.bind(item);
    return boundObj
} )


//7. please take a look at the following
// this is just an example of object that you will still need to create by calling CreateCar constructor

const exampleOfAlreadyCreatedObject = {
    id: 1,
    model: 'Toyota',
    year: '1996',
    color: 'red',
    driveTrain: '4x4',
}


function CreateCar(id, model, year, color, driveTrain){
    // please implement CreateCar function so it creates cars with properties
    // id : ,
    // model: ,
    // year: ,
    // color: ,
    // driveTrain: ,
}

// please take a look at the the inventory object and implement the missing methods

function CreateCar(id, model, year, color, driveTrain){
    this.id = id,
    this.model = model,
    this.year = year,
    this.color = color,
    this.driveTrain = driveTrain
}

const inventory = {

    cars: [],

    addCar(car) {
    	this.cars.push(car)
    },

    removeCar(id) {
    	let index = this.cars.find(item => {
           return item.id === id
       })

        const res = this.cars.filter(item => {
            return item !== index
        })
        return(res)
    },

    listCars(){
    	this.cars.forEach(item => console.log(item))
    },

    listCarsByConditionCallback(conditionCallback){
        // this function should accept a parameter conditionCallback, which is a function,

        // the conditionCallback would be called on every car with that car passed to conditionCallback
        // if conditionCallback returns true then the car is logged into console.
        // please implement it
    }

}


inventory.addCar(new CreateCar(1, 'Toyota', '1996', 'red', '4x4'));
inventory.addCar(new CreateCar(2, 'Mercedes', '2000', 'white', 'rear wheel drive'));
inventory.addCar(new CreateCar(3, 'BMW', '2020', 'black', 'rear wheel drive'));
inventory.removeCar(2);
inventory.listCars();
inventory.listCarsByConditionCallback( (car) => car.model === 'BMW' && car.year === '2020' );


//8. Create a constructor function called Song. Song should take in two arguments, title and artist, which should both be
// added as properties when the Song constructor function is used. The Song function should also have a method called
// play When called, the play function should console.log the name of that specific song preceded by the
// word 'Playing:'.
// NOTE that play function should be the same for all instances of the Song constructor


function Song(title, artist){
    this.title = title,
    this.artirst = artist

    this.play = function(){
        console.log(this.title + " Playing")
    }
}

