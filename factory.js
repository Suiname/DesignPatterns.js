function CarDoor( options ) {
  this.color = options.color || 'red';
  this.side = options.side || 'right';
  this.hasPowerWindows = options.hasPowerWindows && true;
}

function CarSeat( options ) {
  this.color = options.color || 'gray';
  this.material = options.material || 'leather';
  this.isReclinable = options.isReclinable && true;
}

function GenericCarPart (options) {
  for (var option in options) {
    this[option] = options[option];
  }
}

function CarPartFactory() {}
CarPartFactory.prototype.createPart = function createCarPart( options ) {
  var parentClass = null;

  if( options.partType === 'door' ) {
    parentClass = CarDoor;
  } else if( options.partType === 'seat' ) {
    parentClass = CarSeat;
  } else {
    parentClass = GenericCarPart;
  }

  return new parentClass( options );
}

// example usage
var myPartFactory = new CarPartFactory();
var seat = myPartFactory.createPart( {
  partType : 'seat',
  material : 'leather',
  color : 'blue',
  isReclinable : false
} );

var generic = myPartFactory.createPart({
  partType : "rearview mirror",
  material : 'glass + plastic',
  color: 'silver',
  isShiny: true,
  hasFuzzyDice: true
});
// outputs: true
console.log( seat instanceof CarSeat );

// outputs a CarSeat object with material "leather", color "blue", isReclinable "false"
console.log( seat );

// output a generic CarPart object with options of your choosing
console.log( generic );
