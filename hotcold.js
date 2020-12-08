$(document).ready(function(){
	var maxNumber = 100;
	var  maxTemp = null;
	var secretNumber = null;
	var oldTemperature = null;
    var Height = 400;


	$("form").submit(generateFeedback);
	$("#new_game").click(generateNumber);
	


   //get our secret number and give it a range difference, we can compare in our conditional statements

   //we have given our max temperature a value 0f 100, so our secret number will be between 0 and 100;

	function generateNumber(){
		 secretNumber = getRandomInt(0, maxNumber);
		console.log("secretNumber:" + secretNumber);

		//lets set the value of our maxTemp so it carries a value rather than null
		maxTemp =Math.max(Math.abs(100 - secretNumber), secretNumber);

		//old temperature be given the value of 0, we will override the value later after our conditions
		oldTemperature = 0;

		//var mercury = $("#th-mercury .th-top");
		//mercury.animate({height:  tempToHeight(oldTemperature)}, "fast");

		$("#submit").show();

		//to reset give the input an empty value using jquery.

	     $("#guess").val("");
	
		return false;
	}


//give the random a range, so we can narrow it 

	function getRandomInt(min,max){
		return Math.floor(Math.random() * (max-min +1) + min);

	}


      //unction tempToHeight(temp){
      	//return temp * Height / maxTemp;

//}

	function getGuessTemp(){
		var usersGuess = document.getElementById("guess").value;
		
		console.log("guess is" + usersGuess);

		var temp = maxTemp - Math.abs(secretNumber - usersGuess);
		console.log("temperature is" + temp);
		return temp;

	}

 
	//now compare and tell users their results.

function generateFeedback(){
	var temp = getGuessTemp();


	if(temp === maxTemp){
     document.getElementById("top").innerHTML ="Just right";
     $("#submit").hide();
     
	}
	else if(temp > oldTemperature){
	
		document.getElementById("top").innerHTML ="Getting hotter";
	
	}
	else if(temp < oldTemperature){

		document.getElementById("top").innerHTML ="Getting colder";

	}
	else{
	
	document.getElementById("top").innerHTML ="Pick another number : Neither Hot :Cold";

	}

	function convert(temp){

      	return temp * Height / maxTemp;

}

       var ruler= $("#th-mercury .th-top");
		ruler.animate({height:  convert(oldTemperature)}, "fast");

		ruler.animate({height:  convert(temp)}, "fast");

			oldTemperature = temp;


return false;
}




//call the generateNumber function
          generateNumber();



});


