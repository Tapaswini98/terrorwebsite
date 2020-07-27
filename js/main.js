 //Function for start_date
 function obtaindays(i) 
 {
    let e = document.getElementById("m");
    let monthVal = e.options[e.selectedIndex].value;
    switch (monthVal) {
        case "01":
            ed = 31;
            break;
        case "02":
            ed = 28;
            break;
        case "03":
            ed = 31;
            break;
        case "04":
            ed = 30;
            break;
        case "05":
            ed = 31;
            break;
        case "06":
            ed = 30;
            break;
        case "07":
            ed = 31;
            break;
        case "08":
            ed = 31;
            break;
        case "09":
            ed = 30;
            break;
        case "10":
            ed = 31;
            break;
        case "11":
            ed = 30;
            break;
        case "12":
            ed = 31;
            break;
    }

    let d = document.getElementById("d");
    d.options[d.selectedIndex] = null;
    for (i = 1; i <= ed; i++) {
        d.options[i] = new Option(i, i, true, false);
    }
}; 
 
//Function for end_date
 function obtainenddays(i) {
    let e = document.getElementById("em");
    let monthVal = e.options[e.selectedIndex].value;
    switch (monthVal) {
        case "01":
            ed = 31;
            break;
        case "02":
            ed = 28;
            break;
        case "03":
            ed = 31;
            break;
        case "04":
            ed = 30;
            break;
        case "05":
            ed = 31;
            break;
        case "06":
            ed = 30;
            break;
        case "07":
            ed = 31;
            break;
        case "08":
            ed = 31;
            break;
        case "09":
            ed = 30;
            break;
        case "10":
            ed = 31;
            break;
        case "11":
            ed = 30;
            break;
        case "12":
            ed = 31;
            break;
    }
 
    let endDay = document.getElementById("endDay");
    endDay.options[endDay.selectedIndex] = null;
    for (i = 1; i <= ed; i++) {
        endDay.options[i] = new Option(i, i, true, false);
    }
};
 //fuction for region,country

function obtainregions() {
    var a = document.getElementById('region').value;
    if (a === "North America") {
        var array = ["Canada", "Mexico", "United State"];
    } else if (a === "Central America & Caribbean") {
        var array = ["Antigua and Barbuda", " Bahamas", "Barbados", "Belize", "Cayman Islands", "Costa Rica", "Cuba", 
        "Dominica", "Dominican Republic",
         "El Salvador", "Grenada", "Guadeloupe", "Guatemala", "Haiti", "Honduras", "Jamaica", " Martinique", "Nicaragua", 
         "Panama", "St. Kitts and Nevis", " St. Lucia",
            "Trinidad and Tobago "
        ];

    } else if (a === " South America") {
        var array = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Falkland Islands", "French Guiana",
            "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"
        ];
    } else if (a === "East Asia") {
        var array = ["China", "Hong Kong", "Japan", "Macau", "North Korea", "South Korea", "Taiwan"];
    } else if (a === "Southeast Asia") {
        var array = ["Brunei", "Cambodia", "East Timor", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines",
            "Singapore", "South Vietnam", "Thailand", "Vietnam"
        ];
    } else if (a === "South Asia") {
        var array = ["Afghanistan", "Bangladesh", "Bhutan", "India", "Maldives", "Mauritius", "Nepal", "Pakistan", "Sri Lanka"];
    } else if (a === "Central Asia") {
        var array = ["Armenia", "Azerbaijan", "Georgia", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan",
            "Uzbekistan"
        ];
    } else if (a === "Western Europe") {
        var array = ["Andorra", "Austria", "Belgium", "Cyprus", "Denmark", "Finland", "France", "Germany", "Gibraltar",
            "Greece", "Iceland", "Ireland", "Italy", "Luxembourg", "Malta", "Netherlands", "Norway", "Portugal",
            "Spain", "Sweden", "Switzerland", "United Kingdom", "Vatican City", "West Germany (FRG)"
        ];
    } else if (a === "Eastern Europe") {
        var array = ["Albania", "Belarus", "Bosnia-Herzegovina", "Bulgaria", "Croatia", "Czech Republic",
            "Czechoslovakia", "East Germany (GDR)", "Estonia", "Hungary", "Kosovo", "Latvia", "Lithuania",
            "Macedonia", "Moldova", "Montenegro", "Poland", "Romania", "Russia", "Serbia", "SerbiaMontenegro", "Slovak Republic", 
            "Slovenia", "Soviet Union", "Ukraine", "Yugoslavia"
        ];
    } else if (a === "Middle East & North Africa") {
        var array = ["Algeria", "Bahrain", "Egypt", "Iran", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Libya", "Morocco",
            "North Yemen", "Qatar", "Saudi Arabia", "South Yemen", "Syria", "Tunisia", "Turkey", "United Arab Emirates",
             "West Bank and Gaza Strip", "Western Sahara", "Yemen"
        ];
    } else if (a === "Sub-Saharan Africa") {
        var array = ["Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Central African Republic", "Chad", "Comoros", 
        "Democratic Republic of the Congo",
         "Djibouti", "Equatorial  Guinea", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", 
         "Kenya", "Lesotho", "Liberia", 
         "Madagascar", "Malawi", "Mali", "Mauritania", "Mozambique",
            "Namibia", "Niger", "Nigeria", "People's Republic of the Congo, Republic of the Congo",
            "Rhodesia", "Rwanda", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South  Sudan", "Sudan", 
            "Swaziland", "Tanzania", "Togo", "Uganda", "Zaire", "Zambia", "Zimbabwe"
        ];
    } else if (a === "Australasia & Oceania") {
        var array = ["Australia", "Fiji", "French Polynesia", "New Caledonia", "New Hebrides", "New Zealand", "Papua New Guinea", 
        "Solomon Islands", "Vanuatu", "Wallis and Futuna"];
    } else {
        var array = [];
    }

    var string = "";
    var sel = document.getElementById("country");
    sel.options[sel.selectedIndex] = null;
    for (i = 0; i < array.length; i++) {
        // get reference to select element
        var sel = document.getElementById('country');

        // create new option element
        var opt = document.createElement('option');

        // create text node to add to option element (opt)
        opt.appendChild(document.createTextNode(array[i]));

        // set value property of opt
        opt.value = array[i];

        // add opt to end of select box (sel)
        sel.appendChild(opt);
    }
}
//Ajax function
$(function(){
	$('button').click(function(){
		var attacktype = $('#attacktype').val();
		var region = $('#region').val();
        var country = $('#country').val();
		var output = $('#output').val();
		$.ajax({
			url: '/services',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});


