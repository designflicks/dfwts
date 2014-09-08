//http://web.archive.org/web/20140724052024/http://www.reddit.com/r/web_design
//http://static.dnaindia.com/images/2014/article-share-rt.png

var s1=document.createElement('script'); 
s1.src = "http://code.jquery.com/jquery-latest.min.js"; 
s1.onload = function(){
    var s1=document.createElement('script'); s1.src = "http://localhost/dfwts/reddit/init.js"; h1.appendChild(s1);
	//var s1=document.createElement('script'); s1.src = "http://localhost/dfwts/reddit/run.js"; h1.appendChild(s1);
};
var h1=document.getElementsByTagName('head')[0]; 
h1.appendChild(s1);

d = 1000/10; t = '1';

function animate_mark($t, text)
{
	$this = $("."+$t);
	if(typeof text == "undefined")
	{
		text = $this.html();
		//$this.html("");
		$this.html(text.substr(0, text.length-1));
	}

	//$(".mark").not($(this)).fadeOut();
	if($this.css("opacity") == "0")
	{
		$this.fadeTo(500, 1)
	}	
	var length = $this.html().length;
	var current_string = text.substr(0, length+1);

	if(text.length == length)
	{
		setTimeout(function(){$this.fadeOut(d/10, function(){dq();} ); }, length*50/10)
		return;
	}

	$this.html(current_string);

	setTimeout(function(){animate_mark($t, text)}, 25)
}

var cc = 0;
function comment($string, $top, $left, $extra_classes)
{
	//dq(); return;
	var $uid = "m"+cc;
	if(typeof $extra_classes == 'undefined')
		$extra_classes = '';

	$("body").append("<pre class='mark "+$uid+" "+$extra_classes+"' style='top: "+$top+"px; left: "+$left+"px;'>"+$string+"</pre>");
	cc++;

	animate_mark($uid)
}


$("head").append(" \
	<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700|Pacifico|Varela+Round|Open+Sans:300|Raleway:100,200,300,400' rel='stylesheet' type='text/css'> \
	<link href='//netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.css' rel='stylesheet'> \
	<link rel='stylesheet' type='text/css' href='http://localhost/dfwts/df.css' media='all'> \
");


// for(var i = 0; i < comments.length; i++)
// {
// 	$("body").append("<pre class='mark m"+i+"' style='left: "+comments[i].tp[0]+"px; top: "+comments[i].tp[1]+"px';>"+comments[i].t+"</pre>");
// }

var $ks;
var mode = "auto";
$(document).keydown(function(e){
	if(e.keyCode == 13)
	{
		mode = "auto";
		dq();
	}
    if (e.keyCode == 39)
    {
    	dq(true);
    }
});
function dq(force){ 
	// console.log("yo");
	// console.log(force);
	if(mode == "auto" || force === true)
	{
		$("html").dequeue(); 
	}
}

// $("body").mousemove(function( event ) {
//   var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
//   var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
//   console.log( pageCoords );
// });



