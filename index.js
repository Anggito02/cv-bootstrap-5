// Navbar Background Animation
window.addEventListener('scroll', function(event) {
    event.preventDefault();
    
    const nav = this.document.querySelector("nav");
    let yScroll = this.window.scrollY;
    let xWidth = this.window.innerWidth;
    
    if(xWidth > 992) {
        if(yScroll > 480) {
            nav.style.color = "#FFF";
            nav.style.backgroundColor = "#BBC8DD";
            nav.style.transitionDuration = "0.4s";
        }
        else {
            nav.style.backgroundColor = "transparent";
            nav.style.transitionDuration = "0.4s";
        }
    }
});

// Parallax Effect
window.addEventListener('scroll', function(event) {
    event.preventDefault();

    const title = this.document.querySelector("#head-par");
    let yScroll = this.window.scrollY;
    let xWidth = this.window.innerWidth;

    if(xWidth > 992) {
        title.style.transform = "translateY("+ yScroll/6 +"%)"
    }
});