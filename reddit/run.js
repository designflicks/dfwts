

//http://web.archive.org/web/20140724052024/http://www.reddit.com/r/web_design

$(document).ready(function(){
	d = 0; t = '0';
	
	up();
	$("body").css({'-webkit-transform': 'translateY(-2925px)'});
	var h = $("html");
	$("html").delay(5000)
		.queue(function(){ 
			$("body").css({'-webkit-transform': 'translateY(0)', '-webkit-transition': 'all 15s cubic-bezier(0.785, 0.135, 0.15, 0.86)'}); 
			$("#wt_intro").fadeOut(5000);
			 dq(); 
		}).delay(d*20)
		.queue(function(){ comment("Let's start with the main listing.", 352, 790); })
		.queue(function(){ $(".side").fadeTo(500, 0.05); $("#header").fadeTo(500, 0.05, function(){ dq(); }); }).delay(d)

//	d = 1000; t = '1';	$("html")
		.queue(function(){ $(".id-t3_2bhtxx").css({background: 'hsl(40, 100%, 95%)'}); comment("If we take this post as an example, reading 20-25\nwords per line can be irritating or hard to focus on.", 581, 651);  })
		.queue(function(){ $(".id-t3_2bhtxx").css({background: 'white'}); comment("It's just too wide. So let's narrow it down.", 352, 720);  })
		.queue(function(){ $("#siteTable").css({width: '700px'}); dq(); }).delay(d)
		.queue(function(){ $(".content").css({marginLeft: '0'}); $("#siteTable").css({marginLeft: '159px'}); dq();}).delay(d)
		.queue(function(){ comment("Let's remove the space between every item to make the entire listing look like a single block.", 280, 178); /*$(".sitetable").css({background: 'rgba(200, 0, 0, 0.5)'});*/})
		.queue(function(){$(".link").css({marginBottom: '0'}); $(".link").css({borderRadius: '0'}); $(".link").css({borderBottomWidth: '0'});  dq();}).delay(d)
		.queue(function(){$(".link").css({border: '0 none', borderBottom: '1px solid #ccc'}); dq();}).delay(d)
		.queue(function(){ comment("Breathing space for every list item.", 280, 178); })
		.queue(function(){$(".link").css({padding: '15px'}); dq();}).delay(d)
		.queue(function(){$("body").animate({scrollTop: '530'}); dq();}).delay(d)	
		.queue(function(){ comment("The spacing on the\nleft and right of the\nvoting controls is\nunequal.", 725, 10); })
		.queue(function(){$(".link .midcol").css({marginLeft: '0', marginRight: '14px'}); dq();}).delay(d)

		.queue(function(){$("body").animate({scrollTop: '475'}); dq();}).delay(d)	
		.queue(function(){ comment("A comment icon is\nbeing repeated as\nthe thumbnail for\ntext-posts.", 610, 13); })
		.queue(function(){ comment("We can remove that.\nSo,\nThumbnail: URL post\nNo Thumb: Text post", 610, 5); })
		.queue(function(){$(".thumbnail.self").css({opacity: '0'}); dq();}).delay(d)
		.queue(function(){$(".thumbnail.self").css({width: '0', padding: '0', margin: '0'}).next().css({paddingLeft: '0'}); dq();}).delay(d)
		.queue(function(){$(".thumbnail.self").css({display: 'none'}); dq();}).delay(0)

		.queue(function(){$("body").animate({scrollTop: '210'}); dq();}).delay(d)	
		.queue(function(){ comment("The vertical flow is\nnow broken because\nof the thumbnails\nbeing removed from\nsome posts.", 460, 6); })
		.queue(function(){ comment("We can try to move\nthe remaining\nthumbnails to the\nright to restore\nthe vertical flow.", 460, 10); })
		.queue(function(){$(".thumbnail").css({'-webkit-transform': 'translateX(557px)'}); dq();}).delay(d)
		.queue(function(){$(".thumbnail:visible").next().css({'-webkit-transform': 'translateX(-75px)', paddingLeft: '0'}); dq();}).delay(d)
		.queue(function(){$(".thumbnail").addClass("notransition notransform").css({float: 'right', marginRight: '0'}).next().addClass("notransition notransform"); dq();}).delay(0)

		.queue(function(){ $(".side, #header").fadeTo(500, 1); dq();}).delay(d)	
		.queue(function(){$("body").animate({scrollTop: '0'}); dq();}).delay(d)	
		.queue(function(){ comment("Let's reduce the prominence of this bookmark link.", 261, 355); })
		.queue(function(){ comment("A huge box to encapsulate a single link doesn't look good.", 261, 355); })
		.queue(function(){$(".titlebox h6:nth-of-type(1)").css({border: '0 none', background: 'transparent'}); dq();}).delay(d)
		.queue(function(){ comment("Let's align this bookmark link with the main listing below.", 261, 355); })
		.queue(function(){$(".titlebox h6:nth-of-type(1)").css({top: '275px', padding: '0', left: '159px'}); $("#header .tabmenu").css({background: 'transparent', border: '0 none'}); dq();}).delay(d)

		.queue(function(){ comment("The links for login/register/language can\nbe clubbed with the login form below.", 135, 1056, 'white'); })
		.queue(function(){$(".login-form-side").css({paddingTop: '15px'}); $("#header-bottom-right").css({background: 'transparent'}); dq();}).delay(d)
		.queue(function(){$("#header-bottom-right").css({top: '330px'}); dq();}).delay(d)

		.queue(function(){ comment("Let's reduce the text of\nthe links to an absolute\nminimum to keep it\nto-the-point.", 315, 869); })
		.queue(function(){$("#header-bottom-right .user").css({fontSize: '0', color: 'transparent'}); dq();}).delay(d)
		.queue(function(){$("#header-bottom-right .login-required").html("<span class='login'>Login</span> <span class='register'>Register</span>"); dq();}).delay(d)
		.queue(function(){$("#header-bottom-right .separator").css({fontSize: '16px'}); dq();}).delay(d)
		.queue(function(){ comment("The login link can be\nconverted to a heading\nfor the form below.", 330, 871); })
		.queue(function(){ $("#header-bottom-right").css({overflow: 'visible'}); $(".login-required .login").css({'-webkit-transition': 'all 1s cubic-bezier(0.19, 1, 0.22, 1)', display: 'inline-block'}).css("-webkit-transform", "translateX(-116px)"); dq();}).delay(d)

		.queue(function(){ $("#header .tabmenu").css({background: 'hsl(40, 100%, 95%)'}); comment("This navbar is mostly empty. So let's try to get rid of it.", 190, 915);  })

		.queue(function(){ $("#header .tabmenu").css({background: 'transparent'}); comment("Let's club the Reddit alien logo with the main listing.", 190, 45); })
		.queue(function(){ $("#header-img").css({zIndex: '0', top: '311px', left: '124px'}); dq();}).delay(d)

		.queue(function(){ comment("Let's club the navigation with the main listing\nbelow and remove the white bar underneath.", 220, 515); })
		.queue(function(){$("#header .tabmenu").css({paddingLeft: '190px', top: '264px'}); dq();}).delay(d)
		.queue(function(){$("head").append("<style>#header:after {opacity: 0; -webkit-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1); }</style>"); dq();}).delay(d)

		.queue(function(){ comment("Let's remove the header background.\nWe will try something different.", 150, 540, 'white'); })

		.queue(function(){$("#header").css({backgroundColor: 'transparent', backgroundImage: 'url(http://placehold.it/300x100/e5e5e5/e5e5e5.png&text=123)', backgroundSize: 'cover'}); dq();}).delay(d)

		.queue(function(){ comment("Let's align things properly.", 200, 400); })
		.queue(function(){$(".content").css({marginTop: '0'}); $("#header-img").css({top: '225px'}); $("#header .tabmenu").css({top: '172px'}); $(".titlebox h6:nth-of-type(1)").css({top: '187px'}); $("#header").css({background: 'transparent'}); dq();}).delay(d)
		//.queue(function(){$("body").css({backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://localhost/dfwts/assets/laptopbg.png)', backgroundSize: "cover", backgroundAttachment: "fixed"}); dq();}).delay(d)
		.queue(function(){$(".side").css({marginRight: "+=159", marginTop: "-=30"}); $("#header-bottom-right").css({right: '+=159', marginTop: "-=30"}); $(".titlebox h1 a").css({marginLeft: '0', top: '228px'}); dq();}).delay(d*1.5)

		.queue(function(){ $("#header").children().not("#header-bottom-right").addClass('faded'); $("#siteTable, .titlebox h6:nth-of-type(1)").addClass('faded'); dq();  }).delay(d)
		.queue(function(){ comment("Let's remove the rounded corners\nand shadow from the sidebar.", 160, 910); })
		.queue(function(){$(".side").css({borderRadius: '0', boxShadow: 'none'}); dq();}).delay(d)

		h.queue(function(){$("body").animate({scrollTop: '370'}); dq();}).delay(d)


		.queue(function(){ comment("We can increase the width\nof the sidebar a bit to fit in\nmore text per line.", 696, 680); })
		.queue(function(){$(".side").css({width: '330px', marginRight: "-=30"}); $("#header-bottom-right").css({right: '-=30'}); $(".login-required .login").css("margin-right", "+=30"); dq();}).delay(d)

		.queue(function(){ comment("We can further reduce\nthe margin on the left of the\nposting guidelines section.", 806, 680); })
		.queue(function(){ 
			$(".md ol li").each(function(zz){
				zzd = zz*100;
				$(this).delay(zzd).animate({marginLeft: '-20px', marginRight: '-15px'}, function(){
					if(zz == $(".md ol li").length-1)
						dq();
				});
			});
		}).delay(d)

		h.queue(function(){$("body").animate({scrollTop: '0'}); dq();}).delay(d)
		.queue(function(){ comment("Layout repairing.", 335, 760); })
		.queue(function(){$(".login-form-side").css({margin: '10px 15px'}); $(".login-form-side input[type=text], .login-form-side input[type=password]").css({width: '287px'}); $(".login-required .login").css({'-webkit-transform': "translateX(-111px)"}); dq();}).delay(d)
		.queue(function(){$("#search input[type=text]").css({width: '288px'}); dq();}).delay(d)
		.queue(function(){$(".login-form-side input[type=text], .login-form-side input[type=password]").css({margin: '10px 0 0 0'}); dq();}).delay(d)

		//$(".login-form").css({paddingBottom: '5px'});
		//fontFamily: 'Montserrat', 
		.queue(function(){$(".login-form .btn").css({padding: '0 8px 1px 8px', fontSize: '11px', fontWeight: 'normal', lineHeight: '22px', borderRadius: '0', marginRight: '-3px'}); dq();}).delay(d)
		.queue(function(){$(".login-form-side #remember-me").css({lineHeight: '28px', marginLeft: '0'}); dq();}).delay(d*4)



		// .queue(function(){$(".md ol, .md ul").css({margin: '10px 0px 10px 20px'}); dq();}).delay(d)

		h.queue(function(){ $("body").animate({scrollTop: '425'}); dq();}).delay(d)
		.queue(function(){ comment("The font size of the general\ntext in the sidebar is pretty\nhigh. Let's reduce it a bit.", 700, 680); })
		.queue(function(){ $(".md p").css({fontSize: '13px', lineHeight: '1.5'}); dq();}).delay(d*3)
		
		


		.queue(function(){ $("body").animate({scrollTop: '1050'}); dq();}).delay(d)
		.queue(function(){ comment("Let's convert this long list\nof links to a 2 column layout.", 1300, 670); })

		//.queue(function(){$(".side hr").css({clear: 'both'}); dq();})


		.queue(function(){
			var positions = [[1364, 874], [1364, 1024], [1390, 874], [1390, 1024], [1416, 874], [1416, 1024], [1442, 874], [1442, 1024], [1468, 874], [1468, 1024], [1494, 874], [1494, 1024], [1520, 874], [1520, 1024], [1546, 874]];
			sidelinks = $(".side .md>p>a[href^='/web/20140724052024/http://www.reddit.com/r/']:only-child")
			sidelinks.last().parent().next().css("marginTop", "413px");
			sidelinks.each(function(){
				$(this).css({top: $(this).position().top-2, left: $(this).position().left})
			})
			sidelinks.css({position: 'absolute'})
			sidelinks.each(function(ii){
				var iid = ii*d/20;
				$(this).delay(iid).animate({top: positions[ii][0]-196, left: positions[ii][1]+20+12}, function(){
					if(ii == sidelinks.length-1)
						dq();
				});
			})
		}).delay(d)
		//sidelinks.css({lineHeight: '2'});
		h.queue(function(){sidelinks.last().parent().next().css({marginTop: "225px", '-webkit-transition': 'all 1s cubic-bezier(0.19, 1, 0.22, 1)'}); dq();}).delay(d*3)

		//.queue(function(){sidelinks.css({width: '50%', float: 'left', position: 'static'}); $(".side hr").css({clear: 'both'}); sidelinks.last().parent().next().css({marginTop: "0"}); dq();}).delay(d)

		//.queue(function(){$("body").animate({scrollTop: '560'}); dq();}).delay(d)
		h.queue(function(){$("body").animate({scrollTop: '1375'}); dq();}).delay(d)
		.queue(function(){$("#ad_main").css({marginLeft: "15px"}); dq();}).delay(d)



	
		
		.queue(function(){ comment("The word \"moderator\" is being repeated\ntoo much. We can simplify things a bit.", 1875, 585); }).delay(d)
		.queue(function(){ comment("We can remove the moderator\nlabels and mark \"AutoModerator\"\nas a bot using simple text.", 1875, 635); }).delay(d)
		.queue(function(){ 
			$(".sidecontentbox li .flair").each(function(i){
				$(this).delay(i*50).animate({opacity: '0'}, {
					duration: 50, 
					step: function(n) {
						var s = 0.75 + 0.25*n;
						$(this).css({'-webkit-transform': 'scale('+s+')'});
					}
				});
				if(i == $(".sidecontentbox li .flair").length-1)
					dq();
			}); 
		}).delay(d)
		h.queue(function(){ $(".sidecontentbox li").last().find("a").html("AutoModerator(BOT)"); dq(); }).delay(d)
		//.queue(function(){ $(".sidecontentbox li").css({marginBottom: '8px'}); dq(); }).delay(d)
		.queue(function(){ comment("Let's convert this list also\nto a 2 column layout.", 1875, 680); }).delay(d)
		.queue(function(){ 
			$(".sidecontentbox").css({height: '258px'});

			var positions = [[1860, 874], [1860, 1029], [1882, 874], [1882, 1029], [1904, 874], [1904, 1029], [1926, 874], [1926, 1029], [1948, 874], [1948, 1029]];
			modlinks = $(".sidecontentbox li")
			modlinks.each(function(){
				$(this).css({top: $(this).position().top, left: $(this).position().left})
			})
			modlinks.css({position: 'absolute'})
			modlinks.each(function(gg){
				var ggd = gg*d/20;
				$(this).delay(ggd).animate({top: positions[gg][0]-10, left: positions[gg][1]+20+12}, function(){
					if(gg == modlinks.length-1)
						dq();
				});
			})
		}).delay(d)
		.queue(function(){ comment("The message button is too large\nfor a feature not frequently used.", 1775, 635); }).delay(d)
		.queue(function(){ $(".sidecontentbox a.helplink").html("Send Message"); dq(); }).delay(d)
		.queue(function(){ $(".sidecontentbox").css({margin: '0 15px 15px 15px', padding: '0'}); $(".sidecontentbox a.helplink").css({textShadow: 'none', border: '0 none', borderRadius: '2px', margin: '0', fontSize: '12px', lineHeight: '23px'}); $(".sidecontentbox a.helplink").css({width: '35%'}); $(".sidecontentbox .title h1").css({paddingTop: '4px', display: 'block'}); dq(); }).delay(d)
		.queue(function(){ 
			modlinks.each(function(gg){
				var ggd = gg*d/20;
				$(this).delay(ggd).animate({top: '-=40'}, function(){
					if(gg == modlinks.length-1)
					{
						$(".sidecontentbox .content a").css({lineHeight: '19px'}); dq();
					}
				});
			}); 
		}).delay(d)

		.queue(function(){ $(".sidecontentbox").css({height: '150px', padding: '0'}); dq(); }).delay(d)
		.queue(function(){ $(".sidecontentbox").css({borderBottom: '1px solid #d9d9d9'}); dq(); }).delay(d)



		//fade back non sidebar elements
		.queue(function(){ $("#header").children().not("#header-bottom-right").removeClass('faded'); $("#siteTable, .titlebox h6:nth-of-type(1)").removeClass('faded'); dq();}).delay(d*3) 
		.queue(function(){$("body").animate({scrollTop: '0'}); dq();}).delay(d)

		.queue(function(){ comment("Let's remove the page name in the header area and\nuse the one available at the top of the sidebar.", 80, 790);}).delay(d)
		.queue(function(){ comment("This will make the header totally empty and help\nus pull the main listing up so that more content\nis readable above the fold(without scrolling).", 71, 790);}).delay(d)
		.queue(function(){$(".pagename a").fadeOut(500); dq();}).delay(d) //hide the main logo
		.queue(function(){$("#header").css({height: '-=117'}); $(".group1, .group2").css({top: '-=117'}); sidelinks.css({top: '-=117'}); modlinks.css({top: '-=117'}); dq();}).delay(d)

		.queue(function(){comment("Let's try a cursive/handwriting\nstyle font(Pacifico) for the page name.", 51, 890); }).delay(d) 
		.queue(function(){comment("It will give a quick customized/artistic feel\nwithout investing much time in creating a logo.", 51, 890); }).delay(d) 
		.queue(function(){$(".titlebox h1 a").css({fontFamily: 'pacifico', fontWeight: 'normal', left: '906px'}); dq();}).delay(d)
		.queue(function(){$("#search input[type=text], #header-bottom-right").css({marginTop: '+=15'}); $(".search-icon").css({top: '+=15'}); sidelinks.css({top: '+=15'}); modlinks.css({top: '+=15'}); dq();}).delay(d)
		.queue(function(){comment("We can also try to fuse the main listing and the sidebar together.", 35, 450); }).delay(d) 
		.queue(function(){$(".side").css({marginRight: "+=26"}); $("#header-bottom-right").css({right: '+=26'}); sidelinks.css({left: '-=26'}); modlinks.css({left: '-=26'}); $(".titlebox h1 a").css({left: '-=26'}); $("#siteTable").css({marginLeft: '+=6'}); $("#header-img, .titlebox h6:nth-of-type(1)").css({left: '+=6'}); $(".tabmenu").css({paddingLeft: '+=6'}); dq();}).delay(d)

		.queue(function(){comment("Adding shadow to the main listing will separate it from the sidebar.", 35, 450); }).delay(d) 
		.queue(function(){$("#siteTable").css({position: 'relative', boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 0px 15px 0px'/*, zIndex: '99'*/}); dq();}).delay(d)
	
		.queue(function(){comment("We can push the sidebar downwards\nto create a break in the horizontal\ncontinuation of the layout.", 35, 880); }).delay(d) 
		.queue(function(){comment("This will enhance the visual separation\nof the main listing and the sidebar.", 35, 880); }).delay(d) 
		.queue(function(){$(".side").css({marginTop: '+=88'}); $("#header-bottom-right, .titlebox h1 a").css({top: '+=88'}); sidelinks.css({top: '+=88'}); modlinks.css({top: '+=88'}); dq();}).delay(d)
		
		.queue(function(){comment("We can use this area above the sidebar\nto have a large and prominent page name.", 122, 880); }).delay(d) 
		.queue(function(){$(".titlebox h1 a").css({top: '95px'}); dq();}).delay(d)
		.queue(function(){$(".titlebox h1 a").css({fontSize: '51px'}); dq();}).delay(d)
		.queue(function(){$(".side").css({paddingTop: '0'}); $("#search input[type=text]").css({marginTop: '0'}); $("#search input[type=text]").parent().parent().css({marginTop: '0'}); $(".search-icon").css({top: '-=32'}); $("#header-bottom-right").css({top: '-=64'}); sidelinks.css({top: '-=64'}); modlinks.css({top: '-=64'}); dq();}).delay(d)

		.queue(function(){comment("Let's increase the\nheight of the search\ninput else it looks\nweaker than the\nlogin inputs.", 192, 1200); }).delay(d)
		.queue(function(){comment("And also remove the\nborder from the top.\nThere is nothing\nabove it(in the\nsidebar) which needs\nto be separated using\na border.", 192, 1200); }).delay(d)
		.queue(function(){$("#search input[type=text]").css({paddingTop: '11px', paddingBottom: '9px', paddingLeft: '43px', borderRadius: '0', border: '0 none', width: '287px', borderBottom: '1px solid #ccc'}); $("#header-bottom-right").css({top: '+=10'}); $("body").css({backgroundImage: 'url(http://placehold.it/300x100/e5e5e5/e5e5e5.png&text=123)', backgroundSize: 'cover'}); $(".search-icon").css({top: '-2px', left: '15px', fontSize: '16px'}); sidelinks.css({top: '+=9'}); modlinks.css({top: '+=9'}); dq();}).delay(d)

		.queue(function(){
			$("body").css({'-webkit-transition': 'all 1s cubic-bezier(0.19, 1, 0.22, 1)'}); 
			comment("Let's add a nice blurred background which has web design\nrelated items such as a laptop, books, magazines, etc.", 27, 475); 
		}).delay(d)
		.queue(function(){$("body").css({backgroundImage: 'url(http://localhost/dfwts/assets/laptopbg.png)'}); $("body").css({backgroundSize: "cover"}); $("body").css({backgroundAttachment: "fixed"}); dq();}).delay(d)

		.queue(function(){comment("Let's fix the colors of the pagename, bookmark,\nand navigation to make them clearly visible.", 60, 880, 'white'); }).delay(d)
		.queue(function(){$(".titlebox h1 a").css({color: 'white'}); dq();}).delay(d)
		.queue(function(){$(".tabmenu li a").css({color: 'white'}); dq();}).delay(d)
		.queue(function(){$(".titlebox h6:nth-of-type(1), .titlebox h6:nth-of-type(1) a").css({color: 'white'}); dq();}).delay(d)

		.queue(function(){comment("Let's add a prominent border at the top of\nthe main listing to give it a strong start.", 60, 880, 'white'); }).delay(d)
		.queue(function(){$("#siteTable").css({borderTop: '5px solid hsl(40, 70%, 70%)'}); dq();}).delay(d)
		.queue(function(){comment("The color of the border is picked\nfrom the background image itself.", 60, 880, 'white'); }).delay(d)
		//.queue(function(){comment("The border below the active nav link can be\nfused with the main listing border we just added.", 50, 880, 'white'); }).delay(d)
		.queue(function(){comment("The navigation can be fused\nwith the border we just added.", 50, 880, 'white'); }).delay(d)
		.queue(function(){$("#header .tabmenu").css({top: '64px'}); dq();}).delay(d)
		.queue(function(){$(".tabmenu li.selected a").css({borderBottom: '5px solid hsl(40, 70%, 30%)'}); dq();}).delay(d)
		.queue(function(){$(".titlebox h6:nth-of-type(1)").css({top: '75px'}); dq();}).delay(d)




		.queue(function(){ comment("The bookmark and nav links are not clearly visible\ndue to the brightness of the background image.", 60, 880, 'white');}).delay(d)
		.queue(function(){ comment("We can make the background image\na bit darker to help with this issue.", 60, 880, 'white');}).delay(d)
		.queue(function(){$("body").css({backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://localhost/dfwts/assets/laptopbg.png)'});  dq();}).delay(d*3)


		.queue(function(){$("body").animate({scrollTop: '2365'}, d*3); dq();}).delay(d*5)

		.queue(function(){ comment("Let's make the pagination links a part of the main listing itself.", 2476, 405, 'white'); }).delay(d)
		.queue(function(){ comment("It will also help us give the main listing a footerish end.", 2476, 457, 'white'); }).delay(d)

		.queue(function(){ $(".nav-buttons").css({background: 'rgba(255, 255, 255, 0.9)'}); dq();}).delay(d)
		.queue(function(){ comment("The background color used is white(90% alpha).", 2523, 340, 'white'); }).delay(d)

		.queue(function(){ comment("Removing the button feel from the \"next\" link.", 2523, 213, 'white'); }).delay(d)
		.queue(function(){ $(".nav-buttons .nextprev").css({background: 'transparent', border: '0 none'}); dq();}).delay(d)
		.queue(function(){ comment("Minimalizing the text.", 2523, 425, 'white'); }).delay(d)
		.queue(function(){ $(".nav-buttons .nextprev").css({fontSize: '0px', lineHeight: '1', margin: '0', color: 'transparent'}); $(".nav-buttons .nextprev a").css({fontSize: '14px', lineHeight: '35px', color: '#5b92fa'}); $(".nav-buttons").css({overflow: 'hidden'}); dq();}).delay(d)

		.queue(function(){ comment("Let's divide the pagination into two halves for the next and previous(when applicable) links.", 2523, 185, 'white'); }).delay(d)
		.queue(function(){$(".nextprev").css({'-webkit-transform': 'translateX(501px)'}); dq();}).delay(d)
		.queue(function(){$(".nextprev").addClass("notransition notransform").css({width: '50%', display: 'block', float: 'right', borderLeft: '1px solid #ddd'}); dq();}).delay(d)


		//.queue(function(){$(".nextprev a").css({color: 'rgba(0, 0, 0, 0.5)'}); dq();}).delay(d)
		.queue(function(){ comment("Let's check the footer now.", 2583, 560, 'white'); }).delay(d)
		.queue(function(){ comment("First of all got to make the links visible.", 2583, 525, 'white'); }).delay(d)
		.queue(function(){ $(".footer a, .bottommenu, .bottommenu a, .footer li.title").css({color: 'white'}); dq();}).delay(d)

		.queue(function(){ comment("We can use a wheat like color(very lighter version\nof the brown background) for the headings\nto separate it from the listing below them.", 2580, 500, 'white'); }).delay(d)
		.queue(function(){ $(".footer li.title").css({color: 'wheat'}); dq();}).delay(d)

		.queue(function(){ comment("Enhancing the prominence and\nseparation of the headings a bit more.", 2585, 530, 'white'); }).delay(d)
		.queue(function(){$(".footer li.title").css({textTransform: 'uppercase'}); dq();}).delay(d)
		.queue(function(){$(".footer li.title").css({marginBottom: '15px'}); dq();}).delay(d)
		.queue(function(){$(".footer li.title").css({fontSize: '14px', fontWeight: 'bold'}); dq();}).delay(d)

		.queue(function(){ $(".footer a").css({lineHeight: '16px'}); comment("Providing some more breathing space to the links.", 2600, 480, 'white'); }).delay(d)
		.queue(function(){$(".footer a").css({lineHeight: '24px'}); $(".footer .col").css({height: 'auto'}); $("body").animate({scrollTop: '2600'}); dq();}).delay(d)


		.queue(function(){ comment("The borders can be removed. We can separate\nthe columns using larger space between them.", 2583, 500, 'white'); }).delay(d)
		.queue(function(){$(".footer .col").css({borderColor: 'transparent'}); dq();}).delay(d)

		.queue(function(){ comment("Let's remove this extra space above the footer.", 2600, 500, 'white'); }).delay(d)
		.queue(function(){ $(".footer-parent").css({marginTop: '30px'}); $(".footer .col").css({marginTop: '0'}); dq();}).delay(d)

		.queue(function(){ comment("Making the footer as wide as the\nmain listing and aligning it accordingly.", 2600, 160, 'white'); }).delay(d)
		//.queue(function(){$(".footer .col").css({marginRight: '100px', '-webkit-transform': '', padding: '0'}); $(".footer").css({'-webkit-transform': 'translateX(-148px)'}); dq();}).delay(d)
		.queue(function(){ 
			//var positions = [157, 335, 508, 722];
			var positions = [157, 330, 498, 707];
			fcols = $(".footer .col")
			fcols.each(function(gg){
				var l = $(this).position().left;
				var move = positions[gg] - l - 15 + 6 + 'px';
				$(this).css({'-webkit-transform': 'translateX('+move+')'});
			})
			dq();
		}).delay(d)






	//.queue(function(){$(".footer-parent").css({textAlign: 'left'}); $(".footer").css({margin: '0', padding: '0', marginLeft: '159px'}); $(".bottommenu").css({marginLeft: '159px'}); $(".footer .col").css({padding: '0', marginRight: '100px', height: 'auto'}); $(".footer").css({marginBottom: '20px'}); dq();}).delay(d)

		.queue(function(){ $(".bottommenu").first().css({"-webkit-transform": "translateX(-243px)"}); $(".bottommenu").last().css({"-webkit-transform": "translateX(-359px)"}); dq();}).delay(d*5)

		.queue(function(){$("body").animate({scrollTop: '0'}, d*3); dq();}).delay(d*5)

		.queue(function(){comment("Let's blend the sidebar a little into the background by\nadding a little transparency(90% alpha) to its white\nso that the main listing is more prominent.", 37, 885, 'white'); }).delay(d)
		.queue(function(){$(".side").css({background: "rgba(255, 255, 255, 0.9)", boxShadow: 'none'}); $("#search input[type=text], .login-form-side input[type=text], .login-form-side input[type=password]").css({backgroundColor: 'transparent'}); dq();}).delay(d)

		.queue(function(){comment("Darkening the text\ninputs for an inset\neffect.", 230, 1206, 'white'); }).delay(d)
		.queue(function(){$("#search input[type=text], .login-form-side input[type=text], .login-form-side input[type=password]").css({backgroundColor: 'rgba(0, 0, 0, 0.1)'}); dq();}).delay(d)
		


		.queue(function(){comment("Let's look into the\ntypography now.", 175, 20, 'white'); }).delay(d)
		.queue(function(){comment("Because now we have a very prominent background we can use a heavy\nfont(Montserrat) for the listing titles and headings to balance things.", 30, 165, 'white'); }).delay(d)

		.queue(function(){$(".link .title").css({fontFamily: 'Montserrat'}); dq();}).delay(0)
		.queue(function(){$(".link .title").css({fontWeight: 'bold'}); dq();}).delay(d)
		.queue(function(){$(".link .title").css({fontSize: '14px'}); dq();}).delay(d)
		.queue(function(){comment("Breathing space for\nthe titles.", 360, 10, 'white'); }).delay(d)
		.queue(function(){$(".link .title").css({lineHeight: '21px'}); /*$(".link .title").css({marginBottom: '3px'});*/ dq();}).delay(d)
		.queue(function(){comment("Let's use dark gray\nfor the colors to keep\nit neutral. The blue\nlooks out of place.", 200, 5, 'white'); }).delay(d)
		.queue(function(){$(".link .title").css({color: '#333'}); dq();}).delay(d)
		.queue(function(){$("head").append("<style>#patch1 {color: #282 !important; }</style>"); comment("We can darken the\ngreen a bit for the\nsticky post.", 150, 15, 'white'); }).delay(d)
		.queue(function(){$(".thing.stickied a.title, .tagline .moderator, .green").attr("id", "patch1"); dq(); }).delay(d)

		.queue(function(){comment("The prominent listing titles now have a very solid shape and\ndon't need a dark border to separate them from each other.", 30, 165, 'white'); }).delay(d)

		.queue(function(){$(".link").css({borderBottom: '1px solid #e6e6e6'}); dq();}).delay(d)

		.queue(function(){comment("Apart from the listing titles let's apply the heavy font to\nthe bookmark link, nav links, sidebar/footer headings, etc.", 30, 430, 'white'); }).delay(d)

		.queue(function(){ 
			//$(".side p>strong, .nextprev a, .sidecontentbox h1, .morelink a, .footer li.title, .footer a").css({backgroundColor: '#16A203'}); 
			$(".rect1").each(function(hh){
				$(this).delay(hh*200).queue(function(){ 
					$(this).removeClass("hidden"); 
					if(hh == $(".rect1").length-1)
						dq();
				})
			})
		}).delay(d)
		.queue(function(){ $(".r0").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d)
		.queue(function(){ $(".titlebox h6:nth-of-type(1) strong").addClass("notransition").css({fontFamily: 'Montserrat', fontSize: '14px'});  dq(); }).delay(d)
		.queue(function(){ $(".r1").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d)
		.queue(function(){ $(".tabmenu li a").css({fontFamily: 'Montserrat', fontSize: '14px', fontWeight: 'bold'}).addClass("notransition"); $("#header .tabmenu").addClass("notransition").css({paddingLeft: '189px', top: '63px'});  dq(); }).delay(d)

		.queue(function(){ $(".r2").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d)
		.queue(function(){ $(".login-required .login").addClass("notransition").css({'-webkit-transform': "translateX(-124px)"}); $("#header-bottom-right a").addClass("notransition").css({fontSize: '12px', fontFamily: 'Montserrat'}); $("#header-bottom-right .separator").addClass("notransition").css({fontSize: '14px'}); dq(); }).delay(d)

		.queue(function(){ $(".r3").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d)
		.queue(function(){ $(".login-form-side .btn").addClass("notransition").css({fontFamily: 'montserrat'}); dq(); }).delay(d)

		.queue(function(){ $(".r4").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d)
		.queue(function(){ $(".morelink a").addClass("notransition").css({fontFamily: 'montserrat', lineHeight: '29px', textShadow: 'none'}); dq(); }).delay(d)

		.queue(function(){ $(".r5").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d)
		.queue(function(){ $(".fancy-toggle-button .active").removeClass("active").css({padding: '1px 8px', backgroundImage: 'none !important', outline: 'none!important', border: '0px', borderRadius: '2px', color: '#fff!important', textTransform: 'capitalize', fontWeight: 'bold', fontSize: '12px', fontFamily: 'arial,sans-serif!important', lineHeight: '26px'}); $(".fancy-toggle-button .add").addClass("notransition").css({display: 'block', fontFamily: 'montserrat', color: 'white', backgroundImage: 'none', lineHeight: '18px', fontSize: '11px', marginTop: '3px'}); $(".fancy-toggle-button").css({marginBottom: '8px'}); dq(); }).delay(d)


		.queue(function(){ $("body").animate({scrollTop: '530'}); dq(); }).delay(d)
		.queue(function(){ $(".r6").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d/4)
		.queue(function(){ $(".r7").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d/4)
		.queue(function(){ $(".r8").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d/4)
		.queue(function(){ $(".r9").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d/4)
		.queue(function(){ $(".r10").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d)

		.queue(function(){ $(".side p>strong").addClass('notransition').css({fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '12px', color: 'rgba(0, 0, 0, 0.75)', background: 'transparent'}); sidelinks.addClass('transition'); dq(); }).delay(d)

		.queue(function(){comment("The sidebar headings\nlook very small(even\ncompared to the text\nbelow them).", 565, 1200, 'white'); }).delay(d)
		.queue(function(){comment("We can increase the\nsize and reduce the\nfont weight to make\nit look larger without\nenhancing its\nprominence.", 565, 1200, 'white'); $(".side p>strong").removeClass('notransition'); }).delay(d)
		.queue(function(){ $(".side p>strong").css({fontWeight: 'normal', fontSize: '16px', display: 'block', clear: 'both'}); sidelinks.css({top: '+=24'}); modlinks.css({top: '+=24'}); dq(); }).delay(d)
		.queue(function(){comment("The headings are\nnow large enough to\nact as separators too.\nSo we can remove\nthe horizontal\ndividers.", 965, 1200, 'white'); }).delay(d)
		.queue(function(){ $("hr").css({borderColor: 'transparent'}); dq(); }).delay(d)
		.queue(function(){ comment("Let's increase the\nspace between the\nsections a bit more\nfor better separation.", 965, 1200, 'white'); }).delay(d)
		.queue(function(){ $(".side p>strong").css({paddingTop: '5px'}); sidelinks.css({top: '+=17'}); modlinks.css({top: '+=25'});  dq(); }).delay(d)

		.queue(function(){ $("body").animate({scrollTop: '1240'}); dq(); }).delay(d)

		.queue(function(){ $(".r11").removeClass("hidden"); dq(); }).delay(d)
		.queue(function(){ comment("Let's change the font\nof this button and\nreduce its size a bit.\nIt looks large.", 1750, 1200, 'white'); }).delay(d)
		.queue(function(){ $(".r11").css({'-webkit-transform': 'scaleX(0)'}); dq(); }).delay(d)
		.queue(function(){ $(".helplink").css({fontFamily: 'Montserrat', padding: '1px 8px', fontWeight: 'bold', fontSize: '11px', lineHeight: '18px', width: '82px'}); dq(); }).delay(d)

		.queue(function(){  comment("Let's remove the\nuppercase styling\nof the \"Moderators\"\nheading and make it\nlook like the other\nheadings above.", 1750, 1200, 'white'); }).delay(d)
		.queue(function(){ $(".sidecontentbox h1").html("Moderators").css({fontFamily: 'Montserrat', fontWeight: 'normal', fontSize: '16px', color: 'rgba(0, 0, 0, 0.75)', paddingTop: '1px'}); modlinks.css({top: '-=2'}); $(".sidecontentbox").css({height: '-=2'}); dq(); }).delay(d*4)





		.queue(function(){ $("body").animate({scrollTop: '2220'}); dq(); }).delay(d)
		.queue(function(){ comment("Let's change the font of the pagination\nlink to Montserrat and turn it gray.", 2560, 875, 'white'); }).delay(d)
		.queue(function(){ $(".nextprev a").css({fontFamily: 'Montserrat', color: 'rgba(0, 0, 0, 0.5)'}); dq(); }).delay(d)

		.queue(function(){ comment("Let's change the headings and links\nin the footer into Montserrat.", 2650, 870, 'white'); }).delay(d)
		.queue(function(){ $(".footer a, .footer li.title").addClass("notransition").css({fontFamily: 'Montserrat'}); $(".footer a").css({fontSize: '12px', lineHeight: '2'}); $(".footer").addClass("notransition").css({padding: '0', margin: '15px 15px 15px 5px'}); dq(); }).delay(d)

		.queue(function(){ comment("Let's increase the font size of the copyright info\nto make it easier to read it but fade it out a bit\nso that it's prominence doesn't increase.", 2820, 750, 'white'); }).delay(d)
		.queue(function(){ $(".bottommenu").addClass("notransition").css({fontSize: "12px", opacity: '0.8', lineHeight: '1.5'}); $(".bottommenu").first().css({"-webkit-transform": "translateX(-197px)"}); $(".bottommenu").last().css({"-webkit-transform": "translateX(-332px)"}); $("body").animate({scrollTop: '2500'});  dq();}).delay(d*4)

		.queue(function(){ $("body").animate({scrollTop: '0'}, d*3); dq(); }).delay(d*5)

		.queue(function(){ comment("Moving towards a brown-orange theme for the design\nthe blue colors look out of place. Let's try to get rid of it.", 28, 165, 'white'); }).delay(d)
		.queue(function(){ comment("The reddit alien icon can be moved near the bookmark link making it look\nas if the alien is saying something important/personal to the user.", 28, 165, 'white'); }).delay(d)
		.queue(function(){ comment("And the alien can be changed to a\nversion which doesn't have the blue.", 28, 165, 'white'); }).delay(d)

		//changing the alien logo
		.queue(function(){ $("#header-img").css({backgroundImage: 'none'}); $("#header-img").attr('src', 'http://localhost/dfwts/reddit/alien5c.png'); dq();}).delay(d)
		.queue(function(){ $("#header-img").css({top: '63px', left: '161px'}); $(".titlebox h6:nth-of-type(1)").css({left: '198px'});  dq();}).delay(d)

// .queue(function(){ $(".titlebox h6:nth-of-type(1)").prepend("<i class='fa fa-bookmark bookmark-icon'></i>"); dq(); }).delay(d)
// .queue(function(){ $(".bookmark-icon").css({marginRight: '8px'}); dq(); }).delay(d)

// .queue(function(){ $(".titlebox h6:nth-of-type(1)").css({left: '169px'}); dq(); }).delay(d)
		.queue(function(){ comment("Let's decrease the space between the navigation links and add some padding\non the right to make space for the bottom border when the last link is active.", 28, 600, 'white'); }).delay(d)
		//
		.queue(function(){$(".tabmenu li a").removeClass('notransition').css({margin:'0 15px'}); $("#header .tabmenu").css({paddingLeft:'195px'}); dq(); }).delay(d)
		.queue(function(){ comment("Padding on the left of the Reddit\nalien to balance things.", 28, 165, 'white'); }).delay(d)
		.queue(function(){ $("#header-img").css({left: '+=8'}); $(".titlebox h6:nth-of-type(1)").css({left: '+=8'});  dq();}).delay(d)


//improving the list items
//$(".domain").css({position: 'relative', top: '-1px'});
	
	//Simplifying the sticky post
	// .queue(function(){ $(".link .flair").css({width: '58px', height: '15px'}); comment("No point mentioning 'Moderator' twice.", 165, 415); }).delay(d)
	// .queue(function(){ $(".link .flair").css({width: '58px', height: '15px'}); $(".stickied-tagline").css({marginRight: '4px', lineHeight: '14px'}); $(".stickied.link .flair").addClass('notransition').fadeTo(2000, 0, function(){
	// 	$(this).animate({width: 0, margin: 0, padding: 0, height: 0}, 5000, function(){
	// 		$(this).css({display: 'none'});
	// 	});
	// }); dq(); }).delay(d)
	//$(".tagline .moderator").removeClass("moderator")//.html("Moderator");
	//$(".tagline .stickied-tagline").removeClass("stickied-tagline");

		.queue(function(){ $(".bingo").css({color: 'red'}); comment("The word \"submitted\" can be removed. It's repetitive. Removing it won't do any bad.", 348, 222); }).delay(d)
		.queue(function(){ $(".bingo").css({opacity: '0', width: '0', margin: '0'}); dq(); }).delay(d)

		.queue(function(){ comment("We can put everything other than the title in a single line.", 538, 335); $(".tagline .stickied-tagline").css({marginRight: '4px'}) }).delay(d)
		//.queue(function(){ $(".link .tagline, .link .entry li .comments").addClass("notransition").css({float: 'left'}).css({fontSize: '11px', lineHeight: '19px', padding: '0', fontWeight: 'normal', marginRight: '3px'}); $(".link .flat-list").addClass("notransition").css({padding: '0'}); dq(); }).delay(d)
		

		.queue(function(){ $(".link .tagline, .link .entry li .comments").css({fontSize: '12px', lineHeight: '19px', padding: '0', fontWeight: 'normal', marginRight: '3px'}); $(".flat-list").css({padding: '0'}); dq(); }).delay(d)
		.queue(function(){ 
			$(".link .flat-list").each(function(){
				$(this).css({clear: 'both', position: 'relative', top: '0', left: '0'}); $(this).prev().css({float: 'left'});
				var fpos = $(this).prev().position(); var spos = $(this).position();
				var x = fpos.left + $(this).prev().outerWidth() - spos.left; var y = fpos.top - spos.top;
				$(this).css({left: '+='+x, top: '+='+y, height: '19px'});
			})
		dq(); }).delay(d)
 		.queue(function(){ $(".link .flat-list").css({height: '0', overflow: 'visible'}); dq(); }).delay(d)

 		.queue(function(){ comment("Let's use dark gray for the links.", 500, 455); }).delay(d)
		.queue(function(){ $(".link .entry li a, .link .tagline a, .tagline .moderator").removeClass("green").css({color: '#666'}); dq(); })
 		
		
		//$(".link .flat-list").addClass("notransition").css({float: 'left', position: 'static', clear: 'none'})
		//$(".link .tagline").css({marginBottom: '-19px'}); $(".link .flat-list").css({top: '+=19'});






// .queue(function(){ $(".r12").removeClass("hidden"); comment("Let's convert the expand icon into normal\ntext to make it look consistent with the\nother links which are not using any icons", 303, 545); }).delay(d)
// .queue(function(){ $(".r12").css({opacity: 0}); dq(); }).delay(d)
// .queue(function(){ $(".expando-button").hide().next().prepend("<a href='#' class='expand-text'>Expand</a>"); $(".expand-text").css({color: '#666', marginRight: '6px'}); dq(); }).delay(d)
	
	
	.queue(function(){ comment("Comments are an important indicator of the popularity\nof a post and users should be able to scan quickly.", 25, 165, 'white'); }).delay(d)
	.queue(function(){ comment("If we move the comments to the left it will have a nice vertical\nflow enabling the user to compare comment counts easily.", 25, 165, 'white'); }).delay(d)

//$(".link .entry li a, .link .tagline a").css({color: '#888'});
	.queue(function(){ 
		$(".flat-list").each(function(){
			// var link = $(this).find(".first").html();
			// $(this).prev().prepend(link);
			// $(this).find(".first").hide();
			var width = $(this).find(".first a").width()+4;
			$(this).css({left: '0'})
				.prev().css({'-webkit-transform': 'translateX('+width+'px)'}).prev(".expando-button").css({'-webkit-transform': 'translateX('+width+'px)'})
		})
		dq();
	}).delay(d)

	.queue(function(){ comment("Let's color the comments info golden/brown to make it more eye-catching.", 500, 222); }).delay(d)
	.queue(function(){ $(".comments").css({color: 'hsl(40, 50%, 35%)'}); dq(); }).delay(d)

	.queue(function(){ comment("Let's move the expand icon to the right. It looks weird in the middle.", 325, 222); }).delay(d)
	.queue(function(){ 
		$(".expando-button").each(function(){
			$(this).css({position: 'relative', top: '0', left: '0'});
			var fpos = $(this).next().position(); var spos = $(this).position();
			var x = fpos.left + $(this).next().outerWidth() - spos.left - 20; var y = fpos.top - spos.top;
			$(this).css({left: '+='+x, top: '+='+y}).next().css({marginLeft: '-21px'});
		})
		dq();
	}).delay(d)

	
	//$(".expand-text").html("<i class='fa fa-plus-square-o'></i>")

	
	.queue(function(){ comment("Let's separate the different sections using bullets.", 325, 222); }).delay(d)
	.queue(function(){ 
		$(".link").not(".stickied").find(".expando-button").next().find(".author").css({marginRight: '3px'}).after("<strong>&bull;</strong>"); 
		$(".tagline .stickied-tagline").css({marginRight: '4px'}).after("<strong>&bull;</strong>");
		$(".tagline").prepend("<strong>&bull;</strong>"); 
		$(".tagline strong").css({fontWeight: 'bold', margin: '0 9px 0 7px', display: 'inline-block', opacity: '0.75', '-webkit-transform': 'translateY(1px)'}); 
		$(".expando-button").each(function(){
			$(this).css({position: 'relative', top: '0', left: '0'});
			var fpos = $(this).next().position(); var spos = $(this).position();
			var x = fpos.left + $(this).next().outerWidth() - spos.left - 20; var y = fpos.top - spos.top;
			$(this).css({left: '+='+x, top: '+='+y}).next().css({marginLeft: '-23px'});
		})
	dq();
	}).delay(d)

	.queue(function(){ comment("The expand icon is very heavy. Let's try something less prominent.", 325, 222); }).delay(d)
	.queue(function(){ $(".expando-button").html("<a href='#' class='expand-text' style='color: inherit;'>Expand<i class='fa fa-angle-down' style='margin-left: 4px;'></i></a>").removeClass("expando-button").css({color: '#999', marginRight: '6px', backgroundImage: 'none', fontSize: '12px', position: 'relative', float: 'left', width: '16px', overflow: 'visible', whiteSpace: 'nowrap', lineHeight: '19px'}); $(".tagline strong").css({margin: '0px 11px 0px 7px'}); dq(); }).delay(d)
	.queue(function(){ comment("Unlike the author name it's not an external link and has an icon, hence it's light gray.", 325, 222); }).delay(d)

	.queue(function(){ comment("The voting controls\nare repeated for\nevery item and are\nvery obvious.", 325, 10, 'white'); }).delay(d)
	.queue(function(){ comment("So let's change the\nicons to something\nlighter.", 325, 10, 'white'); }).delay(d)
	.queue(function(){
		$(".arrow.up").html("<i class='fa fa-angle-up' style='font-size: 21px; line-height: 21px; color: #aaa;'></i>").css({height: '21px', backgroundPosition: '-100000px', marginLeft: '8px'});
		$(".arrow.down").html("<i class='fa fa-angle-down' style='font-size: 21px; line-height: 21px; color: #aaa;'></i>").css({height: '21px', backgroundPosition: '-100000px', marginLeft: '8px'});
		//$(".link .score").css({color: '#666', marginBottom: '-3px', marginTop: '-2px'});
		$(".link .score").css({color: '#666', marginBottom: '-3px'});
		$(".midcol").css({marginBottom: '-2px', marginTop: '-5px'});
	dq(); }).delay(d)
	.queue(function(){ comment("Let's fade out the\nvoting icons a bit\nmore.", 325, 10, 'white'); }).delay(d)
	.queue(function(){ $(".arrow i").css({color: '#ccc'}); dq(); }).delay(d)

	.queue(function(){ comment("Let's color the\nmagnifying glass icon\ndark gray.", 188, 1200, 'white'); }).delay(d)
	.queue(function(){ 
		$(".search-icon").css({color: 'rgba(0, 0, 0, 0.5)'}); dq(); 
		$(".notransition").removeClass('notransition');
		$(".fancy-toggle-button .add, .helplink, .morelink").addClass("transition");
	}).delay(d)
	.queue(function(){ $("body").animate({scrollTop: '300'}); dq(); })
	.queue(function(){ comment("Author name like\nbrown color for\nthe sidebar links.", 588, 1205, 'white'); }).delay(d)
	.queue(function(){  $(".side a").not(".redditname a, .titlebox h6:nth-of-type(1) a, .fancy-toggle-button .add, .helplink").css({color: 'hsl(40, 51%, 35%)'}); dq();  }).delay(d)
	
	.queue(function(){ $("a[href*='web_design/wiki/faq']").addClass("transition").css({position: 'relative', top: '0', left: '0'}); comment("A list with a single item doesn't make sense.", 542, 873); }).delay(d)
	.queue(function(){ $("a[href*='web_design/wiki/faq']").css({top: '-37px', left: '121px', fontWeight: 'normal'}).append("."); dq(); }).delay(d)
	.queue(function(){ 
		$("a[href*='web_design/wiki/faq']").css({top: '-27px', left: '147px'}).parents("ul").css({height: '0', padding: '0', margin: '0', overflow: 'visible'}).next().next().css({marginTop: '-2px'});
		sidelinks.css({top: '-=38'}); modlinks.css({top: '-=39'});
		dq();
	}).delay(d)
	
	.queue(function(){ comment("Green color for all\nthe buttons.", 388, 1205, 'white'); }).delay(d)
	.queue(function(){ 
		$(".morelink, .fancy-toggle-button .add, .helplink").css({background: 'rgba(49, 172, 113, 0.9)', borderColor: 'transparent', boxShadow: 'none'}); dq(); 
	}).delay(d)

	.queue(function(){ $("body").animate({scrollTop: '0'}); dq(); }).delay(d*1.5)
	.queue(function(){ 
		comment("And we are done!", 55, 955, 'white'); 
		$("body").css({'-webkit-transition': 'all 30s'}); 
	}).delay(d*4)
	

	.queue(function(){ 
		$("body").css({'-webkit-transform': 'translateY(-1935px)'}); 
		$("#wt_intro").fadeIn(100).addClass('notransition').css({opacity: "1"}); $("#wt_intro h2").hide();
		$("#wt_intro h1").html("Thankyou!").css({color: 'white'})
		dq(); 
	}).delay(d*33)
	.queue(function(){ $("body").css({'-webkit-transform': 'translateY(-2750px)', '-webkit-transition': 'all 10s'});  })
})