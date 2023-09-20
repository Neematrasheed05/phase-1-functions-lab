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
    /*this return statemnt returns the 42nd street distance - ((countperblock)counts how many
    blocks is it away from the 42nd street) *(the total distance in feet per block) */
}
function distanceTravelledInFeet (pointa,pointb){
    const feetdistance = 264;
    const totaldistance = Math.abs((pointa-pointb) * feetdistance);
    return (totaldistance);
    /*the return statement here, return the value travelled by feet from 1 point to another
     and multiplies it by the total distance in FEET per blocks covered*/
}
function calculatesFarePrice(start, destination){
    const feetdistance = 264;
    const totaldistance = Math.abs((start-destination)* feetdistance);
    if (totaldistance < 400){
        return (0);
        //this is for free sample for rides below 400
    }
    else if (totaldistance > 400 && totaldistance< 2000){
        return ((totaldistance - 400) * 0.02);
        /*returns charges of 2 cents if the total distance covered was over 400 and less
        than 2000 also i have subtracted 400 cos all rides below 400 is not charged
        and the cents are in 0.02 because were changing cents to dollars */
    }
    else if (totaldistance > 2000 && totaldistance < 2500){
        return(25);
        /*this returns 25cents for distance covered per block that is over 2000 
        and less than 2500, which means any distance betwn 2000-2500 and not over  */
    }
    else{
        return ("cannot travel that far");
        /*this else is for over 2500  */
    }

}