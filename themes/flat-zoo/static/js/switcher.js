jQuery(window).load(function() {
	/* demo */
	
	jQuery('body').append(
	"<div class='demo_navigation'>"+
		"<div class='demo_options'>"+
			"<!-- SKIN -->"+
			"<div class='nav_skin'>"+
				"<!--  Skins Colors -->"+
				"<div class='gnrl_color pt_touch clearfix'>"+
					"<div class='demo-title'>Skins Colors</div>"+
					"<div class='demo-content demo-color'>"+
					
						"<div data-name='gnrl_color' data-value='skins' data-value-2='e74c3c' style='background-color: #e74c3c;'></div>"+
						
						"<div data-name='gnrl_color' data-value='bright_cyan' data-value-2='44ccf2' style='background-color: #44ccf2;'></div>"+
						
						"<div data-name='gnrl_color' data-value='bright_pink' data-value-2='f53477' style='background-color: #f53477;'></div>"+
						
						"<div data-name='gnrl_color' data-value='dark_grayish_blue' data-value-2='6f7a87' style='background-color: #6f7a87;'></div>"+
						
						"<div data-name='gnrl_color' data-value='dark_grayish_cyan_2' data-value-2='7f8c8d' style='background-color: #7f8c8d;'></div>"+
						
						"<div data-name='gnrl_color' data-value='dark_grayish_cyan' data-value-2='95a5a6' style='background-color: #95a5a6;'></div>"+
						
						"<div data-name='gnrl_color' data-value='dark_green' data-value-2='018e42' style='background-color: #018e42;'></div>"+
						
						"<div data-name='gnrl_color' data-value='dark_moderate_violet' data-value-2='8e44ad' style='background-color: #8e44ad;'></div>"+
						
						"<div data-name='gnrl_color' data-value='dark_pink' data-value-2='a4195c' style='background-color: #a4195c;'></div>"+
						
						"<div data-name='gnrl_color' data-value='light_orange' data-value-2='ff9101' style='background-color: #ff9101;'></div>"+
						
						"<div data-name='gnrl_color' data-value='lime_green' data-value-2='22b147' style='background-color: #22b147;'></div>"+
						
						"<div data-name='gnrl_color' data-value='moderate_blue_2' data-value-2='437bd0' style='background-color: #437bd0;'></div>"+
						
						"<div data-name='gnrl_color' data-value='moderate_blue' data-value-2='608ecb' style='background-color: #608ecb;'></div>"+
						
						"<div data-name='gnrl_color' data-value='moderate_cyan' data-value-2='56ba6f' style='background-color: #56ba6f;'></div>"+
						
						"<div data-name='gnrl_color' data-value='moderate_violet' data-value-2='9b59b6' style='background-color: #9b59b6;'></div>"+
						
						"<div data-name='gnrl_color' data-value='slightly_desaturated_blue' data-value-2='768cb6' style='background-color: #768cb6;'></div>"+
						
						"<div data-name='gnrl_color' data-value='soft_blue' data-value-2='619edd' style='background-color: #619edd;'></div>"+
						
						"<div data-name='gnrl_color' data-value='soft_cyan' data-value-2='5dd2ed' style='background-color: #5dd2ed;'></div>"+
						
						"<div data-name='gnrl_color' data-value='soft_red' data-value-2='e95d53' style='background-color: #e95d53;'></div>"+
						
						"<div data-name='gnrl_color' data-value='soft_yellow' data-value-2='cfdf6a' style='background-color: #cfdf6a;'></div>"+
						
						"<div data-name='gnrl_color' data-value='strong_cyan' data-value-2='20b6ad' style='background-color: #20b6ad;'></div>"+
						
						"<div data-name='gnrl_color' data-value='strong_orange' data-value-2='d35400' style='background-color: #d35400;'></div>"+
						
						"<div data-name='gnrl_color' data-value='strong_red' data-value-2='c0392b' style='background-color: #c0392b;'></div>"+
						
						"<div data-name='gnrl_color' data-value='very_light_pink' data-value-2='ff80ab' style='background-color: #ff80ab;'></div>"+
						
						"<div data-name='gnrl_color' data-value='vivid_cyan' data-value-2='01ace2' style='background-color: #01ace2;'></div>"+
						
						"<div data-name='gnrl_color' data-value='vivid_orange_2' data-value-2='e67e22' style='background-color: #e67e22;'></div>"+
						
						"<div data-name='gnrl_color' data-value='vivid_orange_3' data-value-2='f39c12' style='background-color: #f39c12;'></div>"+
						
						"<div data-name='gnrl_color' data-value='vivid_orange' data-value-2='ff9201' style='background-color: #ff9201;'></div>"+
						
						"<div data-name='gnrl_color' data-value='vivid_yellow_2' data-value-2='f1c40f' style='background-color: #f1c40f;'></div>"+
						
						"<div data-name='gnrl_color' data-value='vivid_yellow' data-value-2='ffcb01' style='background-color: #ffcb01;'></div>"+
					
					"</div>"+
				"</div><br><hr><br>"+
				"<!--  End Skins Colors -->"+
				
				"<!--  Light Or Dark -->"+
				"<div class='gnrl_color pt_touch clearfix'>"+
					"<div class='demo-title'>Light Or Dark</div>"+
					"<div class='demo-content demo-light'>"+
					
						"<div data-name='gnrl_light' data-value='light' style='background-color: #FFF;'></div>"+
						
						"<div data-name='gnrl_light' data-value='dark' style='background-color: #171717;'></div>"+
					
					"</div>"+
				"</div><br><hr><br>"+
				"<!--  End Light Or Dark -->"+
				
				"<!--  Layout -->"+
				"<div class='gnrl_color pt_touch clearfix'>"+
					"<div class='demo-title'>Layout</div>"+
					"<div class='demo-content demo-layout'>"+
					
						"<div data-name='gnrl_layout' data-value='wide'>Wide</div>"+
						
						"<div data-name='gnrl_layout' data-value='boxed'>Boxed</div>"+
						
						"<div data-name='gnrl_layout' data-value='boxed2'>Boxed 2</div>"+
					
					"</div>"+
				"</div><br><hr><br>"+
				"<!--  End Layout -->"+
				
				"<!--  Patterns -->"+
				"<div class='gnrl_color pt_touch clearfix'>"+
					"<div class='demo-title'>Patterns</div>"+
					"<div class='demo-content demo-pattern'>"+
					
						"<div data-name='gnrl_pattern' data-value='bg1'><img alt='' src='images/patterns/bg1.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg2'><img alt='' src='images/patterns/bg2.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg3'><img alt='' src='images/patterns/bg3.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg4'><img alt='' src='images/patterns/bg4.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg5'><img alt='' src='images/patterns/bg5.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg6'><img alt='' src='images/patterns/bg6.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg7'><img alt='' src='images/patterns/bg7.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg8'><img alt='' src='images/patterns/bg8.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg9'><img alt='' src='images/patterns/bg9.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg10'><img alt='' src='images/patterns/bg10.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg11'><img alt='' src='images/patterns/bg11.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg12'><img alt='' src='images/patterns/bg12.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg13'><img alt='' src='images/patterns/bg13.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg14'><img alt='' src='images/patterns/bg14.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg15'><img alt='' src='images/patterns/bg15.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg16'><img alt='' src='images/patterns/bg16.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg17'><img alt='' src='images/patterns/bg17.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg18'><img alt='' src='images/patterns/bg18.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg19'><img alt='' src='images/patterns/bg19.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg20'><img alt='' src='images/patterns/bg20.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg21'><img alt='' src='images/patterns/bg21.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg22'><img alt='' src='images/patterns/bg22.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg23'><img alt='' src='images/patterns/bg23.png'></div>"+
						
						"<div data-name='gnrl_pattern' data-value='bg24'><img alt='' src='images/patterns/bg24.png'></div>"+
					
					"</div>"+
				"</div>"+
				"<!--  End Patterns -->"+
				
			"</div>"+
		"</div>"+
		
		"<div class='clearfix'></div>"+
		"<div class='push_options'><a class='show_hide'><i class='fa fa-2x fa-spin fa-cog'></i></a></div>"+
	"</div>");
	
	jQuery('head').append("<style type='text/css'>.demo_navigation{position:fixed;z-index:99999;left:-230px;top:5%;width:230px;border-left:none;background-color: #FFF;-moz-box-shadow: 0 8px 15px rgba(0,0,0,0.1);-webkit-box-shadow: 0 8px 15px rgba(0,0,0,0.1);box-shadow: 0 8px 15px rgba(0,0,0,0.1);}.demo_options .demo-title{color:#171717;margin-bottom:20px;font-size:16px}.demo_options .demo-content{color:white;font-size:13px;}.nav_skin .demo-contentlabel{display:block;}.schemasa{display:block;height:42px;margin-bottom:5px;outline:medium none;overflow:hidden;text-indent:-999px;width:64px;background:transparent;}.demo_navigation img{border:1px solid #eae9e9;}.demo_navigation img.imgSelected{border-color:red;}.show_hide{cursor:pointer;width:100%;height:100%;display:block;}.push_options{-webkit-border-radius: 0 2px 2px 0;-moz-border-radius: 0 2px 2px 0;border-radius: 0 2px 2px 0;height: 37px;width: 37px;line-height: 37px;position:absolute;top:0px;right:-37px;background: #e74c3c;display:block;font-size:21px;text-align:center;margin:0;padding:0}.push_options a{color:#FFF;}.push_options a i{font-size:21px}.demo_options{padding:20px;}.demo_options input[type='radio']{display:none;}.demo_options .nav_skin .demo-content div{width:13px;height:13px;float:left;margin:0 4px 4px 0;overflow:hidden;cursor:pointer;}.demo_options .nav_skin .demo-content div:last-child{margin-right:0 !important;}.bg_image div {width:50px;height:30px}.pt_touch.bg_image > div.demo-content {height:35px;}.pt_touch > div.demo-title{margin-left:0;}.demo-content_2 {height:25px !important;}.bd-span{	float: left;	background-color: #FFF;	color: #AAA !important;	border: #DDD 2px solid;	padding: 4px 5px 5px;	border-radius: 2px;	overflow: hidden;	display: inline-block;text-align: center;	font-size: 14px;}.bd-span:hover{border-color: #7ab317;background-color: #7ab317;	box-shadow: inset 0 0 0 1px #FFFFFF;	color: #FFF !important;}.demo_options .nav_skin .demo-content.demo-layout div {height:35px;width:56px;padding:5px;border:1px solid #eae9e9;background-color:#f8f7f7;text-align:center;line-height:25px;font-size: 11px;color:#171717;margin-right:10px}.demo_options .nav_skin .demo-content.demo-layout div:hover {background-color:#171717;border-color:#171717;color:#FFF;}.demo_options .nav_skin .demo-content.demo-light div {height:35px;width:90px;padding:5px;border:1px solid #eae9e9;background-color:#f8f7f7;text-align:center;line-height:25px;font-size: 11px;margin-right:10px}.demo_options .nav_skin .demo-content.demo-pattern div {width: 19px;height: 19px;}.demo_options .nav_skin .demo-content.demo-pattern div img {width:17px;height:17px;}@media only screen and (max-width: 479px) {.demo_navigation {display:none}}</style>");
		
	var emerald_gnrl_color=false;

	jQuery('.show_hide').click(function(){
		if(jQuery(".demo_navigation").css('left') == '0px'){
			left = -230;
		} else{
			left = 0;
		}
		jQuery(".demo_navigation").animate({
			left: left
		});
	 
	});
	
	// Pattern
	jQuery('div[data-name=gnrl_pattern]').click(function() {
		emerald_gnrl_gnrl_pattern = jQuery(this).attr("data-value");
		if(emerald_gnrl_gnrl_pattern!=false){
			pointer_pattern(emerald_gnrl_gnrl_pattern);
		}
	});
	
	// General Pattern
	function pointer_pattern(pattern_style){
		if (jQuery(".active-layout").attr("data-value") == "boxed" || jQuery(".active-layout").attr("data-value") == "boxed2") {
			jQuery("body").css("background","url(images/patterns/"+pattern_style+".png) repeat");
		}
	}
	
	// Layout
	jQuery('div[data-name=gnrl_layout]').click(function() {
		jQuery("*").removeClass("active-layout");
		jQuery(this).addClass("active-layout");
		emerald_gnrl_layout = jQuery(this).attr("data-value");
		if(emerald_gnrl_layout!=false){
			pointer_layout(emerald_gnrl_layout);
		}
	});
	
	// General Layout
	function pointer_layout(layout_style){
		if (layout_style == "wide") {
			jQuery("body").removeClass("body-boxed").removeClass("body-boxed-2");
			jQuery("#wrap").removeClass("boxed").removeClass("boxed-2");
			jQuery(window).resize();
			jQuery("body").attr("style","");
		}else if (layout_style == "boxed") {
			jQuery("body").addClass("body-boxed").removeClass("body-boxed-2");
			jQuery("#wrap").addClass("boxed").removeClass("boxed-2");
			jQuery(window).resize();
			jQuery("body").attr("style","");
		}else if (layout_style == "boxed2") {
			jQuery("body").removeClass("body-boxed").addClass("body-boxed-2");
			jQuery("#wrap").removeClass("boxed").addClass("boxed-2");
			jQuery(window).resize();
			jQuery("body").attr("style","");
		}
	}
	
	// Color
	jQuery('div[data-name=gnrl_color]').click(function() {
		emerald_gnrl_color = jQuery(this).attr("data-value");
		emerald_gnrl_color_2 = jQuery(this).attr("data-value-2");
		if(emerald_gnrl_color!=false){
			pointer_color(emerald_gnrl_color,emerald_gnrl_color_2);
		}
	});
	
	// General Color
	function pointer_color(color_style,color_style_2){
		jQuery('head').append('<link rel="stylesheet" href="css/skins/'+color_style+'.css">');
		jQuery('head').append('<style type="text/css">.push_options{background:#'+color_style_2+'}</style>');
	}
	
	// Light Or Dark
	jQuery('div[data-name=gnrl_light]').click(function() {
		emerald_gnrl_light = jQuery(this).attr("data-value");
		if(emerald_gnrl_light!=false){
			pointer_light(emerald_gnrl_light);
		}
	});
	
	// General Light Or Dark
	function pointer_light(light_style){
		if (light_style == "dark") {
			jQuery('head').append('<link rel="stylesheet" class="light_style" href="css/'+light_style+'.css">');
			jQuery("body").addClass("dark-s");
		}else {
			jQuery(".light_style").remove();
			jQuery("link[href='css/dark.css']").remove();
			jQuery("body").removeClass("dark-s");
		}
	}
	
});