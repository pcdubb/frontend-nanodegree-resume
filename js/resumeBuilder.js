var name = "Paul Weyant";
var role = "Web Developer";
var age = 44;
var email = "paul.weyant@gmail.com";
var mobile = "303-335-0877";
var github = "pcdubb";
var curLocation = "Zushi, Japan";


var photoURL = "https://dl.dropboxusercontent.com/s/3ic53k1xk88mweq/Bruce.JPG?dl=0";

var skills = ["Construction Management", " Structural Engineering", " Javascript"," Data Analyst", " Python"," Java", " HTML"];

var welcomeMessage = "Hello, my name is Paul and this is my interactive resume";

var contactInfo = {"email":email, 
"mobile":mobile, 
"github": github,
"location":curLocation};

var bio = {"name":name, 
"role":role, 
"contactInfo":contactInfo, 
"photoURL": photoURL,
"welcomeMessage":welcomeMessage,
"skills": skills};


var work = {
"jobs": [
		{ 
			"title": "Naval Officer",
			"employer": "US Navy",
			"yearsWorked": "12",
			"location": "Tokyo, Japan",
			"dates" : "2004 - Present",
			"description": "While reading a book in his living room, a male character hears his stomach grumble. Putting down the book, he walks to the kitchen. From the floor, his dog cocks its head at him. Things at this point are going smoothly. He pulls two slices of bread from an ornate breadbox (where the bread is staged in a ready to eat, in a way no normal person would have it)."
		},
		{ 
			"title": "Research Assistant",
			"employer": "MV Systems",
			"yearsWorked": "2",
			"location": "Golden, CO",
			"dates" : "2001-2003",
			"description": "Worked on thin film semiconductor research machines. The process was called plasma enhanced chemical vapor deposition and allowed the operator of the machine to deposit thin film semi-conductors onto various substrates such as glass and stainless steel. A lot of the people I worked with had doctorates in Physics, so they were pretty smart."
		},
		{ 
			"title": "Nuclear Power Plant Operator",
			"employer": "US Navy",
			"yearsWorked": "6",
			"location": "Norfolk, VA",
			"dates" : "1993 - 1999",
			"description": "Then he opens the refrigerator and pulls out a zip-locked package of pre-sliced meat for his sandwich. He pulls on it to no effect. He pulls harder and the meat package slips from his hand and lands in the dog’s water bowl. The dog retrieves the package of meat and runs into the living room. The man quickly runs after the dog, but trips on the carpet and lands on the floor with a thud. Fortunately, there is a squeaky toy within reach. He squeaks the toy several times to get the dog’s attention. The dog drops the meat into its doggie bed and comes to happily retrieve the toy. Satisfied, the man stands up, dusts himself off and retrieves the meat package from the dog bed."
		}
	]
}

function locationizer(someworkplace){
	var locArray = [];

	for (job in someworkplace.jobs){
		var locationEntry = someworkplace.jobs[job].location;
		locArray.push(locationEntry);
	}

	return locArray;
}



// console.log(locationizer(work));


function inName(nameToInt){
	var nameSplit = [];
	nameSplit = nameToInt.trim().split(" ");
	// console.log(nameToInt);
	nameSplit[1] = nameSplit[1].toUpperCase();
	nameSplit[0] = nameSplit[0].slice(0,1).toUpperCase() + nameSplit[0].slice(1).toLowerCase();

	return nameSplit[0] + " " + nameSplit[1];
}

// console.log(inName(name));

$("#main").append(internationalizeButton);



var education = {
"schools": [
		{ 
			"name": "Colorado School of Mines",
			"city": "Golden, CO, US",
			"degree": "Bachelors of Science",
			"major": "Mechanical Engineering",
			"minor": "Economics",
			"years": "1999 - 2003"
		},
		{ 
			"name": "University of Washington",
			"city": "Seattle, WA, US",
			"degree": "Masters of Science",
			"major": "Structural Engineering",
			"years": "2012-2013"
		}
	]
}



// below commenting out the variable pass into javascript - instead use the object dot attribute...

// example of how I did it before -- var formatedRole = HTMLheaderRole.replace("%data%",role);
$("#header").append(HTMLbioPic.replace("%data%",bio.photoURL));


$("#topContacts").prepend(HTMLlocation.replace("%data%",contactInfo.location));
$("#topContacts").prepend(HTMLgithub.replace("%data%",contactInfo.github));
$("#topContacts").prepend(HTMLmobile.replace("%data%",contactInfo.mobile));
$("#topContacts").prepend(HTMLemail.replace("%data%",contactInfo.email));

$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));

$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append (formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append (formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append (formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append (formattedSkill);

}

$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));



function displayWork(){
for (job in work.jobs){
$("#workExperience").append(HTMLworkStart);

var formattedEmployer = HTMLworkEmployer.replace
("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace
("%data%", work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer +
formattedTitle;
var formattedWorkDates = HTMLworkDates.replace
("%data%", work.jobs[job].dates);
var formattedWorkDescritption = HTMLworkDescription.replace
("%data%", work.jobs[job].description);



$(".work-entry:last").append(formattedEmployerTitle);
$(".work-entry:last").append(formattedWorkDates);
$(".work-entry:last").append(formattedWorkDescritption);
}
}

displayWork();

// $("#header").append(HTMLworkTitle.replace("%data%",work.job[0].currentJob));



// $("#header").append(HTMLschoolName.replace("%data%",education.school));
// $("#header").append(HTMLschoolDates.replace("%data%",education.years));
// $("#header").append(HTMLskills.replace("%data%",bio.skills[0]));
