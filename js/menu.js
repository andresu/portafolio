(function (){
	var mobilemenu = document.getElementById("mobile-menu");
	var menu = document.getElementById("menu");
	var openbtn = document.getElementById("open");
	var closebtn = document.getElementById("close");
	mobilemenu.addEventListener("click", function(){
		var classmenu = menu.getAttribute("class");
	    if (classmenu ==="folding"){
	        mostrar();
	    } else if (classmenu ==="unfolding"){
	    	ocultar();       
	    };
	});
	function mostrar(){
	    menu.classList.remove("folding");
	    menu.classList.add("unfolding");
	    openbtn.classList.remove("unfolding");
	    openbtn.classList.add("folding");
	    closebtn.classList.remove("folding");
	    closebtn.classList.add("unfolding");	   
	}
	function ocultar(){
	    menu.classList.remove("unfolding");
	    menu.classList.add("folding");
	    openbtn.classList.remove("folding");
	    openbtn.classList.add("unfolding");  
	    closebtn.classList.add("folding");
	    closebtn.classList.remove("unfolding");
    
	}
})();