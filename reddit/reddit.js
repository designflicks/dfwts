//http://web.archive.org/web/20140724052024/http://www.reddit.com/r/web_design
//http://www.jacquesbastien.com/startups/remora/

//remove ads
$("#siteTable_organic").parent().remove();
$(".titlebox h6:nth-of-type(1)").remove();

$("head").append("<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700|Pacifico' rel='stylesheet' type='text/css'>");
$("head").append('<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">');

$(".link .title").css({fontFamily: 'Montserrat'});
//$(".link .title").css({fontWeight: 'bold', textTransform: 'uppercase'});
$(".link .title").css({fontWeight: 'bold', color: '#333'});
$(".link .title").css({lineHeight: '1.5'});

// width
$(".content").css({marginLeft: '0'});
$("#siteTable").css({width: '700px', marginLeft: '159px'})
$(".link").css({padding: '25px', width: '100%'});
$(".infobar.welcome").css({padding: '0 15px'});
$(".link, .infobar.welcome").css({boxSizing: 'border-box'});

$(".link").css({borderRadius: '0', borderBottom: '1px solid #e6e6e6', marginBottom: '0'});

$(".link .title").css({fontSize: '14px'});
$(".link").css({padding: '15px'});

$(".link .midcol").css({marginLeft: '0', marginRight: '14px', marginTop: '3px'});
$(".thumbnail").css({marginTop: '5px'});

// sidebar
$(".side").css({margin: "88px 196px 0px 0px"})
$(".side").css({background: "transparent", boxShadow: 'none'})
$(".side").css({margin: "88px 206px 0px 0px"})
$(".md p").css({fontSize: '13px'});
$(".md p").css({lineHeight: '1.5'});
$(".md ol, .md ul").css({margin: '10px 0px 10px 20px'});
$(".titlebox h1 a").css({top: '310px'})

$(".domain").css({textTransform: 'lowercase', fontWeight: 'normal', fontSize: '10px'})

$(".thumbnail").css({float: 'right'})
$(".thumbnail.self").css({display: 'none'})
$(".thumbnail.default").css({opacity: '0.5'})

$(".titlebox h6:nth-of-type(1)").css({border: '0 none', background: 'transparent', top: '270px', padding: '0', left: '110px'})

$("body").css({background: 'linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.5)), url(http://24.media.tumblr.com/56a9757318c0f2ed1c1c687f254b2fb8/tumblr_mopqkkwK2M1st5lhmo1_1280.jpg)'})
$("body").css({backgroundSize: "cover"});
$("body").css({backgroundAttachment: "fixed"});

$("#header, #header:after").css({background: 'transparent'})

$(".pagename a").css({display: 'none'});
$(".titlebox h1 a").css({fontFamily: 'pacifico', color: 'white', fontWeight: 'normal', fontSize: '51px'})
//testing
$(".titlebox h1 a").css({top: '210px'})

$("head").append("<style>#header:after {display: none;}</style>");
$("#header .tabmenu").css({background: 'transparent', border: '0 none'})
$(".tabmenu li a").css({fontFamily: 'Montserrat', color: 'white', fontSize: '16px !important'})
$(".tabmenu li a").css({margin: '0px 30px 0px 0'})
$(".content").css({marginTop: '0'})
$(".titlebox h6:nth-of-type(1)").css({left: '159px', top: '190px', color: 'white'})
$("#header .tabmenu").css({textAlign: 'left', paddingLeft: '630px'})




$("head").append("<style>.footer:before {display: none;}</style>");

$(".footer a").css({color: 'white'})
$(".footer a").css({fontFamily: 'Montserrat'})
$(".footer a").css({fontSize: '12px', lineHeight: '1.75'})

$(".footer .col").css({border: '0 none'})

$(".footer-parent").css({textAlign: 'left'})

$(".footer li.title").css({textTransform: 'uppercase'})
$(".footer li.title").css({fontFamily: 'Montserrat'})
$(".footer li.title").css({color: 'wheat'})
$(".footer li.title").css({fontSize: '14px', fontWeight: 'bold'})
$(".footer li.title").css({marginBottom: '15px'})

$(".footer-parent").css({marginTop: '30px'});
$(".footer .col").css({padding: '0', marginRight: '100px', height: 'auto'})
$(".footer").css({margin: '0', padding: '0', marginLeft: '159px'});

$(".bottommenu").css({marginLeft: '159px', color: 'white'})
$(".bottommenu a").css({color: 'white'})
$(".footer").css({marginBottom: '20px'});


$(".side .spacer:nth-child(3), .side .spacer:nth-child(5)").css({display: 'none'});
$(".side .spacer").css({marginBottom: '30px', marginTop: '0'});
$(".side .spacer").css({background: 'rgba(255, 255, 255, 1)'});
$(".side").css({margin: "88px 159px 0px 0px"})

$("#search input[type=text]").css({marginTop: '0'})
$(".sidecontentbox .content li").css({marginBottom: '8px'})
$(".side").css({paddingTop: '0'});
$(".side .spacer:first-child").css({background: 'transparent'})
$("#search input[type=text]").css({borderRadius: '3px', border: '1px solid white', backgroundColor: 'transparent'})

$(".side").css({background: 'rgba(255, 255, 255, 0.9)'})
$(".side .spacer").css({background: 'transparent'})
$(".side").css({borderRadius: '0'})
$(".side").css({width: '330px'});

$("#siteTable").css({position: 'relative', boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.25)'})
$(".link").css({borderLeft: '0 none', borderRight: '0 none'})

$("#siteTable a.author").css({color: '#999', borderBottom: '1px dotted #aaa', display: 'inline-block'});
$(".link .entry li .comments").css({color: '#999', borderBottom: '1px dotted #aaa', fontWeight: 'normal'})
$(".link .flat-list").css({padding: '0'})
$(".link .tagline, .link .entry li .comments").css({float: 'left', marginRight: '5px', fontSize: '11px', lineHeight: '1.6em', padding: '0'});

$("#header").css({height: '150px'});
$(".titlebox h6:nth-of-type(1)").css({top: '125px', fontFamily: 'Montserrat'})
$("body").css({backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(http://24.media.tumblr.com/56a9757318c0f2ed1c1c687f254b2fb8/tumblr_mopqkkwK2M1st5lhmo1_1280.jpg)'})
$(".titlebox h1 a").css({top: '145px'})
$("#header .tabmenu").css({top: '112px'})

$(".login-form").prepend("<p><strong>Login</strong></p>")

$(".side p>a[href^='/r/']:only-child").css({width: '50%', float: 'left', lineHeight: '2'})
$(".side hr").css({clear: 'both'});
$(".side p>strong").css({fontFamily: 'Montserrat', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: 'rgba(0, 0, 0, 0.75)'})

$("#siteTable").css({borderTop: '5px solid hsl(40, 70%, 70%)'})
$(".tabmenu").css({top: '116px', paddingLeft: '689px'});
$(".tabmenu li.selected a").css({borderBottom: '5px solid hsl(40, 70%, 30%)'});

$(".login-form-side").css({margin: '10px 15px'});
$(".login-form-side input[type=text], .login-form-side input[type=password]").css({width: '287px'})

$("body").css({backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(http://localhost/dfwts/assets/laptopbg.png)'})

$("#ad_main").css({marginLeft: "15px"})
$("#header-img").css({top: '158px', left: '124px'});

$("#search input[type=text]").css({borderRadius: '0', border: '0 none', borderBottom: '1px solid #ccc', backgroundColor: 'rgba(0, 0, 0, 0.1)', width: '290px', padding: '10px 0px 10px 40px', backgroundPosition: '-129px 9px'})
$(".side .spacer").css({marginBottom: '15px'});

$(".side p>strong").css({fontFamily: 'Montserrat', fontWeight: 'normal', textTransform: 'none', fontSize: '16px', color: 'rgba(0, 0, 0, 0.75)', display: 'block', paddingTop: '20px', clear: 'both'})
$("hr").css({display: 'none'})

$(".login-form-side input[type=text], .login-form-side input[type=password]").css({width: '287px'}).css({background: 'rgba(0, 0, 0, 0.1)', border: '1px solid #ccc', margin: '10px 0 0 0'});

$(".nav-buttons").css({background: 'rgba(255, 255, 255, 0.9)', padding: '10px', textAlign: 'center'})
$(".nav-buttons .nextprev").css({fontSize: '0px', lineHeight: '1', margin: '0', background: 'transparent', border: '0 none'});
$(".nav-buttons .nextprev a").css({fontSize: '16px'});

$(".link .title").css({color: '#332211'});

$("#header .tabmenu").css({paddingLeft: '536px'})

$(".nextprev a").css({fontSize: '14px', color: 'rgba(0, 0, 0, 0.5)', fontFamily: 'Montserrat'})
$(".nav-buttons").css({padding: '0', overflow: 'hidden'})
$(".nextprev").css({width: '50%', display: 'block', float: 'right', borderLeft: '1px solid #ddd'})
$(".nextprev a").css({lineHeight: '35px'})

$("body").css({backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(http://localhost/dfwts/assets/laptopbg.png)'})
$(".titlebox h6:nth-of-type(1)").prepend("<i class='fa fa-bookmark bookmark-icon'></i>")
$(".bookmark-icon").css({marginRight: '10px'})

$(".sidecontentbox h1").html("Moderators").css({fontFamily: 'Montserrat', fontWeight: 'normal', fontSize: '16px', color: 'rgba(0, 0, 0, 0.75)'})

$("#login_login-main>p strong").css({paddingTop: '0', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase'})
$("#header-bottom-right").css({top: '283px', right: '152px', background: 'transparent', fontSize: '12px'})
$("#header-bottom-right .login-required").html("Register");
$("#header-bottom-right .user").css({fontSize: '0'});
$("#header-bottom-right a").css({fontSize: '12px', fontFamily: 'Montserrat'});
$(".login-form-side #remember-me").css({lineHeight: '34px'});

$("#header").css({height: '100px'});
$(".titlebox h1 a").css({top: '95px'})
$("#header-img").css({top: '108px'});
$("#header .tabmenu").css({top: '66px'})
$(".titlebox h6:nth-of-type(1)").css({top: '79px'})
$("#header-bottom-right").css({top: '233px'});

$("body").css({backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(http://localhost/dfwts/assets/laptopbg.png)'})

$(".morelink").css({background: '#31AC71', border: '0 none', height: 'auto', overflow: 'hidden'});
$(".morelink a").css({fontFamily: 'montserrat', textAlign: 'left', paddingLeft: '15px', lineHeight: '40px', textShadow: 'none', width: 'auto', float: 'left'});
$(".morelink a").before("<i class='fa fa-plus'></i>");
$(".morelink i").css({display: 'block', float: 'left', color: 'white', padding: '0 10px 0 15px', lineHeight: '40px', float: 'left', fontSize: '14px'})
$(".morelink a").css({paddingLeft: '0'});



$("#search input[type=text]").css({backgroundImage: 'none'})
$("#search").prepend("<i class='fa fa-search search-icon'></i>").css({position: 'relative'})
$(".search-icon").css({position: 'absolute', top: '0', left: '15px', fontSize: '16px', lineHeight: '43px', color: 'rgba(0, 0, 0, 0.5)'})

$("body").css({backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://localhost/dfwts/assets/laptopbg.png)'})
$(".side a").css({color: 'hsl(40, 50%, 45%)'}); $(".redditname a").css({color: 'white'});


//$(".sidecontentbox h1").css()
$(".sidecontentbox li").css({width: '50%', float: 'left'})
$(".sidecontentbox li .flair").css({display: 'none'})

$(".sidecontentbox").css({padding: '0 15px'})
$(".sidecontentbox a.helplink").css({textShadow: 'none', border: '0 none', borderRadius: '2px', margin: '0', fontSize: '12px', lineHeight: '23px'})
$(".sidecontentbox a.helplink").html("Send Message");
$(".sidecontentbox a.helplink").css({width: '35%'})
$(".sidecontentbox .title").css({marginBottom: '10px'})
$(".sidecontentbox .content").css({overflow: 'hidden', borderBottom: '1px solid #d8d8d8'})


$("a[href^='irc']").css({display: 'block', marginTop: '10px'})



$(".titlebox h6:nth-of-type(2)").css("opacity", "0");
$("head").append("<style>.subscribe-button a::after{display: none;}</style>");

























//var s=document.createElement('script'); s.src = "http://localhost/dfwts/engine.js"; var h=document.getElementsByTagName('head')[0]; h.appendChild(s);
//var s=document.createElement('script'); s.src = "http://localhost/dfwts/reddit/init.js"; var h=document.getElementsByTagName('head')[0]; h.appendChild(s);

//var s= document.createElement('script'); s.src = "http://thecodeplayer.com/engine.js"; var h= document.getElementsByTagName('head')[0]; h.appendChild(s);

$("html").delay(3000)
	.queue(function(){ $("body").animate({scrollTop: '0'}); dq(); })
	.queue(function(){ $("#siteTable").addClass("modal"); comment("Let's start with the main listing.", 355, 620); })
	.queue(function(){ comment("We can narrow down the main listing. It's just too wide.", 355, 620); })
	.queue(function(){ $(".id-t3_2bhtxx").css({background: 'hsl(40, 100%, 95%)'}); comment("If we take this list item as an example, reading\n20-25 words per line can be irritating or hard to focus on.", 580, 600); })
	.queue(function(){$("#siteTable").css({width: '700px'}); $(".id-t3_2bhtxx").css({background: 'white'}); dq(); }).delay(d)
	.queue(function(){$(".content").css({marginLeft: '0'}); $("#siteTable").css({marginLeft: '159px'}); dq();}).delay(d)
	.queue(function(){ comment("Let's remove the space between every item to make the entire listing look like a single block", 280, 178, 'white'); /*$(".sitetable").css({background: 'rgba(200, 0, 0, 0.5)'});*/})
	.queue(function(){$(".link").css({marginBottom: '0'}); $(".link").css({borderRadius: '0'}); dq();}).delay(d)
	.queue(function(){$(".link").css({borderBottomWidth: '0'}); dq();}).delay(d)
	//.queue(function(){$("#siteTable").css({position: 'relative', boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 0px 15px 0px'/*, zIndex: '99'*/}); dq();}).delay(d)
	.queue(function(){$(".link").css({border: '0 none', borderBottom: '1px solid #ccc'}); dq();}).delay(d)
	.queue(function(){ comment("Let's give some breathing space to every listing item", 280, 178, 'white'); })
	.queue(function(){$(".link").css({padding: '15px'}); dq();}).delay(d)
	.queue(function(){ comment("The spacing on the\nleft and right of the\nvoting controls is\ndisbalanced", 310, 10, 'white'); })
	.queue(function(){$(".link .midcol").css({marginLeft: '0', marginRight: '14px'}); dq();}).delay(d)
	// .queue(function(){$(".link .title").fadeTo(200, 0); dq();}).delay(250)
	// .queue(function(){$(".link .title").css({fontFamily: 'Montserrat'}); dq();}).delay(0)
	// .queue(function(){$(".link .title").fadeTo(200, 1); dq();}).delay(d)
	// .queue(function(){$(".link .title").css({fontWeight: 'bold', color: '#333'}); dq();}).delay(d)
	// .queue(function(){$(".link .title").css({lineHeight: '1.5'}); dq();}).delay(d)
	// .queue(function(){$(".link .title").css({fontSize: '14px'}); dq();}).delay(d)

.queue(function(){$("body").animate({scrollTop: '475'}); dq();}).delay(d)	
.queue(function(){ comment("There are a lot of\nrepeating comment\nicons used as\nthumbnails for\ntext-posts", 610, 5, 'white'); })
.queue(function(){ comment("We can remove them\nso that thumbnails\nwill denote URL-posts\nand no-thumbnail\nwill mean text-posts", 610, 5, 'white'); })
.queue(function(){$(".thumbnail.self").css({opacity: '0'}); dq();}).delay(d)
.queue(function(){$(".thumbnail.self").css({width: '0', padding: '0', margin: '0'}); dq();}).delay(d)
.queue(function(){$(".thumbnail.self").css({display: 'none'}); dq();}).delay(0)

.queue(function(){$("body").animate({scrollTop: '210'}); dq();}).delay(d)	
.queue(function(){ comment("The vertical rythm is\nnow broken because\nof thumbnails being\nremoved from some\nposts", 460, 5, 'white'); })
.queue(function(){ comment("We can try to move\nthe remaining\nthumbnails to the\nright to restore\nthe vertical flow", 460, 5, 'white'); })
.queue(function(){$(".thumbnail").css({'-webkit-transform': 'translateX(552px)'}); dq();}).delay(d)
.queue(function(){$(".thumbnail:visible").next().css({'-webkit-transform': 'translateX(-75px)'}); dq();}).delay(d)
.queue(function(){$(".thumbnail").addClass("notransition notransform").css({float: 'right'}).next().addClass("notransition notransform"); dq();}).delay(0)

.queue(function(){ $("#siteTable").removeClass("modal"); dq();})

//need a comment here
.queue(function(){ comment("Let's reduce the prominence of this bookmark link.", 261, 355); })
.queue(function(){ comment("A huge box to encapsulate a single link doesn't look good.", 261, 355); })
.queue(function(){$(".titlebox h6:nth-of-type(1)").css({border: '0 none', background: 'transparent'}); dq();}).delay(d)
.queue(function(){ comment("Let's align this bookmark link with the main listing below.", 261, 355); })
.queue(function(){$(".titlebox h6:nth-of-type(1)").css({top: '275px', padding: '0', left: '159px'}); $("#header .tabmenu").css({background: 'transparent', border: '0 none'}); dq();}).delay(d)

.queue(function(){$("body").animate({scrollTop: '0'}); dq();}).delay(d)	
.queue(function(){ comment("The links for login/register/language can\nbe clubbed with the login form below.", 135, 1035, 'white'); })
.queue(function(){$(".login-form-side").css({paddingTop: '15px'}); $("#header-bottom-right").css({background: 'transparent'}); dq();}).delay(d)
.queue(function(){$("#header-bottom-right").css({top: '330px'}); dq();}).delay(d)

.queue(function(){ comment("Let's reduce the text of\nthe links to an absolute\nminimum to keep it\nto-the-point.", 315, 863, ''); })
.queue(function(){$("#header-bottom-right .user").css({fontSize: '0'}); dq();}).delay(d)
.queue(function(){$("#header-bottom-right .login-required").html("<span class='login'>Login</span> <span class='register'>Register</span>"); dq();}).delay(d)
.queue(function(){$("#header-bottom-right .separator").css({fontSize: '16px'}); dq();}).delay(d)
.queue(function(){ comment("The login link can be\nconverted to a header\nfor the form below", 330, 870); })
.queue(function(){$(".login-required .login").css({'-webkit-transition': 'all 1s cubic-bezier(0.19, 1, 0.22, 1)'}).css("margin-right", "115px"); dq();}).delay(d)

.queue(function(){ comment("Let's club the reddit alien icon with the main listing", 190, 45); })
.queue(function(){$("#header-img").css({zIndex: '0', top: '311px', left: '124px'}); dq();}).delay(d)

.queue(function(){ comment("Let's club the navigation with the main listing\nbelow and remove the white bar beneath", 220, 515); })
.queue(function(){$("#header .tabmenu").css({paddingLeft: '198px', top: '264px'}); dq();}).delay(d)
.queue(function(){$("head").append("<style>#header:after {opacity: 0; -webkit-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1); }</style>"); dq();}).delay(d)
.queue(function(){$("head").append("<style>#header:after {display: none; } .fancy-toggle-button .add:after {content: '';}</style>"); dq();}).delay(d)

.queue(function(){ comment("Let's remove the header background\nWe will try out something different", 150, 540, 'white'); })
.queue(function(){$("#header").css({backgroundColor: 'transparent', backgroundImage: 'url(http://placehold.it/300x100/e5e5e5/e5e5e5.png&text=123)', backgroundSize: 'cover'}); dq();}).delay(d)

.queue(function(){$(".content").css({marginTop: '0'}); $("#header-img").css({top: '225px'}); $("#header .tabmenu").css({top: '172px'}); /*$(".titlebox h6:nth-of-type(1)").css({top: '187px'});*/ $("#header").css({background: 'transparent'}); dq();}).delay(d)
//.queue(function(){$("body").css({backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://localhost/dfwts/assets/laptopbg.png)', backgroundSize: "cover", backgroundAttachment: "fixed"}); dq();}).delay(d)
.queue(function(){$(".side").css({borderRadius: '0'}); dq();}).delay(d)
.queue(function(){$(".side").css({marginRight: "+=179", marginTop: "-=30"}); $("#header-bottom-right").css({right: '+=179', marginTop: "-=30"}); $(".titlebox h1 a").css({marginLeft: '0', top: '228px'}); dq();}).delay(d)
.queue(function(){$(".side").css({width: '330px', marginRight: "-=30"}); $("#header-bottom-right").css({right: '-=30'}); $(".login-required .login").css("margin-right", "+=30"); dq();}).delay(d)


.queue(function(){$("body").animate({scrollTop: '1150'}); dq();}).delay(d)


.queue(function(){$(".side hr").css({clear: 'both'}); dq();})


.queue(function(){
	var positions = [[1364, 874], [1364, 1024], [1394, 874], [1394, 1024], [1424, 874], [1424, 1024], [1454, 874], [1454, 1024], [1484, 874], [1484, 1024], [1514, 874], [1514, 1024], [1544, 874], [1544, 1024], [1574, 874]];
	$(".side p>a[href^='/r/']:only-child").last().parent().next().css("marginTop", "460px");
	$(".side p>a[href^='/r/']:only-child").each(function(i){
		$(this).css({top: $(this).position().top-2, left: $(this).position().left})
	})
	$(".side p>a[href^='/r/']:only-child").css({position: 'absolute'})
	$(".side p>a[href^='/r/']:only-child").each(function(i){
		var d = i*50;
		$(this).delay(d).animate({top: positions[i][0], left: positions[i][1]}, function(){
			if(i == $(".side p>a[href^='/r/']:only-child").length-1)
				$("#siteTable").dequeue();
		});
	})
}).delay(d)
.queue(function(){$(".side p>a[href^='/r/']:only-child").last().parent().next().css({marginTop: "255px", '-webkit-transition': 'all 1s cubic-bezier(0.19, 1, 0.22, 1)'}); $(".side p>a[href^='/r/']:only-child").css({lineHeight: '2'}); dq();}).delay(d)

.queue(function(){$(".side p>a[href^='/r/']:only-child").css({width: '50%', float: 'left', position: 'static'}); $(".side hr").css({clear: 'both'}); $(".side p>a[href^='/r/']:only-child").last().parent().next().css({marginTop: "0"}); dq();}).delay(d)
.queue(function(){$("body").animate({scrollTop: '560'}); dq();}).delay(d)
.queue(function(){$(".md ol, .md ul").css({margin: '10px 0px 10px 20px'}); dq();}).delay(d)
.queue(function(){$("body").animate({scrollTop: '1375'}); dq();}).delay(d)
.queue(function(){$("#ad_main").css({marginLeft: "15px"}); dq();}).delay(d)
.queue(function(){$("body").animate({scrollTop: '0'}); dq();}).delay(d)
.queue(function(){$(".login-form-side").css({margin: '10px 15px'}); $(".login-form-side input[type=text], .login-form-side input[type=password]").css({width: '287px'}); $(".login-required .login").css({marginRight: "141px"}); dq();}).delay(d)
.queue(function(){$("#search input[type=text]").css({width: '288px'}); dq();}).delay(d)
.queue(function(){$(".pagename a").fadeOut(500); dq();}).delay(d)
.queue(function(){$(".titlebox h1 a").css({fontFamily: 'pacifico', fontWeight: 'normal'}); dq();}).delay(d)
.queue(function(){$("#search input[type=text], #header-bottom-right").css({marginTop: '+=15'}); dq();}).delay(d)
.queue(function(){$("#header").css({height: '-=117'}); $(".group1, .group2").css({top: '-=117'}); dq();}).delay(d)
.queue(function(){$(".side").css({marginTop: '+=88'}); $("#header-bottom-right").css({top: '+=88'}); dq();}).delay(d)
.queue(function(){$(".titlebox h1 a").css({fontSize: '51px'}); dq();}).delay(d)
.queue(function(){$(".titlebox h1 a").css({top: '95px'}); dq();}).delay(d)
.queue(function(){$(".side").css({paddingTop: '0'}); $("#search input[type=text]").css({marginTop: '0'}); $("#search input[type=text]").parent().parent().css({marginTop: '0'}); $("#header-bottom-right").css({top: '-=64'}); dq();}).delay(d)
.queue(function(){$("#search input[type=text]").css({paddingTop: '10px', paddingBottom: '10px', backgroundPosition: '-129px 5px'}); $("#header-bottom-right").css({top: '+=10'}); dq();}).delay(d)
.queue(function(){$("#search input[type=text]").css({borderRadius: '0', border: '0 none', width: '290px', borderBottom: '1px solid #ccc'}); $("body").css({backgroundImage: 'url(http://placehold.it/300x100/e5e5e5/e5e5e5.png&text=123)', backgroundSize: 'cover'}); dq();}).delay(d)
.queue(function(){$("body").css({backgroundImage: 'url(http://localhost/dfwts/assets/laptopbg.png)'}); $("body").css({backgroundSize: "cover"}); $("body").css({backgroundAttachment: "fixed"}); dq();}).delay(d)
.queue(function(){$(".titlebox h1 a").css({color: 'white'}); dq();}).delay(d)
.queue(function(){$(".titlebox h1 a").css({color: 'white'}); dq();}).delay(d)
.queue(function(){$(".tabmenu li a").css({color: 'white'}); dq();}).delay(d)
.queue(function(){$(".titlebox h6:nth-of-type(1), .titlebox h6:nth-of-type(1) a").css({color: 'white'}); dq();}).delay(d)
.queue(function(){$("#siteTable").css({borderTop: '5px solid hsl(40, 70%, 70%)'}); dq();}).delay(d)
.queue(function(){$(".tabmenu li.selected a").css({borderBottom: '5px solid hsl(40, 70%, 30%)'}); dq();}).delay(d)
.queue(function(){$("#header .tabmenu").css({top: '64px'}); dq();}).delay(d)
//.queue(function(){$(".titlebox h6:nth-of-type(1)").css({top: '75px'}); dq();}).delay(d)
.queue(function(){$("body").css({backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://localhost/dfwts/assets/laptopbg.png)'});  dq();}).delay(d)
.queue(function(){$("body").animate({scrollTop: '2315'}); dq();}).delay(d)

.queue(function(){$(".nav-buttons").css({background: 'rgba(255, 255, 255, 0.9)'}); dq();}).delay(d)
.queue(function(){$(".nav-buttons .nextprev").css({background: 'transparent', border: '0 none'}); dq();}).delay(d)
.queue(function(){$(".nav-buttons .nextprev").css({fontSize: '0px', lineHeight: '1', margin: '0'}); $(".nav-buttons .nextprev a").css({fontSize: '14px', lineHeight: '35px'}); $(".nav-buttons").css({overflow: 'hidden'}); dq();}).delay(d)
.queue(function(){$(".nextprev").css({'-webkit-transform': 'translateX(500px)'}); dq();}).delay(d)
.queue(function(){$(".nextprev").addClass("notransition notransform").css({width: '50%', display: 'block', float: 'right', borderLeft: '1px solid #ddd'}); dq();}).delay(d)
.queue(function(){$(".nextprev a").css({color: 'rgba(0, 0, 0, 0.5)'}); dq();}).delay(d)

.queue(function(){$(".footer a").css({color: 'white'}); dq();}).delay(d)
.queue(function(){$(".footer li.title").css({color: 'wheat'}); dq();}).delay(d)
.queue(function(){$(".footer li.title").css({textTransform: 'uppercase'}); dq();}).delay(d)
.queue(function(){$(".footer li.title").css({marginBottom: '15px'}); dq();}).delay(d)
.queue(function(){$(".footer li.title").css({fontSize: '14px', fontWeight: 'bold'}); dq();}).delay(d)
.queue(function(){$(".footer .col").css({border: '0 none'}); dq();}).delay(d)
.queue(function(){$(".bottommenu").css({color: 'white'}); $(".bottommenu a").css({color: 'white'}); dq();}).delay(d)
.queue(function(){$(".footer a").css({lineHeight: '1.75'}); $(".footer .col").css({height: 'auto'}); $("body").animate({scrollTop: '2600'}); dq();}).delay(d)
.queue(function(){$(".footer-parent").css({marginTop: '30px'}); $(".footer .col").css({marginTop: '0'}); dq();}).delay(d)
.queue(function(){$(".footer .col").css({marginRight: '100px', '-webkit-transform': '', padding: '0'}); $(".footer").css({'-webkit-transform': 'translateX(-148px)'}); dq();}).delay(d)






.queue(function(){$(".footer-parent").css({textAlign: 'left'}); $(".footer").css({margin: '0', padding: '0', marginLeft: '159px'}); $(".bottommenu").css({marginLeft: '159px'}); $(".footer .col").css({padding: '0', marginRight: '100px', height: 'auto'}); $(".footer").css({marginBottom: '20px'}); dq();}).delay(d)

.queue(function(){$("body").animate({scrollTop: '0'}); dq();}).delay(d)
.queue(function(){$(".side").css({background: "rgba(255, 255, 255, 0.9)", boxShadow: 'none'}); dq();}).delay(d)

.queue(function(){$("#search input[type=text], .login-form-side input[type=text], .login-form-side input[type=password]").css({background: 'rgba(0, 0, 0, 0.1)'}); dq();}).delay(d)
.queue(function(){$("body").animate({scrollTop: '375'}); dq();}).delay(d)
.queue(function(){$(".md p").css({fontSize: '13px'}); $(".md p").css({lineHeight: '1.5'}); dq();}).delay(d)















$(".footer li.title").css({fontFamily: 'Montserrat'})







