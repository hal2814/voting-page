$(document).ready(function(){
    var age = parseInt(prompt("Please enter your age: "));
    if(age<18)
    {
      alert("You can't vote!");
      $("#underAge").show();

    }else{
      $("#canVote").show();
      alert("Prepare to vote!");
    };
});
