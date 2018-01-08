//Check off dpecific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
}); 

//Click on x to delete todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//stops the click from effecting other elements
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");		
		//creat a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(500)
});