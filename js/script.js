//get current tinme
var d = new Date();
var todaysDate = d.toDateString();
var currentTime = d.getHours();


// if time is in afternoon convert to 24 hr standard
if (currentTime === 1 || currentTime === 2 || currentTime === 3 || currentTime === 5 || currentTime === 5){
    currentTime = currentTime + 12;
}

//init taskArray
var taskArray =JSON.parse(localStorage.getItem("taskArray"));

    //init taskArray if none exist in local storage
    if(!taskArray){
        taskArray = []
    }


//hour checker function
function hourChecker () {
       //scan each .hour for content of span
    $(".hour").each(function(thisHour){
        var thisHour = $(this)
        .find("span")
        .html();
        
        
        //convert string to number
         thisHour = Number(thisHour);
        // if afternoon convert to 24 standard
        if (thisHour === 1 || thisHour === 2 || thisHour === 3 || thisHour === 4 || thisHour === 5){
            thisHour = thisHour + 12;
        }

        //conditions for color change
        if (thisHour === currentTime){
            var wtf = $(this)
            .siblings(".description")
            .addClass("present")
        } else if (thisHour > currentTime){
            var wtf = $(this)
            .siblings(".description")
            .addClass("future")
        } else {
            var wtf = $(this)
            .siblings(".description")
            .addClass("past")
        }
    })
};

//save task into local Array
function saveTasks(){
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
};

//load task and iterate through items
function loadTasks(){
    var i = 0;
        $(".hour").each(function(){
            $(this)
                .siblings(".description")
                .text(taskArray[i]);
        i++;
        });   
};


$("#currentDay").each(function(){
    $(this)
        .text(todaysDate);
})


//interaction with save button
$(".saveBtn").on("click", function(){
    
    var content = $(this)
    .siblings(".description")
    .val();
    
    var hourContent = $(this)
    .siblings(".hour")
    .find("span")
    .text();
    // debugger;
    
    hourContent = Number(hourContent);
    if (hourContent === 1 || hourContent === 2 || hourContent === 3 || hourContent === 4 || hourContent === 5){
        hourContent = hourContent + 12;
    }
    
    //subtract 9 to set hourcontent to index 0
    taskArray[hourContent-9]=content;
    
    saveTasks();
})

//clear schedule from page and local storage
$(".clearButton").on("click", function(){
    localStorage.clear();
    location.reload();
});

//init load and time check
loadTasks();
hourChecker();

// refresh window on the hour to update color changes
setInterval(function(){
    var time = new Date ()
    var getMinutes = time.getMinutes()

    if(getMinutes === 59){
        alert("Save your work, the hour is nigh")
    } else if (getMinutes === 0){
        location.reload();
    }
    
}, (1000*60));
