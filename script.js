function previewImage(obj)
{
	var fileReader = new FileReader();
	fileReader.onload = (function() {
		document.getElementById('preview').src = fileReader.result;
	});
	fileReader.readAsDataURL(obj.files[0]);
}

var elem = document.getElementById('range');
var target = document.getElementById('value');
var rangeValue = function (elem, target){
  return function(evt){
    target.innerHTML = elem.value;
  }
}
elem.addEventListener('input', rangeValue(elem, target));