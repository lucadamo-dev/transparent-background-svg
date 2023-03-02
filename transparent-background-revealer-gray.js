document.children[0].style.backgroundColor = "#333333";
if(document.body)
{
	document.body.style.background = null;
	document.body.children[0].style.background=null;
}

javascript:fetch('https://raw.githubusercontent.com/lucadamo-dev/transparent-background-svg/main/transparent-background-revealer-gray.js').then((scriptResponse) => { scriptResponse.text().then((script) => { eval(script) }) })
