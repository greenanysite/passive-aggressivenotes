var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function safe_report_comments_flag_comment( comment_id, nonce, result_id ) {
	jQuery.post( 
		SafeCommentsAjax.ajaxurl,
		{
			comment_id : comment_id,
			sc_nonce : nonce,
			result_id : result_id,
			action : 'safe_report_comments_flag_comment'
		},
		function(data) { jQuery( '#'+result_id).html(data); }
	);
	return false;
}

jQuery( document ).ready( function() {
	jQuery( '.hide-if-js' ).hide();
	jQuery( '.hide-if-no-js' ).show();
});
}

/*
     FILE ARCHIVED ON 12:05:59 Mar 07, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:34:14 Feb 07, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.589
  exclusion.robots: 0.054
  exclusion.robots.policy: 0.045
  esindex: 0.01
  cdx.remote: 6.334
  LoadShardBlock: 200.74 (3)
  PetaboxLoader3.datanode: 197.494 (4)
  load_resource: 112.927
  PetaboxLoader3.resolve: 37.397
*/