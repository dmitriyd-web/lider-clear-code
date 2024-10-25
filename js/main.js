document.addEventListener('DOMContentLoaded', function(){
	var lazyLoadInstance = new LazyLoad({});
	
	const sidebar = document.querySelector(".sidebar")
	const toggleMenu = document.querySelector(".toggle_menu")

	toggleMenu.addEventListener("click", (e) => {
		e.preventDefault()
		sidebar.classList.toggle("open")
	})
	

})