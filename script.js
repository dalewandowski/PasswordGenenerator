		var upperCase2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","X","Y","Z"];
        var lowerCase2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","x","y","z"];
        var numbers2 = ["1","2","3","","5","6","7","8","9","0"];
        var special2 = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","{","]","}",":",";","'",",","<",".",">","/","?"];

   
	
		
		function shuffle(array) 
		{
			for (let i = array.length - 1; i > 0; i--) 
			{
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}
		
		
	 var password = [];
		
 
	
	function show()
	{
		var characters = parseInt(document.getElementById("characters").value);
		var uppercase = parseInt(document.getElementById("upper").value);
		var lowerCase = parseInt(document.getElementById("lower").value);
		var numbers = parseInt(document.getElementById("numbers").value);
		var special = parseInt(document.getElementById("numbers").value);
		
		var all = (uppercase + lowerCase + numbers + special);
		
		
		if (all > characters) document.getElementById("info").innerHTML = "Za dużo znaków";
		
		 // czy wszystkie pola są uzupełnione
		else if (isNaN(all)  || isNaN(characters) ) document.getElementById("info").innerHTML = "Uzupełnij wszyskie pola!";
		
		else 
		{
			for (i = 0; i < uppercase; i++)
			{
				shuffle(upperCase2);
				password.push(upperCase2[i]);
			}
			
			for (i=0; i < lowerCase; i++)
			{
				shuffle(lowerCase2)
				password.push(lowerCase2[i}
		
		document.getElementById("info").innerHTML ="Twoje Hasło TO:" +  password.join('');
		//document.getElementById("button").disabled = true;
		}
		
	}

	