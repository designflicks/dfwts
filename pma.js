$("head").append("<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700|Pacifico|Open+Sans:300|Raleway:400,700,900' rel='stylesheet' type='text/css'>");
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

$("#topmenucontainer").css({width: '200px'})
$("#floating_menubar").css({marginLeft: '900px'})
$("#topmenu li").css({float: "none"})
$("body").css({paddingTop: '0'})

$(".data .even th, .data .even td").css({background: '#F3F3F3'})
$(".data th, .data td").css({borderBottom: '1px solid #ccc'})
$(".data .even th").css({borderRight: '0 none'})

$("#page_content").css({width: '70%'})
$(".data").css({width: '100%'})
$("body").css({position: 'relative'})
$("#floating_menubar").css({width: '30%', position: 'absolute', left: 'auto', marginLeft: '0'})

$("#serverinfo").css({padding: '10px'})
$(".menucontainer").css({background: 'transparent'})


$("#topmenucontainer").css({paddingLeft: '10px'})
$("#serverinfo").css({padding: '20px'})

$("#pma_navigation").css({background: '#333'});
$("#pma_navigation_tree, #pma_navigation_tree a").css({color: 'white', fontSize: '12px'});

$("body").css({background: '#333'})
$("#page_content").css({marginTop: '15px'})
$("#floating_menubar").css({background: '#f6f6f6', bottom: '0'})


$("#topmenu li").css({float: "left"})
$("#topmenucontainer").css({width: '100%'})
$("#page_content").css({width: '100%'})
$("#floating_menubar").css({bottom: 'auto', left: '0', right: '0', width: '100%', background: 'white'})

$("#topmenu .icon").hide();

$("#topmenu a").css({color: '#999', padding: '10px'});
$("#floating_menubar").css({marginLeft: '205px', position: 'fixed', top: '8px'})
$("body").css({paddingTop: '80px'})
$("#serverinfo").css({padding: '20px 0 0 20px'})

$("#serverinfo a:nth-of-type(2)").css({fontWeight: '900', fontFamily: 'Raleway', color: 'rgba(0, 0, 0, 0.5)'})






$("#pma_navigation_collapser, #pma_navigation_resizer").hide();