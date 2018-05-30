var round = false
function valueChange(){
          $.ajax({
            url: "/value",
            type: "POST",
            data: {value: $("#value").val()},
            success: function(data){
              if(data == "17"){
                console.log("emptying");
                round = true;
                $('.flex-container').append(
                  "<div>" + data + "</div>");
                  alert("Level Completed")
              }
            else  if(data){
              $("#value").val('')
              $('.flex-container').append(
                "<div>" + data + "</div>");
              }
              // else{
              //   $('.flex-container').append(
              //     "<div>" + JSON.stringify(data.value) + "</div>");
              //   }


            },
            dataType: "json"
          });


        return false;
}
var id = 0;
function deleteClicked(itemNum){
          $.ajax({
            url: "/cart",
            type: "DELETE",
            data: {index: itemNum},
            success: function(data){
              console.log(JSON.stringify(data));

},
            dataType: "json"
          });


        return false;
}

function htmlClicked(itemNum){

$.ajax({
  url: "/cart2",
  type: "GET",

  success: function(data){

    id = data.length;
    for(var i=0; i<data.length;i++)
    {
      if(data == null){
        window.location = data.redirect;
      }

      else {
        $('#myTable').append('<tr class="tablerows" itemNumber="' + data[i].index+ '"><tbody><td>' + data[i].name + '</td>><td>' + data[i].price + '</td><td>' + '<input type="number" class="quant" itemNumber = "' + data[i].index + '" value="1" min="1" />' + '</td><td>' + '<div class="delete" style="height: 21px; width: 54px; background-color: red;" itemNumber = "' + data[i].index + '"></div>' + '</td></tbody></tr>' );
      }
    }


  },
  dataType: "json"
});


return false;
}
    var counter = 5;
    var timeStart = true;
function timer(){
  (function(){


    setInterval(function() {
      if(!round)
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      // Display 'counter' wherever you want to display it.
      if(!round)
      {
        console.log("round is not true");
      if (counter == 0) {
        console.log("timer - 0");
        if(round)
        {
          alert("Level Completed")
          timeStart =true
        }
        else if(!round){
          alert("Game Over")
          timeStart =true
        }
      }
    }
//     else{
// clearInterval(counter);
//       alert("Level Completed")
//
//       //clearInterval(counter);
//       round =true;
//       return false;
//     }
          clearInterval(counter);


    }, 1000);

  })();

}


var itemN;
      //$(".cartButton").click(function(){
         $("#value").keyup( function( event ) {
        //console.log("value was changed" + $("#value").val());
        if(timeStart){
          console.log("TimerStart");
        timer()
        timeStart=false;
      }
        valueChange();
        event.preventDefault();

});
//////////If the html = /cart then do the below
