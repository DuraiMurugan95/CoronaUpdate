function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	// document.body.style.backgroundColor = "white"; 

}

async function getCovidData() {
	document.getElementById("result").style.display = "block";

	var country = document.getElementById("celeb").value;
	console.log(country)
	const jsodData = await fetch('https://api.covid19api.com/summary');
	const jsData = await jsodData.json();
	var json = jsData.Countries
	var length = Object.keys(json).length;
	for (i = 0; i < length; i++) {
		var jsonCountry = jsData.Countries[i].Country
		var comp = country.toLocaleLowerCase().trim().localeCompare(jsonCountry.toLowerCase().trim())
		if (comp == 0) {
			if (document.getElementById("updates").value == "ConfirmedCases") {
				console.log(jsonCountry)
				document.getElementById("result").innerHTML = `In ${jsonCountry}`
					+ ` Confirmed Cases are <Strong>${jsData.Countries[i].NewConfirmed}<Strong>`
					+ ` and TotalCOnfirmed Cases up to ${jsData.Countries[i].Date.slice(0, 10)} are <Strong>${jsData.Countries[i].TotalConfirmed}<Strong>`
				break;
			}
			else if (document.getElementById("updates").value == "Death") {
				console.log(jsonCountry)
				document.getElementById("result").innerHTML = `In ${jsonCountry} `
					+ `  People Died  are <Strong>${jsData.Countries[i].NewDeaths}<Strong>`
					+ ` and Total Deaths up to ${jsData.Countries[i].Date} are <Strong>${jsData.Countries[i].TotalDeaths}<Strong>`
				break;
			}
			else if (document.getElementById("updates").value == "RecoveredCases") {
				console.log(jsonCountry)
				document.getElementById("result").innerHTML = `In ${jsonCountry} `
					+ ` Recovered Cases are <Strong>${jsData.Countries[i].NewRecovered}<Strong>`
					+ ` and TotalCOnfirmed up to ${jsData.Countries[i].Date} are <Strong>${jsData.Countries[i].TotalRecovered}<Strong>`
				break;
			}
			else {
				document.getElementById("result").innerHTML = `Please Select proper value!!`
			}
		}
		else {
			document.getElementById("result").innerHTML = `Please Provide a proper input!!!`;
		}
	}
}
function about() {
	document.getElementById("whole").style.display = "block";
	document.getElementById("whole").innerHTML = `<strong>Facts About Covid19:</strong>`
		+ `Severe Acute Respiratory Syndrome `
		+ `Coronavirus-2 (SARS-CoV-2) is the name given to `
		+ `the 2019 novel coronavirus. COVID-19 is the name given to the disease associated with the virus. SARS-CoV-2 is a new strain of coronavirus that has not been previously identified in humans.`;
}
