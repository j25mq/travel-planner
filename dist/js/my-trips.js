const myTripsStr = localStorage.getItem('my-trips');
console.log("myTripsStr", myTripsStr);

const myTrips = eval(`(${myTripsStr})`);
console.log("myTrips", myTrips);

myTrips.forEach((myTrip, i) => {
    const app2 = document.getElementById('app2');
    const p = document.createElement('p'),
        location = myTrip.location;
    p.innerHTML = `My destination #${i} is <b>${location}</b>`;
    app2.appendChild(p);
});