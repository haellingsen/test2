// Select color input
// Select size input

const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
var height;
var width;
var selectedColor;

function makeGrid() {
  var rowCount = pixelCanvas.rows.length;

  // clear pixelCanvas
  for (let i = 0; i < rowCount; i++) {
    pixelCanvas.deleteRow(0);       
  }

  // add rows and cells
  for (let i = 0; i < height; i++) {
    var row = pixelCanvas.insertRow();
    for (let j = 0; j < width; j++) {
      var cell = row.insertCell();
    }
  }  
};


pixelCanvas.addEventListener('click', (e) => { 
  let cell = e.target;

  if (cell.tagName !== 'TD') {
    return;
  };

  console.log("Classname: " + cell.className)

  if (cell.classname === 'colored') {
    cell.style.backgroundColor = "white";
    cell.classname = '';
  } else {
    cell.style.backgroundColor = selectedColor;
    cell.classname = 'colored';
  }
  
  console.log("Classname: " + cell.style.classname)

  console.log("cell bg color (selected): " + selectedColor)
  console.log("cell bg color: " + cell.style.backgroundColor)

});


sizePicker.addEventListener('submit', (e) => {
  e.preventDefault();
   new FormData(sizePicker);
});

sizePicker.addEventListener('formdata', (e) => {
  console.log('formdata fired');
 
  let data = e.formData;
  
  height = e.formData.get("height");
  width = e.formData.get("width");

  console.log("Get height: " + height);
  console.log("Get Width: " + width);

  // generate the grid
  makeGrid();

});

colorPicker.addEventListener("input", (e) => {
  selectedColor = e.target.value;
  console.log("Color selected: " + selectedColor)
});

