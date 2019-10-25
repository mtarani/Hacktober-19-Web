// change Image 
var myImg = document.getElementById("img1");
var ImgArray = ["a.jpg","b.jpg","c.jpg","d.jpg"];
var imgIndex = 0;
function changeImage()
{
	myImg.setAttribute("src",ImgArray[imgIndex]);
	imgIndex++;
	if(imgIndex >=ImgArray.length)
	{
		imgIndex=0;
	}
}
setInterval(changeImage,5000);
