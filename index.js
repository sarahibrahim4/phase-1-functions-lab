function distanceFromHqInBlocks(someValue){
const result1 = someValue-42;
return Math.abs(result1);
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(someValue){
    const result2 = distanceFromHqInBlocks(someValue)*264;
    return result2;
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);


function distanceTravelledInFeet(start, destination){
const result3 = Math.abs((start-destination))*264;
return result3;
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination){
if(distanceTravelledInFeet(start, destination)<400){
    return 0;
}
else if(distanceTravelledInFeet(start, destination)>400 && distanceTravelledInFeet(start, destination)<2000){
    const result4=(distanceTravelledInFeet(start, destination)-400)*0.02;
    return result4;
}
else if(distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start, destination)<2500){
    return 25;
}

else if(distanceTravelledInFeet(start, destination)>2500){
    return 'cannot travel that far';
}
}
calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);