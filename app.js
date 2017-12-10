var patternNames = [
    'Strategy',
    'Observer'
];
var list = document.getElementById('patterns');
patternNames.forEach(function (item) {
    var elem = document.createElement('p');
    elem.appendChild(document.createElement('a'));
    elem.innerHTML = item;
    list.appendChild(elem);
});
