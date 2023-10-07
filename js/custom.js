$(document).ready(function(){
    $("#switchPage").click(function(){
      let selectVal = $(this).find(":selected").text();
      console.log(selectVal)
      let base_url = window.location.origin;
      let pathName = window.location.pathname;
      let pieces = pathName.split("/")
      let last =pieces[pieces.length - 1]
      console.log(pieces[pieces.length - 1])
      console.log(last)
      if(selectVal == "English"){
        console.log(true,"English")
        window.location.href = base_url + "/ledss/" + last
      }else {
        console.log(true,"hindi")
        window.location.href = base_url + "/ledss/hindi/"+last
      }
     
    });
  });