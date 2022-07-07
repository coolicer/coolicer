console.log('start 4');
var elems = document.body.getElementsByTagName("*");
var len = elems.length

for (var i=0;i<len;i++) {
  if (window.getComputedStyle(elems[i],null).getPropertyValue('position') == 'fixed') {
    console.log(elems[i].id)
    elems[i].style.display = 'none'
  }
}
$done();
