/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append("Antonio Dinkins");
let name="Antonio Dinkins";
let role = "Full Stack Software Developer";
let formattedName = HTMLheaderName.replace("%data%", name);
let formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);
$("#header").prepend(formattedName);