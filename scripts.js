function init() {
    let takeoff_btn = document.getElementById("takeoff");
    let land_btn = document.getElementById("landing");
    let missionAbort_btn = document.getElementById("missionAbort");
    let shuttle_background = document.getElementById("shuttleBackground");
    let p_flightStatus = document.getElementById("flightStatus");
    let p_spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let rocket = document.getElementById("rocket");
    rocket.style.position = "relative";

    takeoff_btn.onclick = function () {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            p_flightStatus.innerHTML = "Shuttle in flight.";
            shuttle_background.style.backgroundColor = "blue";
            p_spaceShuttleHeight.innerHTML = Number(p_spaceShuttleHeight.innerHTML) + 10000;
        }
    }
    land_btn.onclick = function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        p_flightStatus.innerHTML = "The shuttle had landed.";
        shuttle_background.style.backgroundColor = "green";
        p_spaceShuttleHeight.innerHTML = 0;
    }    
    missionAbort_btn.onclick = function () {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            p_flightStatus.innerHTML = "Mission aborted.";
            shuttle_background.style.backgroundColor = "green";
            p_spaceShuttleHeight.innerHTML = 0;
        }
    }
    up.addEventListener("click", function () {
        // let position = rocket.style.top.slice(0, rocket.style.top.length-2);
        // rocket.style.top = Number(position) - 10 + "px";
        rocket.style.top = updatePosition(rocket.style.top, false);
    });
    down.addEventListener("click", function () {
        // let position = rocket.style.top.slice(0, rocket.style.top.length-2);
        // rocket.style.top = Number(position) + 10 + "px";
        rocket.style.top = updatePosition(rocket.style.top, true);
    });
    left.addEventListener("click", function () {
        // let position = rocket.style.left.slice(0, rocket.style.left.length-2);
        // rocket.style.left = Number(position) - 10 + "px";
        rocket.style.left = updatePosition(rocket.style.left, false);
    });
    right.addEventListener("click", function () {
        // let position = rocket.style.left.slice(0, rocket.style.left.length-2);
        // rocket.style.left = Number(position) + 10 + "px";
        rocket.style.left = updatePosition(rocket.style.left, true);
    });
}

function updatePosition(positionString, positive) {
    let position = positionString.slice(0, positionString.length - 2);
    if(positive) {
        return Number(position) + 10 + "px";
    } else {
        return Number(position) - 10 + "px";
    }

}

window.onload = init;