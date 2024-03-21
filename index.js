// Code your solution in this f9ile!
function distanceFromHqInBlocks(blocks) {
    const hqBlock = 42;
    return Math.abs(blocks - hqBlock);
  }
  function distanceFromHqInFeet(blocks) {
    const hqBlock = 42;
    const blockSizeInFeet = 264;
    const distanceInBlocks = Math.abs(blocks - hqBlock);
    return distanceInBlocks * blockSizeInFeet;
  }
  function distanceTravelledInFeet(start, destination) {
    const blockSizeInFeet = 264;
    const distanceInBlocks = Math.abs(destination - start); 
    return distanceInBlocks * blockSizeInFeet; 
  }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
    
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      
      const extraFeet = distanceInFeet - 400;
      return extraFeet * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      
      return 25;
    } else {
      
      return 'cannot travel that far';
    }
  }