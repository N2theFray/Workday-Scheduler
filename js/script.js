//get current tinme
var d = new Date();
var currentTime = d.getHours();

// if time is in afternoon convert to 24 hr standard
if (currentTime === 1 || currentTime === 2 || currentTime === 3){
    currentTime = currentTime + 12;
}
var taskArray = []


//hour checker function
function hourChecker () {
       //scan each hour for content of span
    $(".hour").each(function(thisHour){
        var thisHour = $(this)
        .find("span")
        .html();
        
        // console.log(thisHour);
        //convert string to number
         thisHour = Number(thisHour);
        // if afternoon convert to 24 standard
        if (thisHour === 1 || thisHour === 2 || thisHour === 3){
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

function saveTasks(){
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
};

function loadTasks(){
    var taskArray =JSON.parse(localStorage.getItem("taskArray"));

    if(!taskArray){
        taskArray = []
    }

    var i = 0;
        $(".hour").each(function(){
            var check = $(this)
            .siblings(".description")
            .text(taskArray[i]);
           
            
           
        // debugger;
        
        // console.log(check);
       
        // console.log(taskArray[i]);
        i++;
        });   
        
    


};

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
    if (hourContent === 1 || hourContent === 2 || hourContent === 3){
        hourContent = hourContent + 12;
    }
    
    taskArray[hourContent-7]=content;
    
    saveTasks();
})


loadTasks();
hourChecker();

// refresh window every minute
setInterval(function(){
    hourChecker();
    console.log("time check");
}, (1000*30));
