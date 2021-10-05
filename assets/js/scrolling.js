 
 
const navLinks = document.querySelectorAll('.nav-item')
  const menuToggle = document.getElementById('navbarNav')
  const bsCollapse = new bootstrap.Collapse(menuToggle)

  navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.toggle() })
  });


  window.addEventListener("scroll", myFunction);

  function myFunction() {
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        bsCollapse.hide();

    }   
}    
