$("head").append("<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700|Pacifico|Open+Sans' rel='stylesheet' type='text/css'>");
$("head").append('<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">');

//$("body").css({fontFamily: 'Open Sans'})

$("#topmenucontainer").css({background: 'transparent'})
$("#topmenu").css({overflow: 'hidden'})
$("#topmenu li").css({border: '0 none'})
$("#topmenu a").css({fontSize: '12px'})

$(".data a").css({fontSize: '12px'})
$(".data thead th").css({background: 'transparent', borderBottom: '1px solid #ccc'})

$(".data td:nth-child(3) a, .data td:nth-child(4) a, .data td:nth-child(5) a, .data td:nth-child(6) a, .data td:nth-child(7) a, .data td:nth-child(8) a").hide();

$("#page_content").css({margin: '0'})
//$(".data").css({width: '100%'})

$("#serverinfo").css({background: 'transparent'})
$("#serverinfo .item").css({color: 'black', textShadow: 'none'})
$("#topmenucontainer").css({border: '0 none'})

$("#serverinfo a:nth-of-type(2)").html($("#serverinfo a:nth-of-type(2)").html().replace('Database: ', ''))
$("#serverinfo a:nth-of-type(2)").css({fontSize: '24px', fontFamily: 'Montserrat'})
$("#serverinfo a:nth-of-type(1), #serverinfo img, #serverinfo span, #goto_pagetop").hide();

//$(".ic_b_browse").parents(".block").hide();
$("#floating_menubar").css({width: 'auto', right: '0'})

$("#topmenucontainer").css({width: '200px', marginLeft: '660px'})
$("#topmenu li").css({float: "none"})
//$("#topmenu").append($("#topmenu .submenu ul").html());

$(".data .even th, .data .even td").css({background: '#F3F3F3'})
$(".data th, .data td").css({borderBottom: '1px solid #ccc'})
$(".data .even th").css({borderRight: '0 none'})