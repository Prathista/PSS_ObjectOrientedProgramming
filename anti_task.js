import Task from './Task.js';

```
Note that an anti-task is used to cancel out one repetition of a recurring task.
Consequently, there must be a recurring task that is scheduled for the given
date, and that recurring task must have a start time that matches the start
time of this anti-task. Similarly, the durations of the task and anti-task must be
the same

● If an anti-task is present that eliminates one recurrence of a recurring task,
then it would be possible to have one or more transient tasks that would have
overlapped or partially overlapped with the original task.
```

```
ACCEPTABLE TYPES:
Cancellation
```

export class AntiTask extends Task {
    constructor(name, type, startDate, startTime, duration) {
        super(name, type, startDate, startTime, duration);
    }

}

