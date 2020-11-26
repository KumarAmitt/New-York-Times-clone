//  Copyright (c) 2000-2020 ZEDO Inc. All Rights Reserved.
var v10="https://saxp.zedo.com/asw";var a11=new function(){var e6=this;
e6.zd_has_flash=false;
var zzDtctRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7"},{"name":"ShockwaveFlash.ShockwaveFlash.6"},{"name":"ShockwaveFlash.ShockwaveFlash"}];var zzgetXObj=function(name){var zd_obj=-1;
try{
zd_obj=new ActiveXObject(name);
}
catch(err)
{
zd_obj={
zzactiveXError:true};
}
return zd_obj;
};
e6.a11=function(){
if(navigator.plugins&&navigator.plugins.length>0){
var y7='application/x-shockwave-flash';var a5=navigator.mimeTypes;
if(a5&&a5[y7]&&a5[y7].enabledPlugin&&a5[y7].enabledPlugin.description){
e6.zd_has_flash=true;
}
}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){
var zd_version=-1;
for(var i=0;i<zzDtctRules.length&&zd_version==-1;i++){
try{
var zd_obj=zzgetXObj(zzDtctRules[i].name);
if((typeof(zd_obj)!=='undefined')&&!zd_obj.zzactiveXError){
e6.zd_has_flash=true;
return;
}
}catch(err){
e6.zd_has_flash=false;
}}}
}();
};
get_flash_bit=function(){
var v3=navigator.userAgent.toLowerCase();var p18=(v3.indexOf('mac')!=-1);var c18=parseInt(navigator.appVersion);
var c19=(!p18&&(v3.indexOf('opera')==-1)&&(v3.indexOf('msie')!=-1)&&(c18>=4)&&(v3.indexOf('webtv')==-1
)&&(v3.indexOf('msie 4')==-1));
var v16=navigator.javaEnabled();var z3=1;var a27=document.createElement("audio");var d31=document.createElement("video");var d20={audio:(a27.play)?true:false,video:(d31.play)?true:false};
if(d20.audio&&d20.video){
z3 |=128;
}
if(v16){z3 |=4;}
if(a11.zd_has_flash){z3 |=8;}
if(c19){
if(document.documentElement){
document.documentElement.style.behavior='url(#default#clientCaps)';
if(document.documentElement.connectionType=='lan'){
z3 |=16;
}}
else if(document.body){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
z3 |=16;
}}}
return z3;
};
var zd_richmedia=get_flash_bit();
if(zd_richmedia==null){
zd_richmedia='';
}

if(typeof zflag_vals!='undefined'&&typeof zflag_vals.c!='undefined'){
var zflag_cid=zflag_vals.c;}
if(typeof zflag_vals!='undefined'&&typeof zflag_vals.s!='undefined'){
var zflag_sid=zflag_vals.s;}
var zd_networkID=0;var n0='';var w5=0;var zd_passback_publisherID;var zd_passback_networkID;var zd_passback_eventId;var zd_passback_adId;var zd_passback_channelId;
var zd_passback_geoLevel;var zd_Pbk='';var zd_cat='0';var zd_sz=0;var zd_kw='';var zd_$='';var zd_has_flash=0;var zd_geo_param='';var zd_click='';var zd_custom_param="";var zd_wrap_tag='';
var zd_pos_num='';var zd_dm_params=new Array();var zd_dm_str='';var zd_chlimit=0;var zd_title='';var zd_pbvars="";var zd_tmy="";var zd_msg_trans="";var zd_msg_append="";var zd_adm="";
var zd_multi_param="";var zd_slider_param="";var zd_fixWidth='';var zd_fixHeight='';var zd_minWidth='';var zd_minHeight='';var zd_maxWidth='';var zd_maxHeight='';var zd_autoPlayViewPercent='';
var zd_autoPlay='';var zd_onVideoReady='';var zd_onVideoError='';var zd_hideFullScreenIcon='';var zd_dm_values_str="";var zd_dm_values=new Array();var zd_dm_codes=new Array();
var zd_dm_values_arr=new Array();var zd_timezone_offset=0;var zd_pg_url="";var zd_ref_url="";
function isValidNetwork(){
if(typeof zflag_nid=='undefined'){
return false;
}
return true;
}
var zd_custom_targeting="";
if(typeof zflag_ct!='undefined'){
zd_custom_targeting=encodeURI(zflag_ct);
zflag_ct="";
}
if(typeof zflag_nid!='undefined'){
zd_networkID=zflag_nid;
zflag_nid=0;
}
if(typeof zflag_charset!='undefined'){
n0=zflag_charset;
zflag_charset="";
}else{
n0="UTF-8";
}
if(typeof zflag_sid!='undefined'){
w5=zflag_sid;
}
if(typeof zflag_pbnw!='undefined'&&zflag_pbnw>0){
zd_pbvars+="&pn="+zflag_pbnw;
zflag_pbnw=0;
}
if(typeof zflag_6!='undefined'){
zd_pbvars+="&6="+zflag_6;
zflag_6=0;
}
if(typeof zflag_pbad!='undefined'){
zd_pbvars+="&pa="+zflag_pbad;
zflag_pbad=0;
}
if(typeof zflag_pbch!='undefined'){
if(zflag_pbch.indexOf("/")!=-1){
var zd_pbchan=zflag_pbch.substr(0,zflag_pbch.indexOf("/"));
zd_pbvars+="&pc="+zd_pbchan;
}
else{
zd_pbvars+="&pc="+zflag_pbch;
}
zflag_pbch="0";
}
if(typeof zflag_pbr!='undefined'){
zd_pbvars+="&pr="+zflag_pbr;
zflag_pbr=0;
}
if(typeof zflag_pbsid!='undefined'){
zd_pbvars+="&ps="+zflag_pbsid;
}
if(typeof zflag_tmy!='undefined'){
zd_tmy+="&tmy="+zflag_tmy;
zflag_tmy=0;
}
if(typeof zflag_cid!='undefined'){
zflag_cid=zflag_cid.toString();
if(zflag_cid.indexOf("/")>-1){
zd_cat=zflag_cid.substr(0,zflag_cid.indexOf("/"));
}else{
zd_cat=zflag_cid;
}
if(zd_cat<0||zd_cat>999999){
zd_cat=0;
}}
if(typeof zflag_chanlimits!='undefined'){
zd_chlimit=zflag_chanlimits;
zflag_chanlimits=0;
}
if(typeof zflag_sz!='undefined'){
zd_sz=zflag_sz;
if(zd_sz<0||zd_sz>95){
zd_sz=0;
}
zflag_sz=0;
}
if(typeof zflag_msize!='undefined'){
zd_msz=get_dim_for_display(zflag_msize,screen.width,screen.height);
if(typeof zd_msz!='undefined'){
zd_sz=zd_msz;
}
zflag_msize="";
}
if(typeof zflag_alter_sz!='undefined'){
zd_adm=zflag_alter_sz;
if(zd_adm<0||zd_adm>95){
zd_adm=0;
}
zflag_alter_sz=0;
}
if(typeof zflag_kw!='undefined'){
zflag_kw=zflag_kw.replace(/&/g,'zzazz');
zd_kw=zflag_kw;
zflag_kw="";
}
if(typeof zflag_$!='undefined'){
zd_$=zflag_$;
zflag_$='';
}
if(typeof zflag_fixWidth!='undefined'){
zd_fixWidth=zflag_fixWidth;
zflag_fixWidth='';
}
if(typeof zflag_fixHeight!='undefined'){
zd_fixHeight=zflag_fixHeight;
zflag_fixHeight='';
}
if(typeof zflag_minWidth!='undefined'){
zd_minWidth=zflag_minWidth;
zflag_minWidth='';
}
if(typeof zflag_minHeight!='undefined'){
zd_minHeight=zflag_minHeight;
zflag_minHeight='';
}
if(typeof zflag_maxWidth!='undefined'){
zd_maxWidth=zflag_maxWidth;
zflag_maxWidth='';
}
if(typeof zflag_maxHeight!='undefined'){
zd_maxHeight=zflag_maxHeight;
zflag_maxHeight='';
}
if(typeof zflag_autoPlayViewPercent!='undefined'){
zd_autoPlayViewPercent=zflag_autoPlayViewPercent;
zflag_autoPlayViewPercent='';
}
if(typeof zflag_autoPlay!='undefined'){
zd_autoPlay=zflag_autoPlay;
zflag_autoPlay='';
}
if(typeof zflag_onVideoReady!='undefined'){
zd_onVideoReady=zflag_onVideoReady;
zflag_onVideoReady='';
}
if(typeof zflag_onVideoError!='undefined'){
zd_onVideoError=zflag_onVideoError;
zflag_onVideoError='';
}
if(typeof zflag_hideFullscreenicon!='undefined'){
zd_hideFullScreenIcon=zflag_hideFullscreenicon;
zflag_hideFullscreenicon='';
}
if(typeof zflag_geo!='undefined'){
if(!isNaN(zflag_geo)){
zd_geo_param="&gc="+zflag_geo;
zflag_geo=0;
}}
if(typeof zflag_param!='undefined'){
zd_custom_param="&p="+zflag_param;
zflag_param="";
}
if(typeof zflag_click!='undefined'){
zzTrd=encodeURIComponent(zflag_click);
zd_click='&l='+zzTrd;
zflag_click="";
}
if(typeof zflag_ad_title!='undefined'){
zzTitle=escape(zflag_ad_title);
zd_title='&t='+zzTitle;
zflag_ad_title="";
}
if(typeof zflag_hasAd!='undefined'){
zd_wrap_tag='&y='+zflag_hasAd;
}
if(typeof zflag_num!='undefined'){
zd_pos_num=zflag_num;
zflag_num=0;
}
if(typeof zflag_ck!='undefined'){
zd_dm_str='&ck='+zflag_ck;
zflag_ck=0;
}
if(typeof zflag_message_transport!='undefined'){
zd_msg_trans=zflag_message_transport;
zflag_message_transport=0;
}
if(typeof zflag_append_message!='undefined'){
zd_msg_append=zflag_append_message;
zflag_append_message=0;
}
if(typeof zflag_multi_param!='undefined'){
zd_multi_param="&mp="+zflag_multi_param;
zflag_multi_param="";
}
if(typeof zflag_smooth!='undefined'){
zd_slider_param+="&ssm="+zflag_smooth;
}
if(typeof zflag_slide_speed!='undefined'){
zd_slider_param+="&ssp="+zflag_slide_speed;
}
if(typeof zflag_slider_close_text!='undefined'){
zd_slider_param+="&sct="+zflag_slider_close_text;
}
if(typeof zflag_page!='undefined'&&zflag_page!='[INSERT_PAGE_URL]'){
zd_pg_url=zflag_page;
zflag_page='';
}
if(typeof zflag_ref!='undefined'&&zflag_ref!='[INSERT_REFERER_URL]'){
zd_ref_url=zflag_ref;
zflag_ref='';
}
if(typeof zd_pg_id=='undefined'){
zd_pg_id=(new Date).getTime();
}
var zd_dm_params="d1,d2,d3,d4,d5,d6,d7,d8,d9,da,db,dc,dd,de,df".split(",");
function zd_getDmCodes(){
var zl_dm_code_array=new Array();
for(var i=0;i<zd_dm_params.length;i++){
zl_dm_code_array[i]=zd_dm_params[i].substring(1);
}
return zl_dm_code_array;
}
function zd_getDmValues(){
var zl_dm_params=zd_dm_params;var zl_dm_values=new Array();var t16=new RegExp(",","g");
for(var i=0;i<zl_dm_params.length;i++){
if(eval('typeof(zflag_'+zd_dm_params[i]+')!="undefined"')){
zl_dm_values[i]=eval('zflag_'+zd_dm_params[i]);
if(zl_dm_values[i]!=""){
zl_dm_values[i]=zl_dm_values[i].replace(t16,"Z");
}}}
return zl_dm_values;
}
zd_dm_codes=zd_getDmCodes();
zd_dm_values_arr=zd_getDmValues();
for(var i=0;i<zd_dm_values_arr.length;i++){
if(zd_dm_values_arr[i]!=""&&typeof zd_dm_values_arr[i]!='undefined'){
zd_dm_values[zd_dm_values.length]=zd_dm_codes[i]+":"+zd_dm_values_arr[i];
}}
if(zd_dm_values.length!=0){
zd_dm_values_str='&dm='+zd_dm_values;
}
var zzStr='';
if(typeof zzCountry=='undefined'){
var zzCountry=255;}
if(typeof zzMetro=='undefined'){
var zzMetro=0;}
if(typeof zzState=='undefined'){
var zzState=0;}var zzSection=w5;var zzPbNId=zd_passback_networkID;var zzPbEId=zd_passback_eventId;var zzPbAId=zd_passback_adId;var zzPbCId=zd_passback_channelId;var zzPbGeoLvl=zd_passback_geoLevel;
var zzPbk=zd_Pbk;
if(typeof zzPbk=='undefined'){
zzPbk=-1;
}
var zzPbSId=zd_passback_publisherID;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';var zzExp='';var zzTrd='';var zzPos=0;
var zzNw=0;var zzCh=0;var zzDmCodes=new Array();var zzDmValues=new Array();var zzBr=99;var zzLang=99;var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
if(zd_richmedia<0||zd_richmedia>159){
zd_richmedia=1;
}
var zd_cookie=new Array();
function zd_getCookie(zp_label){
if(!zd_cookie[zp_label]){
var zl_cookie=document.cookie;var zl_cookies=new Array();var zl_cookie_name_value_pair=new Array();
zl_cookies=zl_cookie.split(';');
var zl_no_of_cookies=(zl_cookies!=null)?zl_cookies.length:0;
for(var i=0;i<zl_no_of_cookies;i++){
zl_cookies[i]=zl_cookies[i].replace(/^\s/,'');
zl_cookie_name_value_pair=zl_cookies[i].split('=');
zd_cookie[zl_cookie_name_value_pair[0]]=zl_cookie_name_value_pair[1];
}}
if(zd_cookie[zp_label]){
return zd_cookie[zp_label];
}else{
return '';
}}
function zd_get_timezone_offset(){
var zd_rightNow=new Date();var zd_jan1=new Date(zd_rightNow.getFullYear(),0,1,0,0,0,0);var zd_june1=new Date(zd_rightNow.getFullYear(),6,1,0,0,0,0);
var zd_temp=Math.max(zd_jan1.getTimezoneOffset(),zd_june1.getTimezoneOffset());
return-zd_temp/60;
}
zd_timezone_offset=zd_get_timezone_offset();
function zd_get_top_prnt_url_options(isJsTag){
var i17="";
try{
var z26=zd_get_domain(zd_detect_page_url(isJsTag));var c20=zd_get_top_parent_stack_url().split("?")[0];var w25=zd_get_domain(decodeURIComponent((zd_pg_url)));
i17=encodeURIComponent(z26+"_"+c20+"_"+w25+"_"+zd_get_stack_url_depth(c20)+"_"+zd_get_friendly_iframe_depth()+"_"+zd_pg_url);
}catch(t){}
return i17;
}
function zzOVV(){function a(a){try{if(window.top==window)return a.OnPage;for(var b=window,c=0;b.parent!=b&&1e3>c;){if(b.parent.document.domain!=b.document.domain)return a.CrossDomainIframe;b=b.parent}return a.SameDomainIframe}catch(d){}return a.CrossDomainIframe}this.DEBUG=!1,this.asset=null,this.positionInterval,this.userAgent=window.testOvvConfig&&window.testOvvConfig.userAgent?window.testOvvConfig.userAgent:navigator.userAgent,this.servingScenarioEnum={OnPage:1,SameDomainIframe:2,CrossDomainIframe:3},this.servingScenario=a(this.servingScenarioEnum),this.IN_IFRAME=this.servingScenario!=this.servingScenarioEnum.OnPage,this.IN_XD_IFRAME=this.servingScenario==this.servingScenarioEnum.CrossDomainIframe,this.geometrySupported=!this.IN_XD_IFRAME;var b=new OVVBrowser(this.userAgent);this.browser=b.getBrowser(),this.browserIDEnum=b.getBrowserIDEnum();var c=1e3;this.interval=c,this.releaseVersion="OVVRELEASEVERSION",this.buildVersion="OVVBUILDVERSION";var d={},e=[],f=1e3,g=[];this.addAsset=function(a){d.hasOwnProperty(a.getId())||(d[a.getId()]=a,this.asset=a)},this.removeAsset=function(a){delete d[a.getId()]},this.getAssetById=function(a){return d[a]},this.getAds=function(){var a={};for(var b in d)d.hasOwnProperty(b)&&(a[b]=d[b]);return a},this.subscribe=function(a,b,c,d){if(d)for(key in e[b])e[b][key]&&i(e[b][key].eventName,a)&&j(function(){c(b,e[b][key])});for(key in a)g[a[key]+b]||(g[a[key]+b]=[]),g[a[key]+b].push({Func:c})},this.publish=function(a,b,c){var d={eventName:a,eventTime:h(),ovvArgs:c};if(e[b]||(e[b]=[]),e[b].length<f&&e[b].push(d),a&&b&&g[a+b]instanceof Array)for(var i=0;i<g[a+b].length;i++){var k=g[a+b][i];k&&k.Func&&"function"==typeof k.Func&&j(function(){k.Func(b,d)})}},this.getAllReceivedEvents=function(a){return e[a]};var h=function(){"use strict";return Date.now?Date.now():(new Date).getTime()},i=function(a,b){for(var c=0;c<b.length;c++)if(b[c]===a)return!0;return!1},j=function(a){try{var b=a();return void 0!==b?b:!0}catch(c){return!1}}}function OVVCheck(){this.clientHeight=-1,this.clientWidth=-1,this.error="",this.focus=null,this.fps=-1,this.id="",this.beaconsSupported=null,this.geometrySupported=null,this.geometryViewabilityState="",this.beaconViewabilityState="",this.cssViewabilityState="",this.domViewabilityState="",this.technique="",this.beacons=new Array,this.inIframe=null,this.objBottom=-1,this.objLeft=-1,this.objRight=-1,this.objTop=-1,this.percentViewable=-1,this.percentObscured=0,this.viewabilityState=""}function OVVBrowser(a){function b(a,b){var c=function(){for(var b={ID:0,name:"",version:""},c=a,f=0;f<e.length;f++)if(null!=c.match(new RegExp(e[f].brRegex))){if(b.ID=e[f].id,b.name=e[f].name,null==e[f].verRegex)break;var g=c.match(new RegExp(e[f].verRegex+"[0-9]*"));if(null!=g){var h=g[0].match(new RegExp(e[f].verRegex));b.version=g[0].replace(h[0],"")}var i=c.match(new RegExp(d+"[0-9\\.]*"));null!=i&&(b.os=i[0]);break}return b},d="(Windows NT)",e=[{id:4,name:"Opera",brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,name:"MSIE",brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7",verRegex:"(MSIE |rv:)"},{id:2,name:"Firefox",brRegex:"Firefox",verRegex:"Firefox/"},{id:3,name:"Chrome",brRegex:"Chrome",verRegex:"Chrome/"},{id:5,name:"Safari",brRegex:"Safari|(OS |OS X)[0-9].*AppleWebKit",verRegex:"Version/"}];return c()}var c={MSIE:1,Firefox:2,Chrome:3,Opera:4,safari:5},d=b(a);this.getBrowser=function(){return d},this.getBrowserIDEnum=function(){return c}}function OVVBeaconSupportCheck(){var a=new OVVBrowser($zovvObj.userAgent),b=a.getBrowser(),c=a.getBrowserIDEnum();this.supportsBeacons=function(){var a=6.3,d=b.ID==c.MSIE,e=b.version>=11,f=b.os?b.os.split(" "):[0],g=f[f.length-1],h=g>=a;return!d||e&&h}}function ZOVVAsset(a,b){var c,d,e=13,f=Math.sqrt(2),g=0,h=1,i=2,j=3,k=4,l=5,m=6,n=7,o=8,p=9,q=10,r=11,s=12,t=13,u=500,v=a,w=0,x=$zovvObj.DEBUG?20:1,y=b.geometryViewabilityCalculator,z=function(){return null},A=function(){return null},B=new OVVBeaconSupportCheck;this.focus=!0;var C="hidden",D=function(a,b,c){C in a?a.addEventListener("visibilitychange",c):(C="mozHidden")in a?a.addEventListener("mozvisibilitychange",c):(C="webkitHidden")in a?a.addEventListener("webkitvisibilitychange",c):(C="msHidden")in a?a.addEventListener("msvisibilitychange",c):"onfocusin"in a?a.onfocusin=a.onfocusout=c:(b.addEventListener("focus",c),b.addEventListener("blur",c),b.addEventListener("pagehide",c),b.addEventListener("pageshow",c))},E=function(a){var b="",c="visible",d="hidden",e={focus:c,focusin:c,pageshow:c,blur:d,focusout:d,pagehide:d};a=a||window.event,b=a.type in e?e[a.type]:document.visibilityState,"hidden"==b?this.focus=!1:this.focus=!0};D(document,window,E.bind(this));var F=function(a,b){var c=a.getBoundingClientRect(),d=a.clientHeight,e=a.clientWidth,f=Math.max(0,c.top),g=Math.max(0,c.left),h=Math.max(0,Math.min(b.innerHeight-f,c.bottom-f)),i=Math.max(0,Math.min(b.innerWidth-g,c.right-g));return{vw:Math.round(i/e*100),vh:Math.round(h/d*100)}};this.checkViewability=function(){var a=new OVVCheck;if(a.id=v,a.inIframe=$zovvObj.IN_IFRAME,a.geometrySupported=$zovvObj.geometrySupported,a.focus=this.focus,!d)return a.error="Player not found!",a;if(G(a,d)===!0){if(!$zovvObj.DEBUG)return a;a.cssViewabilityState=OVVCheck.UNVIEWABLE}if(H(a,d)===!0){if(!$zovvObj.DEBUG)return a;a.domViewabilityState=OVVCheck.UNVIEWABLE}if(!B.supportsBeacons()&&a.geometrySupported===!1&&(a.viewabilityState=OVVCheck.UNMEASURABLE,!$zovvObj.DEBUG))return a;if(a.geometrySupported){if(a.technique=OVVCheck.GEOMETRY,J(a,d),a.viewabilityState=a.percentViewable>=1&&a.focus?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE,!$zovvObj.DEBUG)return a;a.geometryViewabilityState=a.viewabilityState}var b=P(0),c=S(0);if(b&&b.isViewable&&c){var e=O(c)&&b.isViewable();a.beaconsSupported=!e}else a.beaconsSupported=!1;if(L())if(a.beaconsSupported){a.technique=OVVCheck.BEACON;var f=K(a);null===f?(a.viewabilityState=OVVCheck.UNMEASURABLE,$zovvObj.DEBUG&&(a.beaconViewabilityState=OVVCheck.UNMEASURABLE)):(a.viewabilityState=f?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE,$zovvObj.DEBUG&&(a.beaconViewabilityState=f?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE))}else a.viewabilityState=OVVCheck.UNMEASURABLE;else a.technique=OVVCheck.BEACON,a.viewabilityState=OVVCheck.NOT_READY;if((a.viewabilityState==OVVCheck.NOT_READY||a.viewabilityState==OVVCheck.UNMEASURABLE)&&(a.technique="",a.percentViewable=F(d,window).vh,a.viewabilityState=a.percentViewable>=1&&a.focus?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE),$zovvObj.DEBUG)if(a.technique="",null===a.geometryViewabilityState&&null===a.beaconViewabilityState)a.viewabilityState=OVVCheck.UNMEASURABLE;else{var g=a.beaconViewabilityState===OVVCheck.VIEWABLE,h=a.cssViewabilityState===OVVCheck.VIEWABLE,i=a.domViewabilityState===OVVCheck.VIEWABLE,j=a.geometryViewabilityState===OVVCheck.VIEWABLE;a.viewabilityState=h||i||g||j?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE}return a},this.beaconStarted=function(b){$zovvObj.DEBUG&&P(b).debug&&P(b).debug(),0!==b&&(w++,L()&&d["onJsReady"+a]())},this.dispose=function(){for(var a=1;e>=a;a++){var b=S(a);b&&(delete w[a],b.parentElement.removeChild(b))}clearInterval(window.$zovvObj.positionInterval),window.$zovvObj.removeAsset(this)},this.getId=function(){return v},this.getPlayer=function(){return d};var G=function(a,b){var c=window.getComputedStyle(b,null),d=c.getPropertyValue("visibility"),e=c.getPropertyValue("display");return"hidden"==d||"none"==e?(a.technique=OVVCheck.CSS_INVISIBILITY,a.viewabilityState=OVVCheck.UNVIEWABLE,!0):!1},H=function(a,b){var c=b.getBoundingClientRect(),d=1,e=c.left+d,f=c.right-d,g=c.top+d,h=c.bottom-d,i=Math.floor(c.left+c.width/2),j=Math.floor(c.top+c.height/2),k=[{x:e,y:g},{x:i,y:g},{x:f,y:g},{x:e,y:j},{x:i,y:j},{x:f,y:j},{x:e,y:h},{x:i,y:h},{x:f,y:h}];for(var l in k)if(k[l]&&k[l].x>=0&&k[l].y>=0&&(elem=document.elementFromPoint(k[l].x,k[l].y),null!=elem&&elem!=b&&!b.contains(elem)&&(overlappingArea=I(c,elem.getBoundingClientRect()),overlappingArea>0&&(a.percentObscured=100*I(c,elem.getBoundingClientRect()),a.percentObscured>50))))return a.percentViewable=100-a.percentObscured,a.technique=OVVCheck.DOM_OBSCURING,a.viewabilityState=OVVCheck.UNVIEWABLE,!0;return!1},I=function(a,b){var c=a.width*a.height,d=Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left)),e=Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));return d*e/c},J=function(a,b){a.percentObscured=a.percentObscured||0;var c=y.getViewabilityState(b,window);return c.error||(a.clientWidth=c.clientWidth,a.clientHeight=c.clientHeight,a.percentViewable=c.percentViewable-a.percentObscured,a.objTop=c.objTop,a.objBottom=c.objBottom,a.objLeft=c.objLeft,a.objRight=c.objRight),c},K=function(a){if(!L())return null;var b=0,c=0,f=0,g=0;a.beacons=new Array(e);var u=d.getClientRects?d.getClientRects()[0]:{top:-1,bottom:-1,left:-1,right:-1};a.objTop=u.top,a.objBottom=u.bottom,a.objLeft=u.left,a.objRight=u.right;for(var v=0;e>=v;v++)if(0!==v){var w=P(v),x=S(v),y=w.isViewable(),z=O(x);if(a.beacons[v]=y&&z,y)switch(b++,v){case i:case j:case k:case l:c++;break;case m:case n:case o:case p:f++;break;case q:case r:case s:case t:g++}}if(b===e)return!0;var A=a.beacons;return A[h]===!1?g>=3||f>=3||c>=3?null:!1:A[h]===!0&&(A[i]===!0&&A[j]===!0||A[i]===!0&&A[k]===!0||A[j]===!0&&A[l]===!0||A[k]===!0&&A[l]===!0)?!0:A[h]===!0&&4==f?!0:(!A[i]||!A[l]||A[m]&&A[q]&&A[h]&&A[t]&&A[p])&&(!A[k]||!A[j]||A[o]&&A[s]&&A[h]&&A[r]&&A[n])?!1:null},L=function(){return d?w===e:!1},M=function(a){var b="LRU_FWS_NOCAEB",c=b.split("").reverse().join("");if(""!=a&&a!=c){for(var d=0;e>=d;d++){var f=document.createElement("DIV");f.id="OVVBeaconContainer_"+d+"_"+v,f.style.position="absolute",f.style.zIndex=$zovvObj.DEBUG?99999:-99999;var g='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+x+'" height="'+x+'"><param name="movie" value="'+a+'" /><param name="quality" value="low" /><param name="flashvars" value="id='+v+"&index="+d+'" /><param name="bgcolor" value="#ffffff" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><!--[if!IE]>--><object id="OVVBeacon_'+d+"_"+v+'" type="application/x-shockwave-flash" data="'+a+'" width="'+x+'" height="'+x+'"><param name="quality" value="low" /><param name="flashvars" value="id='+v+"&index="+d+'" /><param name="bgcolor" value="#ff0000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><!--<![endif]--></object>';f.innerHTML=g,document.body.insertBefore(f,document.body.firstChild)}N.bind(this)(),this.positionInterval=setInterval(N.bind(this),u)}},N=function(){if(L()){var a=d.getClientRects()[0];if(!c||!a||c.left!==a.left||c.right!==a.right||c.top!==a.top||c.bottom!==a.bottom){c=a;for(var b=a.right-a.left,u=a.bottom-a.top,v=b/(1+f),w=u/(1+f),y=b/f,z=u/f,A=0;e>=A;A++){var B=a.left+document.body.scrollLeft,C=a.top+document.body.scrollTop;switch(A){case g:B=-1e5,C=-1e5;break;case h:B+=(b-x)/2,C+=(u-x)/2;break;case i:break;case j:B+=b-x;break;case k:C+=u-x;break;case l:B+=b-x,C+=u-x;break;case m:B+=(b-y)/2,C+=(u-z)/2;break;case n:B+=(b-y)/2+y,C+=(u-z)/2;break;case o:B+=(b-y)/2,C+=(u-z)/2+z;break;case p:B+=(b-y)/2+y,C+=(u-z)/2+z;break;case q:B+=(b-v)/2,C+=(u-w)/2;break;case r:B+=(b-v)/2+v,C+=(u-w)/2;break;case s:B+=(b-v)/2,C+=(u-w)/2+w;break;case t:B+=(b-v)/2+v,C+=(u-w)/2+w}A>=m&&(B-=x/2,C-=x/2);var D=S(A);D.style.left=B+"px",D.style.top=C+"px"}}}},O=function(a){if(!a)return!1;var b=Math.max(document.body.clientWidth,window.innerWidth),c=Math.max(document.body.clientHeight,window.innerHeight),d=a.getClientRects()[0];return d.top<c&&d.bottom>0&&d.left<b&&d.right>0},P=function(a){return z(a)}.memoize(),Q=function(a){return document.getElementById("OVVBeacon_"+a+"_"+v)},R=function(a){var b=document.getElementById("OVVFrame_"+v+"_"+a),c=null;return b&&(c=b.contentWindow),c},S=function(a){return A(a)}.memoize(),T=function(a){return document.getElementById("OVVBeaconContainer_"+a+"_"+v)},U=function(a){return document.getElementById("OVVFrame_"+v+"_"+a)},V=function(){var a=document.getElementById(v);return a};d=V(),0==$zovvObj.geometrySupported||$zovvObj.DEBUG?$zovvObj.browser.ID===$zovvObj.browserIDEnum.Firefox?(z=R,A=U):(z=Q,A=T,M.bind(this)("BEACON_SWF_URL")):d&&d["onJsReady"+a]&&setTimeout(function(){d["onJsReady"+a]()},5)}function OVVGeometryViewabilityCalculator(){this.getViewabilityState=function(d,e){var f,g=a();if(g.area==1/0)return{error:"Failed to determine viewport"};var h=d.getBoundingClientRect(),i=h.width*h.height;if(g.area/i<.5)f=Math.floor(100*g.area/i),j=g;else{var j=b(window.top),k=c(d,e);k.bottom>j.height&&(k.height-=k.bottom-j.height),k.top<0&&(k.height+=k.top),k.left<0&&(k.width+=k.left),k.right>j.width&&(k.width-=k.right-j.width),f=Math.floor(100*(k.width*k.height)/i)}return{clientWidth:j.width,clientHeight:j.height,objTop:h.top,objBottom:h.bottom,objLeft:h.left,objRight:h.right,percentViewable:f}};var a=function(){for(var a=b(window),c=a.area,d=window;d!=window.top;)d=d.parent,viewPortSize=b(d),viewPortSize.area<c&&(c=viewPortSize.area,a=viewPortSize);return a},b=function(a){var b={width:1/0,height:1/0,area:1/0};return!isNaN(a.document.body.clientWidth)&&a.document.body.clientWidth>0&&(b.width=a.document.body.clientWidth),!isNaN(a.document.body.clientHeight)&&a.document.body.clientHeight>0&&(b.height=a.document.body.clientHeight),a.document.documentElement&&a.document.documentElement.clientWidth&&!isNaN(a.document.documentElement.clientWidth)&&(b.width=a.document.documentElement.clientWidth),a.document.documentElement&&a.document.documentElement.clientHeight&&!isNaN(a.document.documentElement.clientHeight)&&(b.height=a.document.documentElement.clientHeight),a.innerWidth&&!isNaN(a.innerWidth)&&(b.width=Math.min(b.width,a.innerWidth)),a.innerHeight&&!isNaN(a.innerHeight)&&(b.height=Math.min(b.height,a.innerHeight)),b.area=b.height*b.width,b},c=function(a,b){var e=b,f=b.parent,g={width:0,height:0,left:0,right:0,top:0,bottom:0};if(a){var h=d(a,b);if(h.width=h.right-h.left,h.height=h.bottom-h.top,g=h,e!=f){var i=c(e.frameElement,f);i.bottom<g.bottom&&(i.bottom<g.top&&(g.top=i.bottom),g.bottom=i.bottom),i.right<g.right&&(i.right<g.left&&(g.left=i.right),g.right=i.right),g.width=g.right-g.left,g.height=g.bottom-g.top}}return g},d=function(a,b){var c=b,e=b.parent,f={left:0,right:0,top:0,bottom:0};if(a){var g=a.getBoundingClientRect();c!=e&&(f=d(c.frameElement,e)),f={left:g.left+f.left,right:g.right+f.left,top:g.top+f.top,bottom:g.bottom+f.top}}return f}}function getViewabilityObject(a){var b=new ZOVVAsset(a,{geometryViewabilityCalculator:new OVVGeometryViewabilityCalculator});return b}function ZViewability(){}function ViewabilityMonitor(a,b){this.ovvAssetObject=b,this.onAdViewableImpressionCB=function(){},this.onTwentyPercentViewableCB=function(){},this.onFourtyPercentViewableCB=function(){},this.onSixtyPercentViewableCB=function(){},this.onEightyPercentViewableCB=function(){},this.onHundredPercentViewableCB=function(){},this.onViewableStateChangeCB=function(a,b){},this.onUnmesurableCB=function(){},this.config={IntervalForPullingViewablityMs:100,debugMode:!1},this.setConfig(a),this.pullViewabilityTimer={},this.analyerObj=new ViewabilityAnalyzer,this.lastCallback=0,this.lastViabilityState="",this.lastIabViewableState="",this.isIabViewableFired=!1,this.isUserIntract=!1,this.calculateViewabilityWith=50,this.viewableSince=zViewabilityUtils.getFutureDate(),this.IABLARGEADSIZEPIXEL=242500,this.isViewable=function(){return this.lastViabilityState===ZState.VIEWABLE}}function ViewabilityAnalyzer(){}function ZState(){}function zViewabilityUtils(){}function zCallbackManager(){}OVVCheck.UNMEASURABLE="unmeasurable",OVVCheck.VIEWABLE="viewable",OVVCheck.UNVIEWABLE="unviewable",OVVCheck.NOT_READY="not_ready",OVVCheck.BEACON="beacon",OVVCheck.GEOMETRY="geometry",OVVCheck.CSS_INVISIBILITY="css_invisibility",OVVCheck.DOM_OBSCURING="dom_obscuring",Function.prototype.memoized=function(a){return this._cacheValue=this._cacheValue||{},void 0!==this._cacheValue[a]?this._cacheValue[a]:this._cacheValue[a]=this.apply(this,arguments)},Function.prototype.memoize=function(){var a=this;return function(){return a.memoized.apply(a,arguments)}};var newOVV=new zzOVV;window.$zovvObj=window.$zovvObj||newOVV;for(var i in newOVV)$zovvObj.hasOwnProperty(i)||($zovvObj[i]=newOVV[i]);window.$zovvObj.addAsset(new ZOVVAsset("OVVID",{geometryViewabilityCalculator:new OVVGeometryViewabilityCalculator})),ZViewability.getViewabilityMonitor=function(a,b,c){try{var d=getViewabilityObject(a.id),e=d.checkViewability();if(""==e.viewabilityState||e.viewabilityState==ZState.UNMEASURABLE||e.viewabilityState==ZState.NOT_READY)c("Can't measure viewability");else{var f=new ViewabilityMonitor(a,d);b(f),f.startViewability()}}catch(g){a.debugMode&&console.error(g),c("Error due to construct object")}},ViewabilityMonitor.prototype={startViewability:function(){var a=this,b=function(){zViewabilityUtils.log("debug","startAnalysing ",a.config.debugMode);var b=a.ovvAssetObject.checkViewability(),c=a.createStateObject(b),d=function(){a.lastCallback=zCallbackManager.ZERO_PERCENTAAGE.Name},e=function(){a.lastCallback=zCallbackManager.TWENTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onTwentyPercentViewableCB,[])},f=function(){a.lastCallback=zCallbackManager.FORTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onFourtyPercentViewableCB,[])},g=function(){a.lastCallback=zCallbackManager.SIXTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onSixtyPercentViewableCB,[])},h=function(){a.lastCallback=zCallbackManager.EIGHTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onEightyPercentViewableCB,[])},i=function(){a.lastCallback=zCallbackManager.HUNDRED_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onHundredPercentViewableCB,[])},j=function(b){a.lastViabilityState=b,zViewabilityUtils.asyncCallback(a.onViewableStateChangeCB,[b])},k=function(){a.lastCallback=ZState.UNMEASURABLE,zViewabilityUtils.asyncCallback(a.onUnmesurableCB,[])};a.analyerObj.analyzeViewability(c,a.lastCallback,d,e,f,g,h,i,j,a.lastViabilityState,k,a.config),a.calculateViewabilityWith=a.getIabViewabilityCriteria(c.height,c.width);var l=function(b,c,d){a.isIabViewableFired=!0,zViewabilityUtils.asyncCallback(a.onAdViewableImpressionCB,[b,c,d])},m=function(b){a.lastIabViewableState=b,a.lastIabViewableState==ZState.VIEWABLE?a.viewableSince=zViewabilityUtils.getCurrentTime():a.lastIabViewableState==ZState.UNVIEWABLE&&(a.viewableSince=zViewabilityUtils.getFutureDate())};a.analyerObj.analyzeIabViewability(c,a.isIabViewableFired,l,a.isUserIntract,a.calculateViewabilityWith,a.viewableSince,a.lastIabViewableState,m,zViewabilityUtils.getCurrentTime(),a.config)};b(),this.pullViewabilityTimer=setInterval(b,this.config.IntervalForPullingViewablityMs)},createStateObject:function(a){return{viewablePercentage:Math.round(a.percentViewable),viewabilityState:a.viewabilityState,height:zViewabilityUtils.getElementHeight(this.config.id),width:zViewabilityUtils.getElementWidth(this.config.id),focus:a.focus}},getIabViewabilityCriteria:function(a,b){var c=a*b;return c<this.IABLARGEADSIZEPIXEL?50:30},onAdViewableImpression:function(a){this.onAdViewableImpressionCB=a},onTwentyPercentViewable:function(a){this.onTwentyPercentViewableCB=a},onFourtyPercentViewable:function(a){this.onFourtyPercentViewableCB=a},onSixtyPercentViewable:function(a){this.onSixtyPercentViewableCB=a},onEightyPercentViewable:function(a){this.onEightyPercentViewableCB=a},onHundredPercentViewable:function(a){this.onHundredPercentViewableCB=a},onViewableStateChange:function(a){this.onViewableStateChangeCB=a},onUnmesurable:function(a){this.onUnmesurableCB=a},userIntraction:function(){this.isUserIntract=!0},getViewability:function(){var a=this.createStateObject(this.ovvAssetObject.checkViewability());return a},stopViewabilityMonitor:function(){clearInterval(this.pullViewabilityTimer)},setConfig:function(a){if(a)for(var b in a)a.hasOwnProperty(b)&&(this.config[b]=a[b])}},ViewabilityAnalyzer.prototype={analyzeViewability:function(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t=!1;if(zViewabilityUtils.log("debug"," viewablePercentage "+a.viewablePercentage+" lastCallback "+b,l.debugMode),isNaN(a.viewablePercentage)&&b!=ZState.UNMEASURABLE&&a.viewabilityState==ZState.UNMEASURABLE)return k(),!1;s=(a.viewablePercentage==zCallbackManager.ZERO_PERCENTAAGE.Min||a.viewablePercentage<zCallbackManager.ZERO_PERCENTAAGE.Min)&&a.focus,s&&(t=zCallbackManager.ZERO_PERCENTAAGE.Name),m=a.viewablePercentage>=zCallbackManager.TWENTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.TWENTY_PERCENTAGE.Max&&a.focus,m&&(t=zCallbackManager.TWENTY_PERCENTAGE.Name),n=a.viewablePercentage>=zCallbackManager.FORTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.FORTY_PERCENTAGE.Max&&a.focus,n&&(t=zCallbackManager.FORTY_PERCENTAGE.Name),o=a.viewablePercentage>=zCallbackManager.SIXTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.SIXTY_PERCENTAGE.Max&&a.focus,o&&(t=zCallbackManager.SIXTY_PERCENTAGE.Name),p=a.viewablePercentage>=zCallbackManager.EIGHTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.EIGHTY_PERCENTAGE.Max&&a.focus,p&&(t=zCallbackManager.EIGHTY_PERCENTAGE.Name),q=a.viewablePercentage>=zCallbackManager.HUNDRED_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.HUNDRED_PERCENTAGE.Max&&a.focus,q&&(t=zCallbackManager.HUNDRED_PERCENTAGE.Name);var u=function(a){switch(w){case 0:c();break;case 20:d();break;case 40:e();break;case 60:f();break;case 80:g();break;case 100:h()}};if(t>b){var v=t;if(t=b,b=v,t!==!1)for(var w=t+zCallbackManager.FREQUENCY;b>=w;w+=zCallbackManager.FREQUENCY)u(w)}else if(b>t&&t!==!1)for(var w=b-zCallbackManager.FREQUENCY;w>=t;w-=zCallbackManager.FREQUENCY)u(w);r=a.viewablePercentage>zCallbackManager.ONSTATECHANGE_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.ONSTATECHANGE_PERCENTAGE.Max&&a.focus,r&&j!=ZState.VIEWABLE?i(ZState.VIEWABLE):r||j==ZState.UNVIEWABLE||i(ZState.UNVIEWABLE)},analyzeIabViewability:function(a,b,c,d,e,f,g,h,i,j){if(!b){a.viewablePercentage>=e?g!=ZState.VIEWABLE&&h(ZState.VIEWABLE):g!=ZState.UNVIEWABLE&&h(ZState.UNVIEWABLE);var k=i.getTime()-f.getTime();zViewabilityUtils.log("debug"," currentTime-"+i+" viewableSince-"+f,j.debugMode),zViewabilityUtils.log("debug"," diff "+k,j.debugMode),(k>=1e3||d)&&c(d,a.height,a.width)}}},ZState.VIEWABLE="viewable",ZState.UNVIEWABLE="unviewable",ZState.UNMEASURABLE="unmeasurable",ZState.NOT_READY="not_ready",zViewabilityUtils.getCurrentTime=function(){return new Date},zViewabilityUtils.getFutureDate=function(){var a=new Date;return a.setFullYear(4e3),a},zViewabilityUtils.log=function(a,b,c){if(c)switch(a.toLowerCase()){case"warn":console.warn(b);break;case"info":console.info(b);break;case"error":console.error(b);break;case"trace":console.trace(b);break;case"bizlogic":"undefined"!=typeof console.bizlogic&&console.bizlogic(b);break;default:console.log(b)}},zViewabilityUtils.asyncCallback=function(a,b){setTimeout(function(){a.apply(this,b)},0)},zViewabilityUtils.getElementHeight=function(a){return document.getElementById(a)?document.getElementById(a).clientHeight:0},zViewabilityUtils.getElementWidth=function(a){return document.getElementById(a)?document.getElementById(a).clientWidth:0},zCallbackManager.FREQUENCY=20,zCallbackManager.ZERO_PERCENTAAGE={Min:0,Max:0,Name:0},zCallbackManager.TWENTY_PERCENTAGE={Min:20,Max:39,Name:20},zCallbackManager.FORTY_PERCENTAGE={Min:40,Max:59,Name:40},zCallbackManager.SIXTY_PERCENTAGE={Min:60,Max:79,Name:60},zCallbackManager.EIGHTY_PERCENTAGE={Min:80,Max:98,Name:80},zCallbackManager.HUNDRED_PERCENTAGE={Min:99,Max:100,Name:100},zCallbackManager.UNMEASURABLE_PERCENTAGE={Min:-1,Max:-1,Name:"Unmeasurable"},zCallbackManager.ONSTATECHANGE_PERCENTAGE={Min:1,Max:100,Name:"ViewableStateChange"};

var zd_usp,callUspAPI=function(o,a){for(var e=!1,n=function(a,n){e||(e=!0,n?(console.log(a),o("string"==typeof a?a:a.uspString)):(console.log("USP API response failed "),o()))},t={},s=window,i=s.__uspapi,c="function"==typeof i?s:void 0;!i;){try{"function"==typeof(i=s.__uspapi)&&(c=s)}catch(o){}if(s===window.top)break;s=s.parent}if(!c)for(s=window;!c;){try{s.frames.__uspapiLocator&&(c=s,frames.__uspapiLocator.contentDocument||frames.__uspapiLocator.contentWindow.document)}catch(o){}if(s===window.top)break;s=s.parent}if(c)try{c.__uspapi("getUSPData",1,n)}catch(o){console.log(o);function p(o){var a=o&&o.data&&o.data.__uspapiReturn;a&&a.callId&&void 0!==t[a.callId]&&(t[a.callId](a.returnValue,a.success),delete t[a.callId])}function r(o,a){window.removeEventListener("w4",p,!1),n(o,a)}window.addEventListener("w4",p,!1),setTimeout(function(){var o,a,e,n,s;o="getUSPData",a=1,e=r,n=Math.random()+"",s={__uspapiCall:{command:o,n9:a,callId:n}},t[n]=e,c.postMessage(s,"*")},a)}else console.log("USP API frame not found "),o()},uspResponseCallback=function(o){zd_usp=o};
function TagDimDet(tag_dimid,tag_height,tag_width){
this.tag_dimid=tag_dimid;
this.tag_height=tag_height;
this.tag_width=tag_width;
}
function get_best_dim_for_display(dimDetArr,scrWidth,scrHeight){
if(typeof dimDetArr=='undefined'||dimDetArr.length==0||typeof scrWidth=='undefined'||typeof scrHeight=='undefined'){
return;
}
dimDetArr.sort(compareWidth);
dimDetArr.sort(compareHeightWhenWidthEqual);
var defaultDim=dimDetArr[dimDetArr.length-1];
for(i=0;i<dimDetArr.length;i++){
if(parseInt(dimDetArr[i].tag_width)<=parseInt(scrWidth)&&parseInt(dimDetArr[i].tag_height)<=parseInt(scrHeight)){
return dimDetArr[i].tag_dimid;
}}
for(i=0;i<dimDetArr.length;i++){
if(parseInt(dimDetArr[i].tag_width)<=parseInt(scrWidth)){
return dimDetArr[i].tag_dimid;
}}
dimDetArr.reverse();
dimDetArr.sort(compareHeight);
for(i=0;i<dimDetArr.length;i++){
if(parseInt(dimDetArr[i].tag_height)<=parseInt(scrHeight)){
return dimDetArr[i].tag_dimid;
}}
return defaultDim.tag_dimid;
}
function compareHeightWhenWidthEqual(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function compareWidth(a,b){
if(parseInt(a.tag_width)>parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_width)<parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function compareHeight(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)){
return 1;
}else{
return 0;
}}
function get_dim_for_display(msize,scrWidth,scrHeight){
if(typeof msize=='undefined'){
return;
}
var arr=msize.replace(/^\s+|\s+$/g,'').split(",");var dimDetArr=new Array();
for(i=0;i<arr.length;i++){
var trimVal=arr[i].replace(/^\s+|\s+$/g,'');
if(null!=trimVal.match(/^\d+x\d+:\d+$/)){
dimDetArr.push(getDimDetail(trimVal));
}}
return get_best_dim_for_display(dimDetArr,scrWidth,scrHeight);
}
function getDimDetail(val){
var arr=val.split(":");var arr2=arr[0].split("x");
return new TagDimDet(arr[1],arr2[1],arr2[0]);
}
function zd_detect_page_url(isJSTag){
var zd_pg='';var inIframeDepth=zd_get_friendly_iframe_depth();
try{
if(inIframeDepth>1){
var win=zd_get_friendly_iframe_top_win(inIframeDepth);
if(inIframe(win)){
zd_pg=(typeof(win.document.referrer)=='undefined'?"":win.document.referrer.split("?")[0]);
}
else{
zd_pg=(typeof(win.location.href)=='undefined'?"":win.location.href.split("?")[0]);
}
}else{
if(isJSTag){
zd_pg=(typeof(location.href)=='undefined'?"":location.href.split("?")[0]);
}else{
zd_pg=(typeof(document.referrer)=='undefined'?"":document.referrer.split("?")[0]);
}}
}catch(err){}
return zd_pg;
}
function zd_get_page_ref(isJSTag){
var zd_ref='';
try{
if(isJSTag){
zd_ref=(typeof(document.referrer)=='undefined'?"":encodeURIComponent(document.referrer.split("?")[0]));
}
}catch(e){}
return zd_ref;
}
function zd_get_domain(url){
var domain="";
try{
if(url&&url.length>0){
if(url.indexOf("://")>-1){
domain=url.split('/')[2];
}else{
domain=url.split('/')[0];
}}
}catch(t){}
return domain;
}
function zd_get_top_parent_stack_url(){
var url="";
try{
if(!window.location.ancestorOrigins){
return "";
}
url=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]||"";
}catch(t){}
return url;
}
function zd_get_stack_url_depth(stackTopUrl){
var depth="";
try{
if(window.location.ancestorOrigins&&stackTopUrl.length>0){
depth=window.location.ancestorOrigins.length-1;
}
}catch(t){}
return depth;
}
function zd_get_page_url(isJSTag,zd_pg_url){
var zd_pg='';
try{
if(zd_pg_url!=''){
zd_pg=decodeURIComponent(zd_pg_url);
zd_pg=zd_pg.split("?")[0];
}else{
zd_pg=zd_detect_page_url(isJSTag);
}
var zd_stack_top=zd_get_top_parent_stack_url();
if(zd_stack_top!=null&&zd_stack_top.length>0){
zd_pg_dom=zd_get_domain(zd_pg);
zd_stack_top_dom=zd_get_domain(zd_stack_top);
if(zd_pg_dom!=zd_stack_top_dom){
zd_pg=zd_stack_top.split("?")[0];
}}
}catch(err){}
return encodeURIComponent(zd_pg);
}
function zd_get_tpu(passedPu){
var passed_dom,detected_dom;
if(typeof(passedPu)!='undefined'&&passedPu!=null&&passedPu!=''){
passed_dom=zd_get_domain(decodeURIComponent(passedPu));
var zd_stack_top=zd_get_top_parent_stack_url();
if(zd_stack_top!=null&&zd_stack_top.length>0){
detected_dom=zd_get_domain(zd_stack_top);
if(passed_dom==detected_dom){
return 1;
}else{
return 2;
}
}else{
return 3;
}}
return '';
}
function zd_get_friendly_iframe_depth(){
var count=0,frame;
do{
try{
frame=frame?frame.parent:window;
count++;
}catch(t){}
}
while(frame!==window.top&&count<20);
return count;
}
function isParentAccessible(win){
try{
win.document.location&&win.parent.document.location;
return true;
}catch(e){
return false;
}}
function inIframe(win){
return(win.frameElement&&win.frameElement.tagName=="IFRAME");
}
function inFriendlyIframe(win){
return(!isParentAccessible(win)?false:inIframe(win));
}
function zd_get_friendly_iframe_top_win(iframeDepth){
var currentWindow=window;var cnt=0;
while(inFriendlyIframe(currentWindow)&&cnt<iframeDepth){
try{
currentWindow=window.parent;
cnt++;
}catch(t){}
}
try{
return currentWindow;
}catch(t){
return window;
}}
var z0="";
callUspAPI(uspResponseCallback,10);
if(isValidNetwork()){
z0=v10+'/fm/'+zd_networkID+'/'+zd_cat+'/'+zd_sz+'/fm.js'+'?c='+zd_cat+'&a='+zd_chlimit+'&f='+zd_pos_num+'&n='+zd_networkID+'&r='+zd_richmedia+'&d='+zd_sz+'&adm='+zd_adm+'&q='+zd_kw+'&$='+zd_$+zd_pbvars+zd_tmy+'&s='+w5+zd_geo_param+zd_custom_param+zd_click+zd_wrap_tag+zd_title+'&ct='+zd_custom_targeting+zd_dm_values_str+'&z='+Math.random()+'&tt=0'+zd_multi_param+'&tz='+zd_timezone_offset+'&fw='+zd_fixWidth+'&fh='+zd_fixHeight+'&mw='+zd_minWidth+'&mh='+zd_minHeight+'&mxw='+zd_maxWidth+'&mxh='+zd_maxHeight+'&pu='+zd_get_page_url(true,zd_pg_url)+'&ru='+((zd_ref_url!='')?encodeURI(zd_ref_url.split("?")[0]):zd_get_page_ref(true))+'&pi='+zd_pg_id+'&apv='+zd_autoPlayViewPercent+'&ap='+zd_autoPlay+'&ovr='+zd_onVideoReady+'&ove='+zd_onVideoError+'&hfs='+zd_hideFullScreenIcon+'&ce='+n0+'&zpu='+zd_get_top_prnt_url_options(true)+'&tpu='+(zd_get_tpu(zd_pg_url))+'&usp='+zd_usp;
z0='<scr'+'ipt language="javascript" src="'+z0+'" charset='+n0+'></scr'+'ipt>';
}
var e26=zd_getCookie("ZEDOIDA");
if(!(e26=="OPT_OUT"&&zd_sz==15)){
document.write(z0);
}