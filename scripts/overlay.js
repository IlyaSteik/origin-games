function close_overlay() {
  document.getElementById('overlay_image').style.display = "none";
  
  window.onscroll = function() {};
}
function open_overlay(evt) {
  document.getElementById('overlay_image').style.display = "block";
  document.getElementById('overlay_image').innerHTML = '<img src='+evt.currentTarget.src+' width="70%"/>';
  
  window.scrollTo(0, 0); 
  scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  window.onscroll = function() { 
    window.scrollTo(scrollLeft, scrollTop); 
  }; 
}