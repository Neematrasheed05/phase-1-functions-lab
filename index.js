function distanceFromHqInBlocks(){
return 1;
}
function distanceFromHqInBlocks(){
    return 8;
}
function distanceFromHqInBlocks(street){
    const blocks = 42;
    return Math.abs(street - blocks);
}
//let distance = distanceFromHqInBlocks(400);
//console.log(distance);

function distanceFromHqInFeet(){
    return 264;
}
//let distanceFromHq = distanceFromHqInFeet();
//console.log(distanceFromHq);
function distanceFromHqInFeet(street){
    const distanceinblock = 42;
    const countperblock = street;
    const feetdistance = 264;
    return Math.abs((distanceinblock - countperblock)*feetdistance);
}
function distanceTravelledInFeet (pointa,pointb){
    const feetdistance = 264;
    const totaldistance = Math.abs((pointa-pointb) * feetdistance);
    return (totaldistance);
}
function calculatesFarePrice(start, destination){
    const feetdistance = 264;
    const totaldistance = Math.abs((start-destination)* feetdistance);
    if (totaldistance < 400){
        return (0);
    }
    else if (totaldistance > 400 && totaldistance< 2000){
        return ((totaldistance - 400) * 0.02);
    }
    else if (totaldistance > 2000 && totaldistance < 2500){
        return(25);
    }
    else{
        return ("cannot travel that far");
    }

}