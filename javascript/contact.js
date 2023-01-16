function onEmailClick(){
    let width = screen.width;
    // let width = 400;
    console.log("width=" + width);
    if(width > 450) window.open('mailto:info@dimairaq.com', '_blank');
    else window.location.href = "mailto:info@dimairaq.com";
}

//animation 2
$(window).on('load', function() {
    anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  window.onscroll = function() {myFunction()};
  var header = document.getElementById("header-wrap-home1");
  var menu = document.getElementById("mainnav");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      menu.classList.add("sticky2");
    } else {
      header.classList.remove("sticky");
      menu.classList.remove("sticky2");
    }
  }

  const uluru = { lat: 35.577682, lng: 45.410323 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("themesflat-map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

});


