// build time:Sun Jul 14 2019 20:56:39 GMT+0800 (中国标准时间)
$(document).ready(function(){t();function t(){var t=".post-toc";var a=$(t);var o=".active-current";a.on("activate.bs.scrollspy",function(){var o=$(t+" .active").last();e();o.addClass("active-current");a.scrollTop(o.offset().top-a.offset().top+a.scrollTop()-a.height()/2)}).on("clear.bs.scrollspy",e);$("body").scrollspy({target:t});function e(){$(t+" "+o).removeClass(o.substring(1))}}});$(document).ready(function(){var t=$("html");var a=200;var o=$.isFunction(t.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);var e="sidebar-nav-active";var s="sidebar-panel-active";if(t.hasClass(e)){return}var i=$("."+s);var l=$("."+t.data("target"));o?i.velocity("transition.slideUpOut",a,function(){l.velocity("stop").velocity("transition.slideDownIn",a).addClass(s)}):i.animate({opacity:0},a,function(){i.hide();l.stop().css({opacity:0,display:"block"}).animate({opacity:1},a,function(){i.removeClass(s);l.addClass(s)})});t.siblings().removeClass(e);t.addClass(e)});$(".post-toc a").on("click",function(a){a.preventDefault();var e=NexT.utils.escapeSelector(this.getAttribute("href"));var s=$(e).offset().top;o?t.velocity("stop").velocity("scroll",{offset:s+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:s},500)});$(document).ready(function(){$(document).on("click",".fold_hider",function(){$(">.fold",this.parentNode).slideToggle();$(">:first",this).toggleClass("open")});$("div.fold").css("display","none")});var e=$(".post-toc-content");var s=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var i=e.length>0&&e.html().trim().length>0;if(s&&i){CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar()}});
//rebuild by neat 