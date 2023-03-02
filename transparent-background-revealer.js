document.children[0].style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill-opacity="0.3" width="25" height="25" ><g fill="grey"><rect x="25" width="25" height="25" /><rect y="25" width="25" height="25" /></g><rect width="25" height="25" /><rect y="25" x="25" width="25" height="25" /></svg>')`;
if(document.body)
{
	document.body.style.background = null;
	document.body.children[0].style.background=null;
}