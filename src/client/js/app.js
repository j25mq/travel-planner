// buttons
const addTripBtn = document.getElementById('generate');
const removeTripBtn = document.getElementById('delete');
const editTripBtn = document.getElementById('edit');

const app2 = document.getElementById('app2');

const appContent = document.createElement('div');
appContent.setAttribute('class', 'appContent');

const locationOutput = document.createElement('div');
locationOutput.setAttribute('id', 'locationOutput');

const dateOutput = document.createElement('div');
dateOutput.setAttribute('id', 'dateOutput');

const nbOfDaysOutput = document.createElement('div');
nbOfDaysOutput.setAttribute('id', 'nbOfDaysOutput');

const flightOutput = document.createElement('div');
flightOutput.setAttribute('id', 'flightOutput');

const hostingOutput = document.createElement('div');
hostingOutput.setAttribute('id', 'hostingOutput');

const notesOutput = document.createElement('div');
notesOutput.setAttribute('id', 'notesOutput');

const holder1 = document.createElement('div');
holder1.setAttribute('class', 'holder');
holder1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/></svg>
Trip to:`;
// holder1.appendChild(locationOutput);

const holder2 = document.createElement('div');
holder2.setAttribute('class', 'holder');
holder2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16"><path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>
Date of departure:`;
// holder2.appendChild(dateOutput);

const holder3 = document.createElement('div');
holder3.setAttribute('class', 'holder');
holder3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`;
// holder3.appendChild(nbOfDaysOutput);

const holder4 = document.createElement('div');
holder4.setAttribute('class', 'holder');
holder4.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/></svg>
Flight information:`;
// holder4.appendChild(flightOutput);

const holder5 = document.createElement('div');
holder5.setAttribute('class', 'holder');
holder5.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/></svg>
Hosting information:`;
// holder5.appendChild(hostingOutput);

const holder6 = document.createElement('div');
holder6.setAttribute('class', 'holder');
holder6.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16"><path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/><path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/></svg> 
Notes:`;
// holder6.appendChild(notesOutput);

const btns = document.createElement('div');
btns.setAttribute('id', 'btns');

const deleteBtn = document.createElement('div');
deleteBtn.setAttribute('id', 'delete');
deleteBtn.type="submit";
deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>`;

const editBtn = document.createElement('div');
editBtn.setAttribute('id', 'edit');
editBtn.type="submit";
deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>`;

btns.appendChild(deleteBtn);
btns.appendChild(editBtn);
appContent.appendChild(holder1);
appContent.appendChild(holder2);
appContent.appendChild(holder3);
appContent.appendChild(holder4);
appContent.appendChild(holder5);
appContent.appendChild(holder6);
appContent.appendChild(btns);

const fetchInput = async() => {
    const date = document.getElementById('date').value;
    const flight = document.getElementById('flightInfo').value;
    const hosting = document.getElementById('hostingInfo').value;
    const notes = document.getElementById('notes').value;
    const request = await fetch("http://localhost:8080");
    try {
        const myTrip = {};

        // location output - app2
        if (location) {
            const location = document.getElementById('location').value;
            locationOutput.innerHTML = `<p>${location}</p>`;
            holder1.appendChild(locationOutput);
            console.log(`Trip to: ${location}.`);

            myTrip.location = location;
        };

        // date output - app2
        if (date) {
            // date entered output
            dateOutput.innerHTML = `<p>${date}</p>`;
            holder2.appendChild(dateOutput);
            console.log(`Date of departure: ${date}.`);

            // calculate number of days away from a date
            function getNumberOfDays(start, end) {
                const date1 = start;
                date1.setHours(0,0,0,0);
                const date2 = new Date(end);
                // console.log(date2.getFullYear(), date2.getMonth() + 1, date2.getDate());
                const oneDay = 1000 * 60 * 60 * 24;
                const diffInTime = date2.getTime() - date1.getTime();
                const diffInDays = Math.round(diffInTime / oneDay);
                return diffInDays;
            };

            daysAway = getNumberOfDays(new Date(), date);

            if (daysAway < 0) { // date before today's date is handled as an error
                nbOfDaysOutput.innerHTML = `<p>It seems that the date entered is before today's date. Enter a valid date.</p>`;
                // nbOfDaysOutput.innerHTML = `<p>Invalid date</p>`;
                holder3.appendChild(nbOfDaysOutput);
                console.log(`It seems that the date entered is before today's date. Enter a valid date.`);
            } else if (daysAway === 0 ) { // date entered displayed as today
                nbOfDaysOutput.innerHTML = `<p>Your trip is <b>today</b></p>`;
                holder3.appendChild(nbOfDaysOutput);
                console.log(`Your trip is today.`);
            } else if (daysAway === 1 ) { // date entered displayed as tomorrow or in 1 day
                nbOfDaysOutput.innerHTML = `<p>Your trip is <b>tomorrow</b></p>`;
                holder3.appendChild(nbOfDaysOutput);
                console.log(`Your trip is tomorrow.`);
            } else if (daysAway > 1) { // date entered displayed as the nb of days btw today's date and date entered
                nbOfDaysOutput.innerHTML = `<p>Your trip is <b>${daysAway}</b> days away</p>`;
                holder3.appendChild(nbOfDaysOutput);
                console.log(`Your trip is ${daysAway} days away.`);
            };

            myTrip.date = date;
            myTrip.daysAway = daysAway;

        } else {
            window.alert('Please enter a date.');
            console.log('No date has been entered.');
        };
        // flight output - app2
        if (flight) {
            flightOutput.innerHTML = `<p>${flight}</p>`;
            holder4.appendChild(flightOutput);
            console.log(`Flight information: ${flight}.`);

            myTrip.flight = flight;
        };
        // hosting output - app2
        if (hosting) {
            hostingOutput.innerHTML = `<p>${hosting}</p>`;
            holder5.appendChild(hostingOutput);
            console.log(`Hosting information: ${hosting}.`);

            myTrip.hosting = hosting;
        };
        // notes output - app2
        if (notes) {
            const msgForNotes = `${notes}`;
            notesOutput.innerHTML = `<p>${msgForNotes}</p>`;
            holder6.appendChild(notesOutput);
            console.log(`Notes: ${notes}.`);

            myTrip.notes = notes;
        };

        console.log("myTrip", myTrip);
        localStorage.setItem('my-trip', JSON.stringify(myTrip));
        console.log("ls.my-trip", localStorage.getItem('my-trip'));
        
        // Append my last trip to the existing list of trips
        const myTripsStr = localStorage.getItem('my-trips');
        let myTrips;
        if (myTripsStr) {
            myTrips = eval(`(${myTripsStr})`);
        } else {
            myTrips = [];
        }
        myTrips.push(myTrip);
        localStorage.setItem('my-trips', JSON.stringify(myTrips));

    } catch (error) {
        console.log("error", error);
    };
};

// localStorage.setItem(fetchInput, 'saveInfo');


// button disabled until location entered
function success() {
    if (document.getElementById('location').value==="") { 
        document.getElementById('generate').disabled = true; 
    } else {
        document.getElementById('generate').disabled = false;
    };
};

let totalTrips = 0;

function addTrip() {
    fetchInput();
    totalTrips += 1;
};

const loadEvents = () => {
    addTripBtn.addEventListener('click', fetchInput);
    // removeTripBtn.addEventListener('click', removeTrip);
    // editTripBtn.addEventListener('click', editTrip);
};

loadEvents();