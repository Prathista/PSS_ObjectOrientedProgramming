import Pss from "./pss.js";

const typeSelector = document.getElementById("type-selector");

// hidden til kind of task selected
typeSelector.hidden = true;  
document.getElementById("end-date-section").hidden = true;
document.getElementById("frequency-section").hidden = true;

// Process radio button selection of one-time / recurring task 
// Hide unnecessary fields when one-time is selected and set IsReccuringTask to false
let isRecurringTask = false;
// Add check for change to each radio button
const taskOccurance = document.getElementsByName("task-occurrance");
for (let i = 0; i < taskOccurance.length; i++) { 
    taskOccurance[i].addEventListener('change', function() {
        // Transient Task
        if (this.value == "one-time") {
            isRecurringTask = false;
            document.getElementById("end-date-section").hidden = true;
            document.getElementById("frequency-section").hidden = true;
            clearTypeOptions();
            let options = ['Visit', 'Shopping', 'Appointment'];
            changeTypeSelection(options);
        // Recurring Task
        } else if (this.value == "recurring") {
            isRecurringTask = true;
            document.getElementById("end-date-section").hidden = false;
            document.getElementById("frequency-section").hidden = false;
            clearTypeOptions();
            let options = ['Class', 'Study', 'Sleep', 'Excercise', 'Work', 'Meal'];
            changeTypeSelection(options);
        }
    });
}

// Change type selection to supplied options array var
function changeTypeSelection(options) {
    typeSelector.hidden = false; // unhide if necessary
    const default_option = document.createElement('option');
    default_option.innerHTML = "Please Select Task Type";
    default_option.disabled = true
    default_option.selected = true
    typeSelector.appendChild(default_option);
    options.forEach(option => {
        let optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.innerHTML = option;
        typeSelector.appendChild(optionElement);
    });
}

// Clears type selector for different inputs to be added based on one-time or recurring
function clearTypeOptions() {
    while (typeSelector.options.length > 0) {
        typeSelector.remove(0);
    }
}

// Returns a object containing the form elements
function getFormValues() {
    let values = {
        name: getTaskName(),
        type: getTaskType(),
        startDate: getTaskStartDate(),
        startTime: getTaskStartTime(),
        duration: getTaskDuration(),
    }
    // Get additional properties for recurring task
    if (isRecurringTask) {
        console.log("its working")
        values.endDate = getTaskEndDate();
        values.frequency = getTaskFrequency();
    }
    return values;
}

// Call createTask from PSS
function createTask() {
    console.log(getFormValues());
    let pss = new Pss("Test");
    console.log(pss);
}

function getTaskName() {
    return document.getElementById('name').value;
}

function getTaskType() {
    return document.getElementById("type-selector").value;
}

function getTaskStartDate() {
    return document.getElementById('startDate').value;
}

function getTaskStartTime() {
    return document.getElementById('startTime').value;
}

function getTaskDuration() {
    return document.getElementById('duration').value;
}

function getTaskEndDate() {
    return document.getElementById('endDate').value;
}

function getTaskFrequency() {
    return document.getElementById('frequency-selector').value;
}

document.getElementById("create-task-button").onclick = function() {
    createTask();
}