//get current tinme
var d = new Date();
var currentTime = d.getHours();

// if time is in afternoon convert to 24 hr standard
if (currentTime === 1 || currentTime === 2 || currentTime === 3){
    currentTime = currentTime + 12;
}

//intitiate first color change
$( ".row" ).ready(function(){
    hourChecker();
});


// refresh window every minute
setInterval(function(){
    hourChecker();
}, (1000*30));

//hour checker function
function hourChecker () {
       //scan each hour for content of span
    $(".hour").each(function(thisHour){
        var thisHour = $(this)
        .find("span")
        .html();
        
        console.log(thisHour);
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
