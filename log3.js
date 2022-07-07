console.log('start');

let fixedElements = [...document.body.getElementsByTagName("*")].filter(
  x => getComputedStyle(x, null).getPropertyValue("position") === "fixed"
);
fixedElements.map(item => {
  item.style.display = 'none';
});
console.log('done');
$done();
