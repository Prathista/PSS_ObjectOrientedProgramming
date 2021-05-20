import Pss from "./pss.js";

let pss = new Pss("loaded PSS");

var createNewSchedule = function(content, filename, contentType){
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
};

document.getElementById("create-schedule-button").addEventListener('click', () => {
    createNewSchedule("", 'schedule.json', 'application/JSON');
    alert("Load Newly Downloaded File into Load File Section Please.")
})

document.getElementById("load-schedule-button").addEventListener('click', () => {
    var file = document.getElementById("pss-file").files[0];
        var reader = new FileReader();
        
        reader.onload = function(e) {
            var content = reader.result;
            pss.loadScheduleFromFile(content);
            console.log(content);
            window.open("./ViewPage/view.html","_self");
        }
        reader.readAsText(file);
        
});
