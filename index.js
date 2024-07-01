// Function to find matching drivers
function findMatching(drivers, test) {
    return drivers.filter(driver => driver.toLowerCase() === test.toLowerCase());
  }

 
function fuzzyMatch(drivers, test) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(test.toLowerCase()));
}

// Function to match name property
function matchName(driverObjects, test) {
  return driverObjects.filter(driver => driver.name.toLowerCase() === test.toLowerCase());
}



