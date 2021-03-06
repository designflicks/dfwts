$("head").append("<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700|Pacifico|Montserrat|Open+Sans:300|Raleway:400,700,900|Varela+Round' rel='stylesheet' type='text/css'>");
$("head").append('<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">');

$("body").css({fontFamily: 'Varela Round', fontSize: '13px'})

$(".window-area .title").html("Team chat").css({fontFamily: 'Varela Round', fontSize: '24px', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.35)'});

$(".chat-list li").css({padding: '10px', border: '0 none'})
$(".chat-list .name").css({float: 'none', padding: '0', marginBottom: '5px', textAlign: 'left'})
$(".chat-list .message").css({border: '0 none', padding: '0', width: 'auto'})

$(".chat-list .me").css({background: 'transparent', border: '0 none'})


$(".window-area .title").css({padding: '15px'})
$(".chat-list li").css({padding: '15px'})

$(".chat-list").css({borderTop: '0 none'})

//$(".member-list .status").css({float: 'right'})


$(".member-list li:nth-child(1)").prepend("<span class='gravatar'><img src='http://api.randomuser.me/0.3.2/portraits/women/26.jpg' /></span>");
$(".member-list li:nth-child(2)").prepend("<span class='gravatar'><img src='http://api.randomuser.me/0.3.2/portraits/men/12.jpg' /></span>");
$(".member-list li:nth-child(3)").prepend("<span class='gravatar'><img src='http://api.randomuser.me/0.3.2/portraits/men/14.jpg' /></span>");
$(".member-list li:nth-child(4)").prepend("<span class='gravatar'><img src='http://api.randomuser.me/0.3.2/portraits/men/16.jpg' /></span>");
$(".gravatar img").css({width: '24px'})

$(".member-list li:nth-child(1)").css({color: "#82cf85"});
$(".member-list li:nth-child(2)").css({color: "#82cf85"});
$(".member-list li:nth-child(3)").css({color: "#ffac69"});
$(".member-list li:nth-child(4)").css({color: "#f57e7d"});


$(".member-list li span").css({float: 'left', display: 'block', marginRight: '6px', lineHeight: '24px'})
$(".member-list li .time").css({float: 'right', marginRight: '0'})
$(".member-list li span img").css({display: "block", borderRadius: '100%'})
$(".member-list li").css({overflow: 'hidden'})
$(".member-list .status").hide();

$(".right-tabs .tabs-container").css({padding: '5px'})

$(".blue-label").css({background: 'transparent', color: '#6ea0ff', padding: '0'}).html("@Cucu Ionel")

$(".expand .fa-expand").addClass("fa-cog").removeClass("fa-expand")
$(".right-tabs .fa-cog").hide();

$(".input-area > input").css({float: 'left', margin: '0', borderRadius: '0 5px 5px 0', height: '32px'})
$(".input-area .input-wrapper").css({borderRadius: '5px 0 0 5px', border: '1px solid #a0b4c0'})
$(".input-area .input-wrapper input").css({minWidth: '282px'})


$(".window-title > .title").css({overflow: 'visible'});
$(".window-wrapper").css({minHeight: '730px'})

$(".chat-list li:nth-child(4) .message").append("<img src='http://24.media.tumblr.com/6c0e95d27b8509096274f244ff5aeea9/tumblr_n21lusI21V1st5lhmo1_1280.jpg' />")
$(".message img").css({width: '50%'})

$(".conversation-list ul li.active a").css({background: 'white', color: '#445166'})
$(".chat-area").css({boxShadow: 'none'});
$(".conversation-list").css({background: "#f1f1f1"});
$(".conversation-list ul li a").css({border: '0 none', color: '#445166'});


$(".chat-list ul li:nth-child(odd)").prepend("<span class='gravatar'><img src='http://api.randomuser.me/0.3.2/portraits/women/26.jpg' /></span>");
$(".chat-list ul li:nth-child(even)").prepend("<span class='gravatar'><img src='http://api.randomuser.me/0.3.2/portraits/men/12.jpg' /></span>");
$(".chat-list ul li .gravatar img").css({width: '32px'});
$(".chat-list ul li .gravatar").css({display: 'block', float: 'left', marginRight: '10px'})
$(".chat-area ul .name").css({width: '150px'})
$(".message").css({width: '310px'})



$(".chat-list ul li .gravatar img").css({borderRadius: '100%'});

//fixing widths
$(".chat-area .chat-list, .jspContainer, .jspPane").css({width: '100%'});

$(".chat-area .title").css({fontSize: '20px', fontWeight: 'normal', padding: '25px', color: 'rgba(0, 0, 0, 0.65)'})
$(".conversation-list").css({background: 'white'})
$(".chat-area, .right-tabs").css({border: '0 none'});

$(".chat-area .title").css({padding: '25px 15px'});
$(".chat-area .chat-list").css({top: '60px'});

$(".conversation-list ul li a i.fa-times").hide();
$(".conversation-list ul li a").css({padding: "10px 15px"});
$(".conversation-list").css({paddingTop: '70px'})

$(".right-tabs .tabs").remove();
$(".my-account").before($(".right-tabs").html());
$(".right-tabs").remove();
$(".chat-area").css({right: '0'});

$(".tabs-container").css({padding: '15px'})

$(".conversation-list").css({width: '200px'});
$(".chat-area").css({left: '200px'})

$(".conversation-list>ul:first-child").before("<h1>Chats</h1>");
$(".conversation-list .tabs-container").before("<h1>Friends</h1>")
$(".conversation-list h1").css({padding: '10px 15px', textTransform: 'uppercase', fontWeight: 'bold', fontFamily: 'Montserrat', color: 'rgba(0, 0, 0, 0.5)', fontSize: '12px'})

$(".conversation-list").css({background: 'hsl(275, 55%, 98%)'});
$(".conversation-list h1").css({fontSize: '32px', color: 'rgba(0, 0, 0, 0.1)', textTransform: 'lowercase', fontWeight: 'normal', fontFamily: 'Varela Round'})

$(".chat-area .chat-list").css({borderBottom: '0 none'});
$(".input-area").css({borderTop: '0 none'});

$(".input-area").css({background: 'transparent', padding: '15px'})
$(".input-area .input-wrapper input").css({minWidth: '415px'})

$(".conversation-list .tabs-container").css({padding: '0 15px 15px 15px'});
$(".conversation-list ul").css({marginBottom: '20px'})

$(".conversation-list").css({paddingTop: '10px'})
$(".window-wrapper").css({minHeight: '750px'})

$(".my-account").css({background: 'transparent'})
$(".my-account > .name").css({color: 'black'})
$(".conversation-list").css({paddingTop: '80px'});
$(".my-account").css({padding: '25px 15px', bottom: 'auto', top: '0'})

$(".my-account").append("<div class='settings'><a><i class='fa fa-dashboard'></i></a><a><i class='fa fa-envelope'></i></a><a><i class='fa fa-power-off'></i></a></div>")
$(".settings").css({clear: 'both'});
$(".settings a").css({display: 'block', float: 'left', color: 'rgb(68, 81, 102)', padding: '10px 15px'})
$(".conversation-list").css({paddingTop: '160px'})

$(".settings").css({paddingLeft: '40px'});
$(".settings a").css({padding: '10px 0', marginRight: '15px'});
$(".settings a i").css({fontSize: '14px'})
$(".conversation-list").css({paddingTop: '100px'})

$(".window-wrapper").css({background: 'transparent'})
$(".chat-area").css({background: 'rgba(255, 255, 255, 0.8)'})
$(".window-title").css({background: 'rgba(255, 255, 255, 0.7)'})

