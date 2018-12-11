//global arrays and variables so all functions can access them
var inventory = [];
var hp = 1;
var input1;
var outputMessage;
       
function yourRoom(){        
  var form;

  form = document.getElementById("userInput"); 

  form.addEventListener("submit", function(event){

    var input1;
    
    event.preventDefault(); 
            
    // get the elements from the page
    input1 = document.getElementById("input");
       

    // convert element values to strings
   
    input1 = String(input.value);



    // output
    if(input1 === "y"){
      outputMessage = "<p>\"Agent Smith! The president has been kidnapped by martians!!!<br>You are the only agent that can handle this task.<br>We have a spaceship programmed with the proper coordinates ready for you at area 51. Please hurry!!!\"<br>Would you like to search your room? 'y' or 'n'</p>";
      roomSearch();
    } else if(input1 === "n"){
      outputMessage = "They won't stop calling. better just answer. Enter 'y'";
      } else{ 
          outputMessage = "I don't recognize that, please try again";
        }                

     //puts the message in the output area
    outputArea = document.getElementById("output");
    outputArea.innerHTML = outputMessage;
  });
    
 }
 
function roomSearch(){
  var form;

  form = document.getElementById("userInput"); 

  form.addEventListener("submit", function(event){
   
    var input1 = "";
    
    event.preventDefault(); 
          
    // get the elements from the page
    input1 = document.getElementById("input");     

    // convert element values to strings
 
    input1 = String(input.value);      

    // output
    if(input1 === "y"){
      outputMessage = "<p>you find a state of the art bulletproof vest, and a note that says 'jeebs'.<br>you should probably remember that<br>Want to head to the shop? 'y' or 'n'</p>";
      inventory[0] = "armor";
      hp =+ 1000;
      shop();
    } else if(input1 === "n"){
        outputMessage = "No time! The president is in danger!<br>I'm going straight to area51!<br>Once you arrive at area 51, you find your ship all prepared and ready to go for you. Head to the martian ship? Please enter 'y'";
        area51();
      } else{ 
          outputMessage = "I don't recognize that, please try again";
        }                

    //puts the message in the output area
    outputArea = document.getElementById("output");
    outputArea.innerHTML = outputMessage;
  });
    
}

function shop(){
  var form;

  form = document.getElementById("userInput"); 

  form.addEventListener("submit", function(event){
   
    var input1 = "";
    
    event.preventDefault(); 

    // get the elements from the page
    input1 = document.getElementById("input");     

    // convert element values to strings
 
    input1 = String(input.value);      

    // output
    if(input1 === "y"){
      outputMessage = "<p>You head to the shop...<br>Upon arrival you are greeted by the cashier.<br>He asks 'What is the password?'<br>Please enter password:</p>";
      shop2();
    } else if(input1 === "n"){
        outputMessage = "No time! The president is in danger!<br>I'm going to Area 51!!<br><br>Upon arrival at area 51, you find your ship all prepared and ready to go for you<br>head to the martian ship? Please enter 'y'";
        area51();
      } else{ 
          outputMessage = "I don't recognize that, please try again";
        }                

    //message in the output area
    outputArea = document.getElementById("output");
    outputArea.innerHTML = outputMessage;
  });


}

function shop2(){
  var form;

  form = document.getElementById("userInput"); 

  form.addEventListener("submit", function(event){
   
    var input1 = "";
    
    event.preventDefault(); 

    // get the elements from the page
    input1 = document.getElementById("input");     

    // convert element values to strings
 
    input1 = String(input.value);      

    // output
    if(input1 === "jeebs"){
      outputMessage = "<p>'Oh nice to see you Agent Smith, I have already been briefed on you mission and have been expecting you.<br>The password is just a formality you know<br>I'll get you set up right away.'<br>He hands you a raygun, and a strange syrum that you promptly drink.<br><br>You feel revitalized and now that you are properly armed, you feel like you could take on the world<br>You head down to area 51 and see your ship ready to go waiting for you.<br>Head to the martian ship? Please enter 'y'</p>";
      hp =+ 500;
      inventory[1] = "raygun";
      area51();
    } else{
      outputMessage = "<p>'I don't know who you are, please leave!'<br><br>With no choice but to leave, you head to area 51.<br>Upon arrival you find your ship all ready to go for you. Go to the martian ship? Please enter 'y'";
      area51();
    }

    //the message in the output area
    outputArea = document.getElementById("output");
    outputArea.innerHTML = outputMessage;
  });

}

function area51(){
  var form;

  form = document.getElementById("userInput"); 

  form.addEventListener("submit", function(event){
   
    var input1 = "";
    
    event.preventDefault(); 

    // get the elements from the page
    input1 = document.getElementById("input");     

    // convert element values to strings
 
    input1 = String(input.value);      

    // output
    if(input1 === "y"){
      outputMessage = "<p>You head to the martian ship<br>You are suddenly pulled into it in a tractor beam, almost as though they were expecting you...<br>once on board, you exit your ship.<br>You look around and see that the only one on board is the president<br>'Agent Smith, I've been expecting you.' says the president. 'I knew that they would send you after me once they saw me leave in my ship, you are the only one they would trust to take me back from the martians. But what they don't know is that I am one of the martians! I am tired of the corruption in your world and I am returning home, but not before I cleanse the earth of all its impurities...including you!!!<br><br>You see him squaring up, what do you do?<br>Enter 'attack' or 'defend'</p>";
      finalBoss();
      }   

    //puts the message in the output area
    outputArea = document.getElementById("output");
    outputArea.innerHTML = outputMessage;
  });

}

function finalBoss(){
  var form;
  var bossHp = 500;
  var count;
  var hud = "HP: ";
  var keeplooping = true;
  
  form = document.getElementById("userInput"); 

  form.addEventListener("submit", function(event){
   
    var input1 = "";
    
    event.preventDefault(); 
          
    // get the elements from the page
    input1 = document.getElementById("input");     

    // convert element values to strings
 
    input1 = String(input.value);      
    
    //loop with breaks for input for the battle
    if(inventory[1] === "raygun"){
      while(hp > 0 || bossHp > 0 /*&& keeplooping === true*/){ 
        if(input1 === "attack"){
          bossHp = bossHp - 100;
          hp = hp - 500;
          input1 = "";
          outputMessage = "<p>You have attacked the martian with your raygun.</p><p>The martian retaliated.</p><p>You did 100 damage. The martian did 500 damage.</p><p>What will you do next?</p><p>Enter 'attack' or 'defend'</p>";
          //keeplooping = false;
          break;
        } else if(input1 === "defend"){
          hp = hp + 500;
          input1 = "";
          outputMessage = "<p>The martian lunges at you.</p><p>You manage to block the attack, you feel revitalized, you have regained 500 hp</p><p>What will you do next? Enter 'attack' or 'defend'.";
         // keeplooping = false;
          break;
        } else{
          hp = hp - 500;
          outputMessage = "<p>I don't recognize that command.</p><p>The martian attacked you. You took 500 damage.</p><p>What will you do next? Enter 'attack' or 'defend'";
          input1 = "";
        //  keeplooping = false;
          break;
        }
      }
    } else{
      document.write("with no way to defend yourself, the martian made quick work of you.<br>You have failed your mission. The earth has been destroyed.<br>GAME OVER.");
    }
    
    // win/lose conditions
    
    if(bossHp <= 0){
      document.write("You have defeated the martian, and drove the ship back down to earth.<br>You tried to tell the higher ups what happened on the ship, but none of them believe you, they think you are too proud to admit defeat.<br>You are now the laughing stock of the agency<br>THANK YOU for playing!");
    } else if(hp <= 0){
      document.write("You were easily crushed by the martian.<br>You have failed your mission. The earth has been destroyed.<br>GAME OVER");
      }
      

    // puts the message in the output area
    
    //shows your hp and the boss hp for testing purposes, I would comment it out to make it harder to figure out what to do while playing
   outputArea = document.getElementById("stats");
    outputArea.innerHTML = hud + hp + "   Boss HP:" + bossHp; 
    
    outputArea = document.getElementById("output");
    outputArea.innerHTML = outputMessage;
  });
    
}


 

yourRoom();
