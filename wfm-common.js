var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var wfmJS = jQuery.noConflict();

String.prototype.format = function() {
    var formatted = this;
    
    wfmJS.each(arguments, function(k, v) {
    	formatted = formatted.replace("{" + k + "}", v);
    });
    
    return formatted;
};

function GetFlickrHref(link) 
{
	var image = wfmJS('img:first', link);
	var href = '';
	
	if(image.hasClass('flickr-original') || image.hasClass('flickr-site_mp4') || image.hasClass('flickr-video_player')) {
		href = image.attr('longdesc');
	} else {
		var imageSize = '';
		
		if(image.hasClass('flickr-large')) {
			imageSize = '_b';
		} else if(image.hasClass('flickr-small')) {
			imageSize = '_m';
		} else if(image.hasClass('flickr-medium_640')) {
			imageSize = '_z'
		} 
		
		href = image.attr('src').replace(/(_[stmzb])?\.jpg$/, '{0}.jpg'.format(imageSize));
	}
	
	return href;
}

function GetTitle(link)
{
	var anchor = wfmJS(link);
	var caption = anchor.attr('title');
	if(WFM_CaptionLink == 'true') {
			caption += ' <a href="{0}" title="{1}"><img src="{2}/images/flickr-media.gif" alt="{3}" /></a>'
								.format(anchor.attr("href"), WFM_ViewOnFlickr, WFM_PluginDir, WFM_ViewOnFlickr);
	}
	
	return caption;
}

function GetDescription(link) {
	var image = wfmJS('img:first',link);
	var title = image.attr('title');
	var license = wfmJS('#license-' + GetPhotoID(image));
	if(license.size() > 0) {
		title +=  license.html();
	}
	
	return title; 
}

function GetPhotoID(image) {
	return /\/([^_\/]+)[^\/]*$/g.exec(wfmJS(image).attr('src'))[1];
}

}

/*
     FILE ARCHIVED ON 12:05:57 Mar 07, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:51:06 Feb 06, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.015
  exclusion.robots: 0.103
  exclusion.robots.policy: 0.084
  esindex: 0.017
  cdx.remote: 23.036
  LoadShardBlock: 146.77 (3)
  PetaboxLoader3.datanode: 141.961 (4)
  PetaboxLoader3.resolve: 45.76 (2)
  load_resource: 65.391
*/