
    // Select a random number between 19 and 120
    
    $( document ).ready(function(){
        var random=Math.floor(Math.random()*101+19)
        $('#randomNumber').text(random);
        jewel1= Math.floor(Math.random()*11+1);
        jewel2= Math.floor(Math.random()*11+1);
        jewel3= Math.floor(Math.random()*11+1);
        jewel4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        
    
    $('#randomNumber').text(random);
    // Each number in jewel 1-12
    var jewel1= Math.floor(Math.random()*11+1)
    var jewel2= Math.floor(Math.random()*11+1)
    var jewel3= Math.floor(Math.random()*11+1)
    var jewel4= Math.floor(Math.random()*11+1)
    

    ////Variablea
  function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    jewel1= Math.floor(Math.random()*11+1);
    jewel2= Math.floor(Math.random()*11+1);
    jewel3= Math.floor(Math.random()*11+1);
    jewel4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#finalTotal').text(userTotal);
    } 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  
  //Winner
  function winner(){
  alert("Winner!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //Loser
  function loser(){
  alert ("You lost");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //clicks 
    $('#one').on ('click', function(){
      userTotal = userTotal + jewel1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        //Conditions
          if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + jewel2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + jewel3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
        //Win/lose 
            if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + jewel4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
         
            if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          }

          //resets the game
 
reset();
userTotal=0;
    
  });
});
   
      
