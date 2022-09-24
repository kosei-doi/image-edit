let currentImg = new Image();

function previewImage(obj){
	var fileReader = new FileReader();
	fileReader.onload = (function() {
		document.getElementById('preview').src = fileReader.result;
    currentImg.src = fileReader.result;
	});
	fileReader.readAsDataURL(obj.files[0]);
}

let currentValue = 10;

var elem = document.getElementById('range');
var target = document.getElementById('value');
var rangeValue = function (elem, target){
  return function(evt){
    draw();
    target.innerHTML = elem.value;
    currentValue = elem.value;
  }
}
elem.addEventListener('input', rangeValue(elem, target));

currentImg.onload = () => {
  draw();
}

function draw(){
  let data = createImageData(currentImg);
  console.log(data);
  document.getElementById('result').getContext('2d').putImageData(data, 0, 0);
}


function createImageData(img) {

  var cv = document.createElement('canvas');

  cv.width = img.naturalWidth;
  cv.height = img.naturalHeight;

  var ct = cv.getContext('2d');

  ct.drawImage(img, 0, 0);

  var data = ct.getImageData(0, 0, cv.width, cv.height);

  return data;
}
