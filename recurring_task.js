import Task from './Task.js';
```
ACCEPTABLE TYPES:
Class
Study
Sleep
Exercise
Work
Meal
```

class recurringTask extends Task {
    constructor(name, type, startDate, startTime, duration, endDate, frequency) {
        super(name, type, startDate, startTime, duration);
        this._endDate = endDate;
        this._frequency = frequency;  // Frequency: 1 (daily), 7 (weekly)
    }

    get endDate() {
        return this._endDate;
    }

    set endDate(newEndDate) {
       this._endDate = newEndDate;
    }

    get frequency() {
        return this._frequency;
    }

    set frequency(newFrequency) {
       this._frequency = newFrequency;
    }

    // Overrides Task toJSON  method for exporting the object to JSON
    toJSON() {
        var task = {
            name: this._name,
            type: this._type,  // "Cancellation" only
            startDate: this.startDate,
            startTime: this._startTime,
            duration: this._duration,
            endDate: this._endDate,
            frequency: this._frequency
        };
        return JSON.stringify(task);
    }
}
