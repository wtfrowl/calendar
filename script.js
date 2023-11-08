            const day = document.getElementById("day");
			const datemonthyear = document.getElementById("datemonthyear");
			const time = document.getElementById("time");
            const name1 = document.getElementById("name");
			const calendarInIndianLanguages = [
				"पंचांग",   // Hindi
				"காலண்டர்", // Tamil
				"క్యాలెండర్",  // Telugu
				"পঞ্জিকা",    // Bengali
				"પંચાંગ",    // Gujarati
				"କ୍ୟାଲେଣ୍ଡର୍",  // Odia
				"ਕੈਲੰਡਰ",   // Punjabi
				"കലണ്ടർ",     // Malayalam
				"ಕ್ಯಾಲೆಂಡರ್",   // Kannada
				"कॅलेंडर",   // Marathi
				"سالنامه",     // Urdu
				"বার্ষিক পত্রিকা", // Assamese
				"ସାଲଣ୍ଡର",   // Sambalpuri
				"क्यालेंडर",  // Nepali
				"পঞ্জিকা",    // Maithili
				"நாள்காட்டி",   // Malayalam (Transliteration)
				"ਕੈਲੰਡਰ",   // Punjabi (Gurmukhi)
				"પંચાંગ",    // Gujarati (Transliteration)
				"পঞ্জিকা",    // Bodo
				"कॅलेंडर",   // Konkani
				"காலண்டர்", // Tamil (Transliteration)
				"క్యాలెండర్",  // Telugu (Transliteration)
				"കലണ്ടർ",     // Malayalam (Transliteration)
				"ಕ್ಯಾಲೆಂಡರ್",   // Kannada (Transliteration)
				"कॅलेंडर",   // Konkani (Transliteration)
				"ਕੈਲੰਡਰ",   // Dogri
				"کیلنڈر",    // Kashmiri
				"କ୍ୟାଲେଣ୍ଡର",  // Odia (Transliteration)
				"संवत सरणी",   // Sanskrit
				"நாளாட்டு",   // Tamil (Transliteration)
				"పంచాంగం",   // Telugu (Transliteration)
				"പഞ്ചാംഗം",   // Malayalam (Transliteration)
				"ಪಂಚಾಂಗ",    // Kannada (Transliteration)
			  ];
			  
			const days=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","FRIDAY"]
			const months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			  ];






/*FUNCTIONSSSSSSSSSSSSSSSS */

			function updateCal()
			{
				const today = new Date();
				datemonthyear.innerText = today.getDate() +" "+months[today.getMonth()] +" " + today.getFullYear(); 
				day.innerText = days[today.getDay()];
				time.innerHTML = today.getHours() +":" +today.getMinutes() +":" +today.getSeconds();
			}

			setInterval(updateCal, 1000);

			function updateName()
			{
				const random = Math.floor(Math.random() * calendarInIndianLanguages.length);
				name1.innerHTML=	calendarInIndianLanguages[random];
				
			}
			setInterval(updateName,2000);


const left=document.querySelector('.left');

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }
 
function colorChanges(){
	var randomColor = getRandomColor();
	left.style.backgroundColor = randomColor;
	
}

			
			


			  
