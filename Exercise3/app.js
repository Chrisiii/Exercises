
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