
$("head").append("<style>.footer:before {display: none;} .transition {-webkit-transition: all "+t+"s cubic-bezier(0.19, 1, 0.22, 1);}</style>");
$("head").append("<style>#header:after {display: none; } .fancy-toggle-button .add:after {content: '';}</style>");

$("#header-img, #header .tabmenu, .titlebox h6:nth-of-type(1)").addClass("group1");
$(".titlebox h1 a, #header-bottom-right").addClass("group2");

$("#header").css({backgroundSize: 'auto 217px'});

$("html").css({'-webkit-transition': 'all 0.5s'}).css('width', "1348px");
$("#siteTable_organic").parent().remove(); $(".sponsorshipbox, .infobar.welcome").remove();
$("#siteTable").css({width: '1013px'}); $(".link").css({marginRight: '0'}); $(".titlebox h6:nth-of-type(1)").css({right: '337px'});
$(".titlebox h6:nth-of-type(2)").css("opacity", "0");
$(".domain").css({position: 'relative', top: '-1px'});
$(".edited-timestamp").hide();
$(".debuginfo").css({opacity: '0'});
$("#siteTable a.author").css({display: 'inline-block'});
$(".link .flair").hide();
//$(".titlebox h6:nth-of-type(1)").remove();

$(".tagline").each(function(){ $(this).html($(this).html().replace('submitted ', "<span class='bingo'>submitted </span>")); })
$(".bingo").css({display: 'inline-block'}).css({marginRight: '3px'}).addClass("transition").each(function(){ $(this).css({width: $(this).width()}) });


$("#search input[type=text]").css({backgroundImage: 'none'});
$("#search").prepend("<i class='fa fa-search search-icon'></i>").css({position: 'relative'});
$(".search-icon").css({position: 'absolute', top: '11px', left: '17px', fontSize: '13px', lineHeight: '43px', color: '#5787e1'});

$("#ad_main").css({height: "250px"});
for(var i = 0; i <= 10; i++)
	$("body").append("<i class='rect hidden rect1 r"+i+"'></i>");
for(var i = 11; i <= 11; i++)
	$("body").append("<i class='rect hidden rect2 r"+i+"'></i>");
for(var i = 12; i <= 12; i++)
	$("body").append("<i class='rect hidden rect3 r"+i+"'></i>");

$("#siteTable, .link, .thumbnail, body, .link .midcol, .link .title, .entry, .titlebox h6:nth-of-type(1), .titlebox h6:nth-of-type(1) a, #header .tabmenu, .login-form-side, #header-bottom-right, #header-bottom-right .user, #header-bottom-right .user .seperator, #header-img, #header:after, .content, #header, body, .side, .side p>a[href^='/r/']:only-child, .md ol, .md ul, #ad_main, .titlebox h1 a, .login-form-side, .login-form-side input[type=text], .login-form-side input[type=password], #search input[type=text], .nav-buttons .nextprev a, .nav-buttons .nextprev, .nav-buttons, .footer a, .footer li.title, .footer .col, .bottommenu, .footer-parent, .md p, .modal, .modal:before, .side p>strong, .morelink a, .tabmenu li a, #header-bottom-right .separator, #header-bottom-right a, .login-required .login, .sidecontentbox li, .sidecontentbox, .sidecontentbox a, .sidecontentbox .flair, .domain, .link .tagline, .link .entry li .comments, .link .flat-list, .login-form .btn, .login-form-side #remember-me, .search-icon, .link .flair, .expando-button, .rect")
.css({'-webkit-transition': 'all '+t+'s cubic-bezier(0.19, 1, 0.22, 1)'});

$("#remember-me, .link .title").css({'-webkit-transition-duration': '0.35s', '-webkit-transition-timing-function': ''})

document.getElementById('wm-ipp').style.display='none';













$("body").append("<div id='wt_intro'><h1>Redesigning Reddit</h1><h2>For fun and practice</h2></div>");
$("#wt_intro").css({textAlign: 'center', marginBottom: '340px', marginTop: '400px'});
$("#wt_intro h1").css({fontFamily: 'Raleway', fontWeight: 'bold', fontSize: '75px', lineHeight: '1.5'});
$("#wt_intro h2").css({fontFamily: 'Raleway', fontSize: '28px', fontWeight: '300', color: '#666'});


