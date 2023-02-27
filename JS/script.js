function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


$(document).ready(function(){
  $("#hide").click(function(){
    $(".schedule").hide();
  });
  $("#show").click(function(){
    $(".schedule").show();
  });
});

function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  if (name == "") {
    alert("Name must be filled out.");
    return false;
  }

  let date = document.forms["myForm"]["date"].value;
  if (date == "") {
    alert("Must select a date.");
    return false;
  }

  let discord = document.forms["myForm"]["discord"].value;
  if (discord == "") {
    alert("Must enter your discord.");
    return false;
  }

  let email = document.forms["myForm"]["email"].value;
  if (email == "") {
    alert("Must enter your email.");
    return false;
  }

  let gradeLevel = document.forms["myForm"]["gradeLevel"].value;
  if (gradeLevel == "") {
    alert("Must select grade.");
    return false;
  }

  let game = document.forms["myForm"]["game"].value;
  if (game == "") {
    alert("Must select game.");
    return false;
  }

  let rank = document.forms["myForm"]["rank"].value;
  if (rank == "") {
    alert("Must type in your rank.");
    return false;
  }

  console.log("Name:", name)
  console.log("ID:", id)
  console.log("Date:", date)
  console.log("Occupation:", occupation)
  console.log("Grade:", grade)
  console.log("Major:", major)
  console.log("Favorite Food:", favoriteFood)
  console.log("Hair Color:", hair)
  console.log("Hobbies:", hobbies)
  console.log("Animals:", animal)
}