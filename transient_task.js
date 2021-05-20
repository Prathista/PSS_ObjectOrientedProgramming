import Task from './Task.js';

```
ACCEPTABLE TYPES:
Visit
Shopping
Appointment
```

export class TransientTask extends Task {
    constructor(name, type, startDate, startTime, duration) {
        super(name, type, startDate, startTime, duration);
    }
}
