
let patternNames = [
  'Strategy',
  'Observer'
];

let list = document.getElementById('patterns');
patternNames.forEach(item => {
  let elem = document.createElement('p');
  elem.innerHTML = item;
  list.appendChild(elem);
});
