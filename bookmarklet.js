javascript:(function(){
if(localStorage.getItem('nailItStatus')) {
var status = JSON.parse(localStorage.getItem('nailItStatus'));
var value = status["on"];
}
else{
localStorage.setItem('nailItStatus','{"on":1}');
var value = 1;
} window.onunload = function(){localStorage.setItem('nailItStatus','{"on":1}');}
if(value){
var h = setInterval(function(){var x = document.getElementsByClassName("style-scope yt-img-shadow"); for(var i =1; i<x.length; i++){x[i].style.filter = " brightness(0) saturate(80%)";}},2000);
localStorage.setItem('nailItStatus','{"on":0}');
}

else{
location.reload();
localStorage.setItem('nailItStatus','{"on":1}');
}

})();
