// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue >= 42) {
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}
function distanceFromHqInFeet(someValue) {
  if (someValue >= 42) {
    return (someValue - 42) * 264;
  } else {
    return (42 - someValue) * 264;
  }
}
function distanceTravelledInFeet(start, destination) {
  if (destination >= start) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}
function calculatesFarePrice(start, destination) {
  if (destination >= start) {
    let distance = (destination - start) * 264;
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      let chargeDistance = distance - 400;
      return chargeDistance * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  } else {
    let distance = (start - destination) * 264;
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      let chargeDistance = distance - 400;
      return chargeDistance * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
}
