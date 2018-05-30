function navBar(navBar) {
    var x = document.getElementById("navBar");
    var y = document.getElementById("navBarSlideInid");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
    navBar.classList.toggle("navIconBarActive");
    y.classList.toggle("navBarSlideInActive");
}
function focusContent() {
  var x = document.getElementById("navBar");
  if (x.className === "navBar") {

  } else {
      x.className = "navBar";
  }
}
console.log("asdfasdfasdf");
$.ajax({
  url: "/userInfo",
  type: "GET",
  success: function(data){
    console.log("Hey man");
    if (data.loginState){
      $("#usernameDisplay").append("Hi, " + data.username);
      console.log(data.username);
      $("#loginLink").css("display","none");
      $("#loginLink2").css("display","none");
    } else{
      console.log("Hey Man Nothing is working");
      $("#usernameDisplay").css("display","none")
      $("#logout").css("display","none")
      $("#logout2").css("display","none")
    }
  },
  dataType: "json"
});

$.ajax({
      url: "/getItems",
      type: "GET",
      data: {},
      success: function(data){
            let currObj = {};
            console.log('I hate life ' + JSON.stringify(data)); 
            for(let i = 0;i<data.length;i++) {
              if(data[i] != null || data[i] != undefined) {
                currObj = data[i];
                console.log("currObj " + currObj.name);
                $('.allItems').append(
                  "<div class=\"item\" id=\"" + currObj.name + "\">" +
                  "<p class=\"itemName\">" + currObj.name + "</p>" +
                  "<img class=\"itemImage\" src=\"" + currObj.picture + "\" alt=\"\">" +
                  "<p class=\"price\">" + currObj.price + "</p>" +
                  "<p class=\"description\">" + currObj.description + "</p>" + 
                  "</div>");
                }
                else {
                  console.log('object is empty');
                }
              }
            },
            dataType: "json"
          });