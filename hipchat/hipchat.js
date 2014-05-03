$("head").append("<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700|Pacifico|Open+Sans:300|Raleway:400,700,900|Varela+Round' rel='stylesheet' type='text/css'>");
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