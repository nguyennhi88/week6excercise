$(document).ready(function(){

$("#hideme").click(function(){
	$("img").hide()

	})
$("#showme").click(function(){
	$("img").show()
})
$("h1").dblclick(function(){
	$(this).toggleClass("main2")

})
$(".btn3").click(function(){
	$("ul").append("<li>happy day</li>")
})
$(".main3").hover(function(){
	$(".main3").css("background-color","black")

})
$("h2").mouseleave(function(){
	$(this).slideUp("slow")

})
$(".main4").hover(function(){
	$(".main4").hide()

})
$("#btn4").click(function(){
	$(".main4").show()

})
$("h1").hover(function(){
	$(this).css("font-family","cursive");

})
})