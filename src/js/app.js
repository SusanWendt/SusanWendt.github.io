// Display navigation when menu button is clicked
const menuButton = document.querySelector('.nav-menu');
	menuButton.addEventListener('click', function(){
    var menuList = document.querySelector('nav ul');
	    if (menuList.style.display === "block") {
	        menuList.style.display = "none";
	    } else {
	       menuList.style.display = "block";
   		}
});


//making nav links active on click
const navElems = document.querySelectorAll('nav ul li');
// Remove 'active' class from other navigation elements when one is clicked
navElems.forEach(function(navElem) {
  navElem.addEventListener('mouseover', function() {
    navElems.forEach(function(navElem) {
      navElem.classList.remove('active')
    })
// Add 'active' class to navigation elements when they are clicked
    this.classList.add('active');
    navElems.forEach(function(navElem) {
      if (!navElem.classList.contains('active')) {
        navElem.style.opacity = '1'
      }
    })
  })

  navElem.addEventListener('mouseout', function() {
    navElems.forEach(function(navElem) {
      navElem.style.opacity = '1';
    })
  })
})