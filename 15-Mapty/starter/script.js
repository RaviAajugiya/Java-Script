'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map, mapEvent;


class App {
    #map;
    #mapEvent;
    #workouts = [];
    constructor() {
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
    }

    _getPosition() {
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
            alert("Error");
        })
    }

    _loadMap(pos) {
        console.log(pos);
        const latitude = pos.coords.latitude;
        const longitute = pos.coords.longitude;
        console.log(latitude, longitute);
        console.log(`https://www.google.com/maps/@${latitude},${longitute}`);

        const cords = [latitude, longitute]

        this.#map = L.map('map').setView(cords, 15);

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        this.#map.on('click', this._showForm.bind(this))
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        // const type = inputType.value;
        const distance = +inputDistance.value;
        const Duration = +inputDuration.value;

        const validInputs = (...input) => input.every(i => Number.isFinite(i));
        const allPositive = (...input) => input.every(i => i > 0);

        if (type === 'running') {
            const cadence = +inputCadence.value;

            if (
                !validInputs(distance, Duration, elevation) ||
                !allPositive(distance, Duration, elevation)
            )
                return alert('Inputs must positive ');

            workout = new Running([lat, lng], distance, Duration, cadence);
        }


        if (type === 'cycling') {
            const elevation = +inputElevation.value;

            if (
                !validInputs(distance, Duration, elevation) ||
                !allPositive(distance, Duration)
            )
                return alert('Inputs must positive ');

            workout = new Cycling([lat, lng], distance, Duration, elevation);
        }



        e.preventDefault();
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        const { lat, lng } = this.#mapEvent.latlng;
        L.marker([lat, lng])
            .addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 50,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup',
            }))
            .setPopupContent('Workout')
            .openPopup();
    }
}


class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    clicks = 0;

    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    }

    _setDescription() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]
            } ${this.date.getDate()}`;
    }

    click() {
        this.clicks++;
    }
}


class Running extends Workout {
    type = 'running';
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }

    calcPace() {
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout {
    type = 'cycling';
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed() {
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}



const app = new App();

