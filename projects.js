var list = document.getElementById('list');
var booklist = document.getElementById('booklist');
var bbase, base, randomized, dragging, draggedOver;
var isRight = 'Projects Todo (not in chronological order)';
var isRightSub = 'Subjects To-learn (not in chronological order)';

const genRandom = (array) => {
  base = array.slice();
  randomized = array.sort(() => Math.random() - 0.5);
  renderItems('isRight', list, isRight, 'aqua', randomized, compare, setDragging, setDraggedOver);
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
    ? 'Pet Projects Todo (in chronological order)': 'Pet Projects Todo (not in chronological order)'; 

  renderItems('isRight', list, isRight, 'aqua', randomized, compare, setDragging, setDraggedOver);
};





const genRandomSub = (array) => {
  base = array.slice();
  randomized = array.sort(() => Math.random() - 0.5);
  renderItems('isRightSub', subList, isRightSub, 'pink', randomized, compareSub, setDragging, setDraggedOver);
};

const compareSub = (e) =>{
  var index1 = randomized.indexOf(dragging);
  var index2 = randomized.indexOf(draggedOver);
  randomized.splice(index1, 1);
  randomized.splice(index2, 0, dragging);
 
  isRightSub = randomized.join("") === base.join("") 
    ? 'Subjects To-Learn (in chronological order)': 'Subjects To-Learn (not in chronological order)'; 

  renderItems('isRightSub', subList, isRightSub, 'pink', randomized, compareSub, setDragging, setDraggedOver);
};





const setDraggedOver = (e) => {
  e.preventDefault();
  draggedOver = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText);
};

const setDragging = (e) =>{
  dragging = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText);
};




genRandom([
  'Map::Tube::Hongkong',
  'Games::Cards::Bridge', 
  'program for a variant of Chinese chess',
  'Integer number sequence computation for 6x6 Reversi',
  'Integer number sequence computation for Kagome lattice related stuff',
  'Math::Cryptarithm',
  'Math::Permutations (ref: Permutations.jl in Julia)',
  'Integer number sequence computation for the 4x4 game Quarto',
  'Integer number sequence computation for game British square',
  'Integer number sequence computation for paper-and-pencil game Dandelions',
  'Badty (a simple mathematical card game)',
  'Sports Day Central Management System (React Project)',
]);






genRandomSub([
  'Philosophy of Science',
  'Philosophy',
  'Game Theory',
  'Advanced Graph Theory',
  'Decision Theory',
  'Data Science',
  'NLP',
  'Computability Theory',
]);

/* bgenRandom([
  '提升程式設計的邏輯思考力 {~2018}',
  'COMMON LISP: A Gentle Introduction to Symbolic Computation {~2020}',
  'An Invitation to Applied Category Theory: Seven Sketches in Compositionality {~2021}',
  'Modern Perl {2022 Jan}',
  'How Software Works {2022 Jan}',
  'Applied mathematics for Database Professionals {2022 Jan}',
  'Systematic Program Design (not a book but a course) {2022 Jun}',
  'Rediscovering JavaScript - Master ES6, ES7, and ES8 {2022 Jun}',
  'Think Raku {2022 Jul}',
  'String and List Processing in SNOBOL4 {2022 Jul}',
  '# Some books in C',
  '# Some books in parallelism and/or threading',
  '# Some books/articles in Model-View-Control',
  '# Some practices in bash',
  '# Some practices in SQL',
]); */

