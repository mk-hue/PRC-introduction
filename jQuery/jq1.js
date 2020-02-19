// JavaScript Document 
$(function(){	
var a=0;
var b=0;
var c=0;

	var oTop2=$("#back2").offset().top; /*第二板块*/
	var oTop3 = $("#box_sci").offset().top;/*第三板块*/
	var oTop4 = $(".com").offset().top;/*第四板块*/
	var oTop5 = $(".back5").offset().top;/*第五板块*/
	var oTop6 = $(".back6").offset().top;/*第五板块*/
	
	 $(".back1").show();         		
     $("#back2").show();				
	 $(".com").show();
	 $(".back6").show();
	 $(".back5").show();				
	 /*$(".news li img").hide();*/
				
		
			$(".page2").hide();	
	
		 $(window).scroll(function() {  /*板块三科技兴国两边div向中间靠时 或第二板块圆圈往中间靠*/
			var sTop = $(document).scrollTop();								
			if((sTop+250) >= oTop2&&a==0){	/*第二板块*/	
					
				 $(".back2_div").animate({bottom:'50px'}, 10);	
				 a=1;		 				
			}
			
			/*if(oTop2 >= $(window).scrollTop() && oTop2 < ($(window).scrollTop()+$(window).height())){ 
				//console.log("23");
				 $(".back2_div").animate({bottom:'50px'}, 10);			 				
			}*/
			/*console.log(oTop3);2416*/
			/*1520*/
			if((sTop+1500) >= oTop3&&$('#box_sci').is(':visible')&&b==0 /*oTop >= $(window).scrollTop() && oTop < ($(window).scrollTop()+$(window).height())*/){	
				/*第三板块*/	
				
				$("#top_mid").animate({left:'4vw'}, 10);
				$(".back3_form").animate({right:'5vw'}, 10);
				/*$("#top_mid").animate({right:'33vw'}, 10);
				$(".back3_form").animate({right:'9vw'}, 10);*/
				 /*$("#top_mid").animate({marginLeft:'-40vw'}, 10);	-40		 
				 $(".back3_form").animate({marginRight:'9vw'}, 10);*/
				 b=1;
				/* $("#top_mid").animate({left:'150px'}).fadeIn("low");*/						  
			} 
			
			if((sTop+1500) >= oTop4&&$('.com').is(':visible')&&c==0 ){	/*第四板块*/					 	 
				 $(".back4_logo").animate({marginRight:'3vw'}, 10);
				 c=1;
				/* $("#top_mid").animate({left:'150px'}).fadeIn("low");*/						  
			} 
			
		});
	  	
		
		  
	 	 $("#yidai").mouseover(function () {  /*一带一路右边新闻框hover时*/
		 		//console.log("1");						
				$("#news_left1").css("width","245px");
				$("#news_left1").css("background","url(pic/page2_liBack1.png) no-repeat");
				$("#news_left1").css("background-size","100% 100%");
				//$("#news_left1").addClass("newsLiHover");
			})
		$("#news_left1").mouseover(function () {  	/*一带一路左边导航栏hover时*/ 
				$("#yidai").show();	
				$("#jingjin").hide();	
				$("#changjiang").hide();			
				$("#news_left2").mouseout();
				$("#news_left3").mouseout();		
				$("#news_left1").css("width","245px");	
				
				$("#news_left1").css("background","url(pic/page2_liBack1.png) no-repeat");
				$("#news_left1").css("background-size","100% 100%");
			})
		$("#news_left1").mouseout(function () {  	/*一带一路左边导航栏out时*/ 	
				$("#news_left1").css("width","230px");
				$("#news_left1").css("background","-webkit-gradient(linear, 0% 0%, 0% 100%,from(#f6f6f8), to(#DCDCDC))"); //恢复
				$("#news_left1").css("background-size","70% 100%");
			})
			
		 $("#jingjin").mouseover(function () {  /*京津冀右边新闻框hover时*/		
		 			$("#news_left2").css("width","245px");
				$("#news_left2").css("background","url(pic/page2_liBack1.png) no-repeat");
				$("#news_left2").css("background-size","100% 100%");
			})
		$("#news_left2").mouseover(function () {  	/*京津冀左边导航栏hover时*/ 		  		
				$("#yidai").hide();
				$("#jingjin").show();
				$("#changjiang").hide();
				$("#news_left1").mouseout();
				$("#news_left3").mouseout();		
				$("#news_left2").css("width","245px");
				$("#news_left2").css("background","url(pic/page2_liBack1.png) no-repeat");
				$("#news_left2").css("background-size","100% 100%");
			})
		$("#news_left2").mouseout(function () {  	/*京津冀左边导航栏out时*/ 	
				$("#news_left2").css("width","230px");		
				$("#news_left2").css("background","-webkit-gradient(linear, 0% 0%, 0% 100%,from(#f6f6f8), to(#DCDCDC))"); //恢复
				$("#news_left2").css("background-size","70% 100%");
			})
			
			 $("#changjiang").mouseover(function () {  /*长江右边新闻框hover时*/
			 	$("#news_left3").css("width","245px");
				$("#news_left3").css("background","url(pic/page2_liBack1.png) no-repeat");
				$("#news_left3").css("background-size","100% 100%");
				
			})
			$("#news_left3").mouseover(function () {  	/*长江左边导航栏hover时*/ 	
				$("#yidai").hide();
				$("#jingjin").hide();
				$("#changjiang").show();
				$("#news_left1").mouseout();
				$("#news_left2").mouseout();					
				$("#news_left3").css("width","245px");	
				$("#news_left3").css("background","url(pic/page2_liBack1.png) no-repeat");
				$("#news_left3").css("background-size","100% 100%");
			})
		$("#news_left3").mouseout(function () {  	/*长江左边导航栏out时*/ 	
				$("#news_left3").css("width","230px"); 								
				$("#news_left3").css("background","-webkit-gradient(linear, 0% 0%, 0% 100%,from(#f6f6f8), to(#DCDCDC))"); //恢复
				$("#news_left3").css("background-size","70% 100%");
			})							
			
	  	$(".card-footer a").click(function () {/*page2按下一页返回顶部*/	 
             if ($(window).scrollTop() > 0) {
             	$("html,body").stop().animate({ scrollTop: 0 }, 400);
             }					
          });	
		$(".news li").mouseover(function () {  								
				$(this).children('img').show();
			})
		$(".news li").mouseout(function () {  								
				$(this).children('img').hide();
			})
			
		  	
			
         $(".flow").click(function () {		 
             		if ($(window).scrollTop() > 0) {
             			$("html,body").stop().animate({ scrollTop: 0 }, 600);
             		}					
             	});
		 $("#nav1").click(function () { /*导航栏中的“首页”被触发*/
             		if ($(window).scrollTop() > 0&&$('.back1').is(':visible')) {
             			$("html,body").stop().animate({ scrollTop: 0 }, 600);
             		}
					else { /*如果此时在别的页面*/
						$(".back1").show();         		
             			$("#back2").show(); 
						$("#box_sci").show();
						$(".com").show();
						$(".back5").show();
						$(".page2").hide();
						$(".back6").show();
						$("html,body").stop().animate({ scrollTop: 0 }, 600);
					}
             	});
		 $("#nav2").click(function () {    /*导航栏中的“国家战略”被触发*/   
		 		 var oTop2=$("#back2").offset().top; /*第二板块*/
		      		if($('.back1').is(':visible'))
					{
             			$("html,body").stop().animate({ scrollTop: oTop2 }, 600);
					}
					else{/*如果此时在别的页面*/
					console.log("9");	
						$(".back1").show();         		
             			$("#back2").show(); 
						$("#box_sci").show();
						$(".com").show();
						$(".back5").show();
						$(".page2").hide();
						$(".back6").show();
						$("html,body").stop().animate({ scrollTop: oTop2  }, 300);
					}					
			  	});
				
			$("#nav3").click(function () {    /*导航栏中的“科技兴国”被触发*/   
					var oTop3 = $("#box_sci").offset().top;/*第三板块*/
		      		if($('.back1').is(':visible'))
					{
             			$("html,body").stop().animate({ scrollTop: oTop3 }, 600);
					}
					else{/*如果此时在别的页面*/
						$(".back1").show();         		
             			$("#back2").show(); 
						$("#box_sci").show();
						$(".com").show();
						$(".back5").show();
						$(".page2").hide();
						$(".back6").show();
						$("html,body").stop().animate({ scrollTop: oTop3 }, 300);
					}					
			  	});
			$("#nav6").click(function () {    /*导航栏中的“英雄烈士”被触发*/   
					var oTop6 = $(".back6").offset().top;/*第三板块*/
		      		if($('.back1').is(':visible'))
					{
             			$("html,body").stop().animate({ scrollTop: oTop6 }, 600);
					}
					else{/*如果此时在别的页面*/
						$(".back1").show();         		
             			$("#back2").show(); 
						$("#box_sci").show();
						$(".com").show();
						$(".back5").show();
						$(".page2").hide();
						$(".back6").show();
						$("html,body").stop().animate({ scrollTop: oTop6 }, 300);
					}					
			  	});	
			$("#nav4").click(function () {    /*导航栏中的“筑梦未来”被触发*/    
					var oTop4 = $(".com").offset().top;/*第四板块*/
		      		if($('.back1').is(':visible'))
					{
             			$("html,body").stop().animate({ scrollTop: oTop4 }, 600);
					}
					else{/*如果此时在别的页面*/
						$(".back1").show();         		
             			$("#back2").show(); 
						$("#box_sci").show();
						$(".com").show();
						$(".back5").show();
						$(".page2").hide();
						$(".back6").show();
						$("html,body").stop().animate({ scrollTop: oTop4}, 300);
					}					
			  	});
			$("#nav5").click(function () {    /*导航栏中的“联系我们”被触发*/  
					var oTop5 = $(".back5").offset().top;/*第五板块*/
		      		if($('.back1').is(':visible'))
					{
             			$("html,body").stop().animate({ scrollTop: oTop5 }, 600);
					}
					else{/*如果此时在别的页面*/
						$(".back1").show();         		
             			$("#back2").show(); 
						$("#box_sci").show();
						$(".com").show();
						$(".back5").show();
						$(".page2").hide();
						$(".back6").show();
						$("html,body").stop().animate({ scrollTop: oTop5 }, 300);
					}					
			  	});
				
			$(document).on("scroll",function(){		/*导航栏伸缩功能*/
				if($(document).scrollTop()>100){ 
						$("header").removeClass("large").addClass("small");
						$(".flow").fadeIn(500);
					}
				else{
						$("header").removeClass("small").addClass("large");
						$(".flow").fadeOut(500);
					}
			});

			/* $(".info").click(function () { 	板块二中的div被触发后显示第二个页面  	
				 $(".back1").hide();         		
             	$("#back2").hide();
				$("#box_sci").hide();
				$(".com").hide();
				$(".back5").hide(); 
				$(".back6").hide();
				$(".page2").show();
				$("html,body").stop().animate({ scrollTop: 0 }, 600);
			   	});			
	  });	*/
		
		/*$(document).ready(function(){									 		 	
			$("#logo1").mouseover(function(){	首页鸟功能
				
				 //$("#bird").fadeIn("slow");					 
				 	$("#bird").animate({width:"300px", 
					height: "300px",
					marginRight:"190px",
					marginTop:"-690px"
					}, 2000 ).fadeIn("slow"); 						
				 });			 			  
		}); */
		});