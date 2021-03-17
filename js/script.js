var d = new Date();
var currentTime = d.getHours().toString();

$(".row").on("click", ".description", function(){

    var time = $(this)
    .siblings(".hour")
    .find("span")
    .html();
   
    var d = new Date();
    var currentTime = d.getHours().toString();
    
 
    if(currentTime === time){
        console.log("gtg");
        $("textarea").addClass("present");
    }
})

// $( ".container" ).click(function() {
//     $( ".hour" ).each(function(index) {
//       console.log(index + $(this).text);
//     });
//   });
  
  $( ".row" ).ready(function(){
        $(".hour").each(function(index){
          var thisHour = $(this)
            .find("span")
            .html();
            console.log(index + ":" + thisHour)
        })

        $(".description").each(function(index){
            var wtf =   $(this)
            // .find("textarea")
            .html();
            console.log(index + ":" + wtf)
        })
         

        
      
  })
// var time = $(".wtf").siblings(".hour").text();
// console.log(time);