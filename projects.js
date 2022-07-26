var list = document.getElementById('list');
var booklist = document.getElementById('booklist');
var bbase, base, randomized, dragging, draggedOver;
var isRight = 'Projects Todo (not in chronological order)';
var bisRight = 'Programming-related Books To-read (not in chronological order)';

const genRandom = (array) => {
  base = array.slice();
  randomized = array.sort(() => Math.random() - 0.5);
  renderItems('isRight', list, isRight, 'aqua', randomized, compare, setDragging, setDraggedOver);
};

const bgenRandom = (array) => {
  bbase = array.slice();
  brandomized = array.sort(() => Math.random() - 0.5);
  renderItems('bisRight', booklist, bisRight, 'lightblue', brandomized, bcompare, bsetDragging, bsetDraggedOver);
};


const renderItems = function(stitle, olist, sfinaltitle, scolor, data, fcompare, fsetDragging, fsetDraggedOver) {
  document.getElementById(stitle).innerText = sfinaltitle;
  olist.innerText = '';
  data.forEach(item=>{
    var node = document.createElement("li");    
    node.draggable = true;
    node.style.backgroundColor = scolor;
    node.addEventListener('drag', fsetDragging) ;
    node.addEventListener('dragover', fsetDraggedOver);
    node.addEventListener('drop', fcompare) ;
    node.innerText = item;
    olist.appendChild(node);
  })
};

const compare = (e) =>{
  var index1 = randomized.indexOf(dragging);
  var index2 = randomized.indexOf(draggedOver);
  randomized.splice(index1, 1);
  randomized.splice(index2, 0, dragging);
 
  isRight = randomized.join("") === base.join("") 
    ? 'Projects Todo (in chronological order)': 'Projects Todo (not in chronological order)'; 

  renderItems('isRight', list, isRight, 'aqua', randomized, compare, setDragging, setDraggedOver);
};


const bcompare = (e) =>{
  var index1 = brandomized.indexOf(bdragging);
  var index2 = brandomized.indexOf(bdraggedOver);
  brandomized.splice(index1, 1);
  brandomized.splice(index2, 0, bdragging);
 
  bisRight = brandomized.join("") === bbase.join("") 
    ? 'Programming-related Books To-read (in chronological order)':'Programming-related Books To-read (not in chronological order)'; 

  renderItems('bisRight', booklist, bisRight, 'lightblue', brandomized, bcompare, bsetDragging, bsetDraggedOver);
};





const setDraggedOver = (e) => {
  e.preventDefault();
  draggedOver = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText);
};

const setDragging = (e) =>{
  dragging = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText);
};

const bsetDraggedOver = (e) => {
  e.preventDefault();
  bdraggedOver = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText);
};

const bsetDragging = (e) =>{
  bdragging = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText);
};




genRandom([
  'Games::Cards::Bridge', 
  'program for a variant of Chinese chess',
  'Integer number sequence computation for 6x6 Reversi',
  'Integer number sequence computation for one-dimensional Reversi',
  'Integer number sequence computation for Kagome lattice related stuff',
  'Math::Cryptarithm',
  'Math::Abacus',
]);

bgenRandom([
  '提升程式設計的邏輯思考力 {~2018}',
  'COMMON LISP: A Gentle Introduction to Symbolic Computation {~2020}',
  'An Invitation to Applied Category Theory: Seven Sketches in Compositionality {~2021}',
  'Modern Perl {2022 Jan}',
  'Applied mathematics for Database Professionals {2022 Jan}',
  'Think Julia {2022 May}',
  'Systematic Program Design (not a book but a course) {2022 Jun}',
  'Rediscovering JavaScript - Master ES6, ES7, and ES8 {2022 Jun}',
  'Think Raku {2022 Jul}',
  'String and List Processing in SNOBOL4 {2022 Jul}',
  'Why Functional Programming Matters (an article) {2022 Jul}',
  '# Some books in C',
  '# Some books in parallelism and/or threading',
  '# Some books/articles in Model-View-Control',
  '# Some practices in bash',
  '# Some practices in SQL',
]);

