// Code your solution in this file!
function distanceFromHqInBlocks(startingBlock) {
    let result = startingBlock - 42;
    if (result >= 0) {
        return result;
    } else {
        result = Math.abs(result);
        return result;
    }
}

function distanceFromHqInFeet (startingBlock) {
    let answer = distanceFromHqInBlocks(startingBlock);
    return answer *= 264;
}

function distanceTravelledInFeet (start, stop) {
    let distance = start - stop;
    if (distance >= 0) {
        distance *= 264;
        return distance;
    } else {
        distance = Math.abs(distance);
        distance *= 264;
        return distance;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400) {
        if (distance <= 2000) {
            distance = (distance - 400) * 0.02;
            return distance;
        } else if (distance > 2000) {
            if (distance <= 2500) {
                return 25;
            } else {
                return 'cannot travel that far';
            }
        }
    }
}