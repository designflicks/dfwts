$("head").append("<link href='http://fonts.googleapis.com/css?family=Raleway:100' rel='stylesheet' type='text/css'>");

$(".oapp_form").css({width: "670px", margin: '0 auto'});
$(".oapp_form table").css({width: '100%'});

$("h1").css({textAlign: "center"});
$("th").css({textAlign: "left"})
$("input, select, textarea").css({padding: '5px', borderRadius: '3px'})
$("body").css({fontSize: '14px;'})

$("th").each(function(){
	var s = "<p class='input-label'>"+$(this).html()+"</p>";
	$(this).next().prepend(s).attr("colspan", "3")//.css("width", "50%");
	$(this).remove();
})
$(".input-label").css({fontWeight: 'bold'});
$("h2, h3, button:only-child, input[type='submit']:only-child").parent().attr("colspan", "6")
$("button:only-child, input[type='submit']:only-child").parent().css({textAlign: 'center'});
$(".ref td, .fi td").attr("colspan", "2")

$("button:only-child, input[type='submit']:only-child").css({boxSizing: 'border-box', borderRadius: '3px', background: 'linear-gradient(#fff, #ddd)', border: '1px solid #999'});


$("input, select, textarea, th").css({fontSize: "14px"})

$("input, select, textarea").css({width: '100%', boxSizing: 'border-box', lineHeight: '18px'})

var h = "";
$(".gi").each(function(){
	h += $(this).html();
});
$(".gi").not(":first").remove();
$(".gi").first().html(h).find("td").attr("colspan", "2");

$("table.normal, table.normal tr td, table.normal tr th").css({border: '0 none'});
$("table.normal tr td, table.normal tr th").css({padding: '5px', position: 'relative'});

$(".uid_search_button").css({boxSizing: 'border-box', padding: '8px', position: 'absolute', right: '3px', bottom: '5px', borderRadius: '0 3px 3px 0', background: 'linear-gradient(#fff, #ddd)', border: '1px solid #999'})

$("body").css({background: '#aaa'});
$(".oapp_form").css({background: "white", padding: '40px', boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.5)'});


$("h2").css({fontFamily: 'Raleway', fontWeight: '100', fontStyle: 'normal', textAlign: 'center', fontSize: '36px', textAlign: 'left', marginLeft: '0', paddingLeft: '0'})

$(".content h3").css({paddingLeft: '45px', marginLeft: '-45px', textAlign: 'left', background: 'linear-gradient(to right, #333, transparent)'})

$("h2").first().parents("tr").clone().prependTo($("table")).addClass("first-heading").find("h2").html($("h1").html()).addClass("form-head").css({textTransform: 'capitalize'});
$("h1").remove();

$(".add-ref").css({padding: '10px 20px', textAlign: 'center'})

$(".content h3").css({margin: '10px 0 10px -45px'})

$("h2").css({marginBottom: '0', paddingBottom: '0', marginTop: '30px'})

$("input, select, textarea").css({width: '90%'})
$(".uid_search_button").css({right: '36px'})

$(".oapp_form").css({paddingTop: '10px'});
$(".form-head").css({marginBottom: '15px'})

$("input[type='text'], select, textarea").css({background: 'white'})

$(".ref .input-label, .fi .input-label").css({position: 'absolute', top: '16px', left: '-23px'})

$(".fi-subhead").css({textAlign: 'left', opacity: '0.75', fontSize: '13px', lineHeight: '2'})