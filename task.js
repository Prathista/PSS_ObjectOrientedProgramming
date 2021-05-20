/*  
General Task Class: 
__________________________________________

- Name: String
- Type: String
- StartTime: float
- StartDate: int
- Duration: int
__________________________________________
- setName(String n): void
- setType(String type): void
- setStartTime(float t): void
- setDuration(int minutes): void
- getName(): String
- getType(): String
- getStartTime(): float
- getDuration(): int 
*/
export default class Task {
    constructor(name, type, startDate, startTime, duration) {
        this._name = name;
        this._type = type;
        this._startDate = startDate;
        this._startTime = startTime;
        this._duration = duration;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
       this._name = newName;
    }

    get type() {
        return this._type;
    }

    set type(newType) {
       this._type = newType;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(newStartDate) {
       this._startDate = newStartDate;
    }

    get startTime() {
        return this._startTime;
    }

    set startTime(newStartTime) {
       this._startTime = newStartTime;
    }

    get duration() {
        return this._duration;
    }

    set duration(newDuration) {
       this._duration = newDuration;
    }

    toJSON() {
        var task = {
            name: this._name,
            type: this._type,
            startDate: this.startDate,
            startTime: this._startTime,
            duration: this._duration,
        };
        return JSON.stringify(task);
    }
}
