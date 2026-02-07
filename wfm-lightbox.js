var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");

(function($) {
	
	$(document).ready(function() {
	
		PrepareImages();
	
	});
	
	function PrepareImages() {
		
		$('a[rel*=flickr-mgr]').click(function() {
		
			var link = $(this);
		
			if(link.attr("rel") == "flickr-mgr") {	// Individual Photo
			
				var origUrl = link.attr("href");
				var origTitle = link.attr('title');
				
				var caption = GetTitle(link);
				caption += '<br /><span class="description">{0}</span>'.format(GetDescription(link));
				
				link.attr('title', caption);
				link.attr("href", GetFlickrHref(link));
				link.attr("rel", '');
				
				link.lightBox({
					imageLoading:	WFM_PluginDir + '/images/loading-3.gif'
					,imageBtnClose:	WFM_PluginDir + '/images/closelabel.gif'
					,imageBlank: 	WFM_PluginDir + '/images/blank.gif'
				}).click();
				
				
				setTimeout(function() {
					link.attr("rel","flickr-mgr");
					link.attr("href", origUrl);
					link.attr('title', origTitle);
			
					PrepareImages();
				}, 100);
			
			} else {
				
				if(link.attr('lbclick') == 'true') {
					return false;
				}
				
				//var origUrls = [];
				var setRel = link.attr("rel");
				
				$('a[rel*="'+setRel+'"]').each(function() {
					var testLink = $(this);
					
					testLink.attr('origURL', testLink.attr('href'));
					testLink.attr('origTitle', testLink.attr('title'));
					
					var caption = GetTitle(testLink);
					
					caption += '<br /><span class="description">@Description</span>'
										.replace(/@Description/g, GetDescription(testLink));
					
					testLink.attr("title", caption);
					testLink.attr('lbclick', 'true');
					testLink.attr("href", GetFlickrHref(testLink));
				}).lightBox({
					imageLoading:		WFM_PluginDir + '/images/loading-3.gif'
					,imageBtnClose:		WFM_PluginDir + '/images/closelabel.gif'
					,imageBlank: 		WFM_PluginDir + '/images/blank.gif'
					,imageBtnPrev: 		WFM_PluginDir + '/images/prevlabel.gif'
					,imageBtnNext: 		WFM_PluginDir + '/images/nextlabel.gif'
				});
				
				link.click();
				
				// Delay changing the URL's back because Internet Explorer doesn't wait for execution to finish
				setTimeout(function() {
					$('a[rel*="'+setRel+'"]').each(function(){
						var setLink = $(this);
						setLink.attr('href', setLink.attr('origURL'));
						setLink.attr('title', setLink.attr('origTitle'));
						setLink.attr('lbclick','false');
					});
					
					PrepareImages();
				}, 100);
				
			}
			
			return false;
		
		});
		
	}
	
})(jQuery);

}

/*
     FILE ARCHIVED ON 12:05:57 Mar 07, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:51:07 Feb 06, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.852
  exclusion.robots: 0.099
  exclusion.robots.policy: 0.084
  esindex: 0.013
  cdx.remote: 6.497
  LoadShardBlock: 278.346 (3)
  PetaboxLoader3.datanode: 164.76 (4)
  PetaboxLoader3.resolve: 160.734 (2)
  load_resource: 151.529
*/