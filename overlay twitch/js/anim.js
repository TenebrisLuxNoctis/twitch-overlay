array = ["<div id='twitter'><i class='fa fa-twitter' aria-hidden='true' id='i'></i><span>@chowh1z1</span></div>",
		"<img class='partner-logo' src='img/istantgaming.png'/>",
		"<div class='partner-logo'id='snap'><i class='fa fa-snapchat-ghost' aria-hidden='true' id='i'></i><span>@mrchoooow</span></div>",
		"<img class='partner-logo' src='img/h1z1swap.png'/>",
		"<div id='yt'><i class='fa fa-youtube-play' aria-hidden='true' id='i'></i><span>@ChowH1</span></div>",
		"<img class='partner-logo' src='img/h1z1hunt.png'/>",
		"<img class='partner-logo' src='img/stealth-gamer.png'/>",
		"<img class='partner-logo' src='img/tekmedia.png' />"
	];

var i=0;

function animate()
{
	i= (i<8) ? i : 0;		
			
	$("#content").html(array[i]);
	$("#content").animate({left: '30px'}, 3500);
	setTimeout(function(){$("#content").animate({left: '-250px'}, 4000);}, 20000);
	i++;
}
		
setInterval(animate,30000);
animate();