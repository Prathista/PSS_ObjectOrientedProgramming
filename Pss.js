/*
PSS Overview
● PSS is a tool that will assist the user in scheduling activities.
● Each of these activities is a 'task'.
● Each task has:
    ○ A name, which is a user-selected text string.
    ○ A type, also a string, but from a defined list, which will be provided on the next slide.
    ○ A start time, rounded to the nearest 15-minutes, expressed as a floating point number of a
    24-hour clock. For example, a task that starts at 8:30 am would have a start time of 8.5, and a
    task that starts at 7:45 pm would have a start time of 19.75.
    ○ A duration, rounded to the nearest 15 minutes, expressed as a floating point number giving the
    number of hours. A task that is one hour and 45 minutes would have a duration of 1.75.
    ○ Dates are represented as integers, of the form YYYYMMDD, so April 14, 2020 would be
    20200414.
    ○ For this project, ignore daylight savings time
Basic PSS Operation
● PSS holds the user's schedule, which is a list of all the tasks for that user.
● When the program starts, its schedule is empty.
● The user can perform the following operations:
    ○ Create a task
    ○ View a task
    ○ Delete a task
    ○ Edit a task
    ○ Write the schedule to a file
    ○ Read the schedule to a file
    ○ View or write the schedule for one day
    ○ View or write the schedule for one week
    ○ VIew or write the schedule for one month
Create a Task
● To create a task, the user selects the type of task and gives the attribute
values.
● PSS will verify that the name of the task is unique. If it is not, PSS will give an
error message, and will not create the task.
● PSS will verify that the task does not overlap any existing task in the system.
    ○ Be sure to consider tasks that wrap past midnight.
    ○ Be sure to consider recurring tasks, where some instances might overlap while others don't.
    ○ Be sure to consider anti-tasks, which might eliminate what would otherwise be an overlap.
    ○ There can be only one anti-task cancelling out a particular instance of a recurring task.
    ○ When creating an anti-task, make sure that the anti-task matches up with an instance of a
    recurring task.
● If the information for the task is correct with no conflicts, the task is created.
*/

export default class Pss {
    constructor(scheduleName)
    {
        this._name = scheduleName;
        this._tasks = {};
    }

    // Change this to get values from app.js .. or merge app.js with this class
    createTask()
    {
    // TODO createTask]
        var details = this.getFormElements();
        if(details[1] = "recurring")
        {
            var recurringTask = new Task(details[0], details[1], details[2], details[3], details[4], details[5], details[6]);
        }
        else
        {
            var newTask = new Task(details[0], details[1], details[2], details[3], details[4]);
        }
        console.log(details);
    }

    /*
     * The user can delete a task by name.
     * If the task is found, PSS will delete the task.
     */
    deleteTask(taskName) {
        // TODO deleteTask
        var obj = JSON.parse(taskName);
        delete obj; 
        /* Deleted Code
        var details = this.getFormElements;
        console.log(details);
        if(details[0] == taskName) { //check to see if taskName exists
            if(details[1] = "recurring"){
                delete details[0];
                delete details[1];
                delete details[2];
                delete details[3];
                delete details[4];
                delete details[5];
                delete details[6];
            }else{
                delete details[0];
                delete details[1];
                delete details[2];
                delete details[3];
                delete details[4];
            } 
        }
        */
        //delete taskName;
    }
    /*
     * The user can identify by name a task to be edited.
     * If the task is found, PSS brings up an editor for that task.
     * 
     * The editor displays the current attribute values for the task.
     * Upon submission of any edits, PSS will verify that all of the new attribute values are acceptable.
     * PSS will also verify that the edit does not cause any conflict with other tasks in the system.
     * If there are any errors, PSS displays an appropriate error message, and makes no changes to the task.
     */
    editTask()
    {
        var obj = JSON.parse(taskName);
        var details = obj.getFormElements();
        console.log(details);
        if(details[1] == "recurring"){
            toJSON(){
                var task = {
                    name: this._name,
                    type: this._type,  
                    startDate: this.startDate,
                    startTime: this._startTime,
                    duration: this._duration,
                    endDate: this._endDate,
                    frequency: this._frequency
                };
                return JSON.stringify(task);
                
            }
        }else{
            toJSON() {
                var task = {
                    name: this._name,
                    type: this._type,  
                    startDate: this.startDate,
                    startTime: this._startTime,
                    duration: this._duration
                };
                return JSON.stringify(task);
            }
        }
        
    }

    /*
     * The user can search for a task by name.
     * If a task is found with the given name, PSS displays the information about the task.
     * 
     * If this is a recurring task, then any anti-tasks associated with any occurrences of this task are also deleted
     * 
     * If this is an anti-task, and deleting this anti-task would leave a conflict between two recurring
     * tasks, or between a recurring task and a transient task, the anti-task will not be deleted, and
     * an error message will be generating. Perhaps the message will give the name of the two
     * tasks that would conflict if the anti-task were removed
     */
    viewTask(taskName) {
        // TODO viewTask
    }

    /*
     * When the user runs this command, PSS asks for a file name.
     * If the name is valid, PSS will write the schedule to the file using the JSON format (as described in a couple of slides)
     */
    writeScheduleToFile(filename) {
        // TODO saveSchedulleToFile
    }

    /* 
     * When the user runs this command, PSS asks the user for a file name.
     * The program verifies that a file with that name exists.
     * This file should hold a valid schedule in JSON format.
     * PSS will read each task from the file, adding that task to the schedule.
     * 
     * If there is ANY error in the file, then the read is terminated, and all changes to the schedule
     * are removed. The changes are only accepted if there are no errors.
     * If the syntax of the file is not value JSON, this would be an error.
     * If any of the tasks given in the file have invalid or inconsistent values, this would be an error.
     * If any tasks would overlap after reading the file, this would be an error. 
     * 
     * The JSON file for a schedule will be an array of objects, where each object is 
     * one task. So the overall syntax of the file would be:
        [
            <task> ,
            <task> ,
            <task>
        ]
     * Each of the tasks is represented as a JSON object. The following shows a typical transient task:
        {
            "Name" : "Go to Store for socks",
            "Type" : "Shopping",
            "Date" : 20200415,
            "StartTime" : 10.25,
            "Duration" : 0.75
        }
     */

    loadScheduleFromFile(filename)
    {
        localStorage.setItem("schedule",filename);
    }

    /*
     * VIEW SCHEDULE FOR A DAY, A WEEK, OR A MONTH
     *
     * The user can ask to see a schedule for a particular day, a week, or a month.
     * The user enters the start date of the time period.
     * PSS will list all of the tasks, sorted by date and time, in a format chosen by the designer.
     * Note that if there is an anti-task, both it and the recurring task instance it cancels will not be displayed
     */ 

    /*
     * WRITE SCHEDULE FOR A DAY, A WEEK, OR A MONTH
     * 
     * The user can ask for PSS to write a schedule for a particular day, a week, or a month.
     * The user enters a file name and the start date of the time period.
     * PSS will then write all of the tasks for that time period, in sorted order, to the
     * JSON-formatted output file.
     * 
     * Note that if there is an anti-task, both it and the recurring task instance it
     * cancels will not be included in the list.
     * A recurring task will not be displayed as a single entry. Rather, each instance
     * of the recurring task that appears in the time period will be displayed.
     * The format matches that of the schedule file, except that all of the transient
     * tasks or recurring instances will appear using the transient task format.
     */

    viewDay(date)
    {
        // TODO viewDay
    }

    writeDay(filename, date) {
        // TODO writeDay
    } 

    viewWeek() {
        // TODO viewWeek
    }

    writeWeek() {
        // TODO writeWeek
    }

    viewMonth() {
        // TODO viewMonth
    }

    writeMonth(filename, month) {
        // TODO writeMonth
    }

}
