
$(function() {
$(".lang").change(function(){

//Save the link in a variable called element
var element = $(this);

//Find the id of the link that was clicked
var id = element.attr("value");


if(id == 'english')
 {
$.ajax({
   type: "GET",
   url: "jsfiles/english.js",
   dataType: "script"
 }); 
 
 }
 
else if(id == 'hindi')
 {
$.ajax({
   type: "GET",
   url: "jsfiles/hindi.js",
   dataType: "script"
 }); 
 
 }

else if(id == 'telugu')
 {
$.ajax({
   type: "GET",
   url: "jsfiles/telugu.js",
   dataType: "script"
 }); 
 
 }
 
 else if(id == 'tamil')
 {
$.ajax({
   type: "GET",
   url: "jsfiles/tamil.js",
   dataType: "script"
 }); 
 
 }
 
 else if(id == 'malayalam')
 {
$.ajax({
   type: "GET",
   url: "jsfiles/malayalam.js",
   dataType: "script"
 }); 
 
 }
 
 else if(id == 'kannada')
 {
$.ajax({
   type: "GET",
   url: "jsfiles/kannada.js",
   dataType: "script"
 }); 
 
 }
 
 else if(id == 'bengali')
 {
$.ajax({
   type: "GET",
   url: "jsfiles/bengali.js",
   dataType: "script"
 }); 
 
 }
 else if(id == 'punjabi')
 {
$.ajax({
   type: "GET",
   url: "jsfiles/punjabi.js",
   dataType: "script"
 }); 
 
 }
 
 else
 {
$.ajax({
   type: "GET",
   url: "jsfiles/gujarathi.js",
   dataType: "script"
 }); 
 
 }
 
return false;

});

});

