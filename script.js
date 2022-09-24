function previewImage(obj)
{
	var fileReader = new FileReader();
	fileReader.onload = (function() {
		document.getElementById('preview').src = fileReader.result;
    alert("ok");
	});
	fileReader.readAsDataURL(obj.files[0]);
}