
    // Select a random number between 19 and 120
    var userTotal;  
    var wins;
    var losses;
    var random;
    $( document ).ready(function(){
    function startGame(){
        userTotal=0;
        wins=0;
        losses=0;
        random=Math.floor(Math.random()*101+19);
        $('#randomNumber').text(random);
        jewel1= Math.floor(Math.random()*11+1);
        jewel2= Math.floor(Math.random()*11+1);
        jewel3= Math.floor(Math.random()*11+1);
        jewel4= Math.floor(Math.random()*11+1);
        
        $('#finalTotal').text(userTotal);
        
    }
       startGame();
    
    
    // Each number in jewel 1-12
    
    


    ////Variablea
  
   
   
    
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
    reset();
  }
  //clicks 
    $('#one').on('click', function(){
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
    });

    $('#two').on('click', function(){
      userTotal = userTotal + jewel2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          } 
    });

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
    });
    $('#four').on('click', function(){
      userTotal = userTotal + jewel4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
         
            if (userTotal == random){
            winner();
            reset();
          }
          else if ( userTotal > random){
            loser();
            reset();
          }

          //resets the game
 
          
        });
   
      
        function reset(){
           
          startGame();
        }
    });

    