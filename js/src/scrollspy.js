// build time:Wed Jul 10 2019 14:29:05 GMT+0800 (中国标准时间)
+function(t){"use strict";function s(e,i){this.$body=t(document.body);this.$scrollElement=t(e).is(document.body)?t(window):t(e);this.options=t.extend({},s.DEFAULTS,i);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this));this.refresh();this.process()}s.VERSION="3.3.2";s.DEFAULTS={offset:10};s.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};s.prototype.refresh=function(){var s=this;var e="offset";var i=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();if(!t.isWindow(this.$scrollElement[0])){e="position";i=this.$scrollElement.scrollTop()}this.$body.find(this.selector).map(function(){var s=t(this);var r=s.data("target")||s.attr("href");var o=/^#./.test(r)&&t(NexT.utils.escapeSelector(r));return o&&o.length&&o.is(":visible")&&[[o[e]().top+i,r]]||null}).sort(function(t,s){return t[0]-s[0]}).each(function(){s.offsets.push(this[0]);s.targets.push(this[1])})};s.prototype.process=function(){var s=this.$scrollElement.scrollTop()+this.options.offset;var e=this.getScrollHeight();var i=this.options.offset+e-this.$scrollElement.height();var r=this.offsets;var o=this.targets;var l=this.activeTarget;var a;if(this.scrollHeight!=e){this.refresh()}if(s>=i){return l!=(a=o[o.length-1])&&this.activate(a)}if(l&&s<r[0]){t(this.selector).trigger("clear.bs.scrollspy");this.activeTarget=null;return this.clear()}for(a=r.length;a--;){l!=o[a]&&s>=r[a]&&(!r[a+1]||s<=r[a+1])&&this.activate(o[a])}};s.prototype.activate=function(s){this.activeTarget=s;this.clear();var e=this.selector+'[data-target="'+s+'"],'+this.selector+'[href="'+s+'"]';var i=t(e).parents("li").addClass("active");if(i.parent(".dropdown-menu").length){i=i.closest("li.dropdown").addClass("active")}i.trigger("activate.bs.scrollspy")};s.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function e(e){return this.each(function(){var i=t(this);var r=i.data("bs.scrollspy");var o=typeof e=="object"&&e;if(!r)i.data("bs.scrollspy",r=new s(this,o));if(typeof e=="string")r[e]()})}var i=t.fn.scrollspy;t.fn.scrollspy=e;t.fn.scrollspy.Constructor=s;t.fn.scrollspy.noConflict=function(){t.fn.scrollspy=i;return this};t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var s=t(this);e.call(s,s.data())})})}(jQuery);
//rebuild by neat 