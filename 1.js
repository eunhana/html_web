var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    
    Links.setColor('black');
  }
}

var scrollToTopBtn = document.getElementById('scroll-to-top-btn');
/*var scrollToBottomBtn = document.getElementById('scroll-to-bottom-btn');*/

var scrollToTopBtn = document.documentElement
function scrollToTop() {
  scrollToTopBtn.scrollTo({
    top: 0,
    behavior: "smooth"
})}
scrollToTopBtn.addEventListener("click", scrollToTop);

/*var scrollToBottomBtn = document.documentElement
function scrollToBot() {
  scrollToTopBtn.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
})}
scrollToBottomBtn.addEventListener("click", scrollToBot);*/
  
