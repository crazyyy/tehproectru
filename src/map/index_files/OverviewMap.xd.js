/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */

window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","esri.dijit.OverviewMap"],["require","dijit._Widget"],["require","dijit._Templated"],["require","dojo.dnd.Mover"],["require","dojo.dnd.Moveable"],["require","dojo.dnd.move"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["esri.dijit.OverviewMap"]){_4._hasResource["esri.dijit.OverviewMap"]=true;_4.provide("esri.dijit.OverviewMap");_4.require("dijit._Widget");_4.require("dijit._Templated");_4.require("dojo.dnd.Mover");_4.require("dojo.dnd.Moveable");_4.require("dojo.dnd.move");(function(){var _7=[_4.moduleUrl("esri.dijit","css/OverviewMap.css")];var _8=document.getElementsByTagName("head").item(0),_9,i,il=_7.length;for(i=0;i<il;i++){_9=document.createElement("link");_9.type="text/css";_9.rel="stylesheet";_9.href=_7[i].toString();_8.appendChild(_9);}}());_4.declare("esri.dijit.OverviewMap",[_5._Widget,_5._Templated],{widgetsInTemplate:true,templateString:"<div class=\"esriOverviewMap\">\r\n  <div class=\"ovwContainer\" dojoattachpoint=\"_body\" style=\"width: ${width}px; height: ${height}px;\">\r\n    <div id=\"${id}-map\" style=\"width: 100%; height: 100%;\">\r\n      <div class=\"ovwHighlight\" dojoattachpoint=\"_focusDiv\" title=\"${NLS_drag}\" style=\"border: 1px solid ${color}; background-color: ${color};\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ovwButton ovwController\" title=\"${NLS_show}\" dojoattachpoint=\"_controllerDiv\" dojoattachevent=\"onclick: _visibilityHandler\">\r\n  </div>\r\n  <div class=\"ovwButton ovwMaximizer\" title=\"${NLS_maximize}\" dojoattachpoint=\"_maximizerDiv\" dojoattachevent=\"onclick: _maximizeHandler\">\r\n  </div>\r\n</div>\r\n",basePath:_4.moduleUrl("esri.dijit"),constructor:function(_a,_b){_4.mixin(this,esri.bundle.widgets.overviewMap);_a=_a||{};if(!_a.map){console.error("esri.dijit.OverviewMap: "+this.NLS_noMap);return;}var _c={};if(_b){this._detached=true;_c=_4.coords(_b,true);}this.map=_a.map;this.baseLayer=_a.baseLayer;this.width=_a.width||_c.w||this.map.width/4;this.height=_a.height||_c.h||this.map.height/4;this.attachTo=_a.attachTo||"top-right";this.expandFactor=_a.expandFactor||2;this.color=_a.color||"#000000";this.opacity=_a.opacity||0.5;this.maximizeButton=!!_a.maximizeButton;this.visible=!!_a.visible;this._mainMapLayer=this.map.getLayer(this.map.layerIds[0]);if(!this._mainMapLayer){console.error("esri.dijit.OverviewMap: "+this.NLS_noLayer);return;}var _d=this.baseLayer||this._mainMapLayer;var _e=this.map.spatialReference,_f=_d.spatialReference;if((_f.wkid!==_e.wkid)&&(_f.wkt!==_e.wkt)){console.error("esri.dijit.OverviewMap: "+this.NLS_invalidSR);return;}var _10=_d.declaredClass;if(_d instanceof esri.layers.TiledMapServiceLayer){if(_a.baseLayer){this.baseLayer=_a.baseLayer;}else{if(_10.indexOf("VETiledLayer")!==-1){this.baseLayer=new esri.virtualearth.VETiledLayer({resourceInfo:_d.getResourceInfo(),culture:_d.culture,mapStyle:_d.mapStyle,bingMapsKey:_d.bingMapsKey});}else{if(_10.indexOf("OpenStreetMapLayer")!==-1){this.baseLayer=new esri.layers.OpenStreetMapLayer({tileServers:_d.tileServers});}else{this.baseLayer=new esri.layers.ArcGISTiledMapServiceLayer(_d.url,{resourceInfo:_d.getResourceInfo()});}}}}else{if(_d instanceof esri.layers.DynamicMapServiceLayer){if(_a.baseLayer){this.baseLayer=_a.baseLayer;}else{if(_10.indexOf("ArcGISImageServiceLayer")!==-1){this.baseLayer=new esri.layers.ArcGISImageServiceLayer(_d.url);}else{this.baseLayer=new esri.layers.ArcGISDynamicMapServiceLayer(_d.url);this.baseLayer.setImageFormat("png24");}}}else{console.error("esri.dijit.OverviewMap: "+this.NLS_invalidType);return;}}if(this._detached){this.visible=true;}this._maximized=false;},startup:function(){this.inherited(arguments);if(_4.isIE){if(!this.domNode.parentElement){this.map.container.appendChild(this.domNode);}}else{if(!this.domNode.parentNode){this.map.container.appendChild(this.domNode);}}if(this._detached){_4.style(this._body,"display","block");_4.style(this._controllerDiv,"display","none");_4.style(this._maximizerDiv,"display","none");if(this.baseLayer.loaded){this._initialize();}else{_4.connect(this.baseLayer,"onLoad",this,this._initialize);}}else{if(this.attachTo.split("-")[0]==="bottom"){this.domNode.insertBefore(this._maximizerDiv,this._controllerDiv);}if(!this.maximizeButton){_4.addClass(this._maximizerDiv,"ovwDisabledButton");}_4.addClass(this.domNode,{"top-left":"ovwTL","top-right":"ovwTR","bottom-left":"ovwBL","bottom-right":"ovwBR"}[this.attachTo]);_4.addClass(this._controllerDiv,"ovwShow");_4.addClass(this._maximizerDiv,"ovwMaximize");if(this.visible){var _11=function(){this.visible=false;this._show();};if(this.baseLayer.loaded){_11.call(this);}else{_4.connect(this.baseLayer,"onLoad",this,_11);}}}_4.style(this._focusDiv,"opacity",this.opacity);},destroy:function(){this._deactivate();if(this.overviewMap){this.overviewMap.destroy();}this.overviewMap=this.baseLayer=null;this.inherited(arguments);},resize:function(_12){if(!_12||_12.w<=0||_12.h<=0){return;}this._resize(_12.w,_12.h);},_visibilityHandler:function(){if(this.visible){this._hide();}else{this._show();}},_show:function(){if(!this.visible){var div=this._controllerDiv;div.title=this.NLS_hide;_4.removeClass(div,"ovwShow");_4.addClass(div,"ovwHide");esri.show(this._body);esri.show(this._maximizerDiv);this._initialize();this.visible=true;}},_hide:function(){if(this.visible){var div=this._controllerDiv;div.title=this.NLS_show;_4.removeClass(div,"ovwHide");_4.addClass(div,"ovwShow");if(this._maximized){this._maximizeHandler();}esri.hide(this._body);esri.hide(this._maximizerDiv);this._deactivate();this.visible=false;}},_maximizeHandler:function(){var div=this._maximizerDiv;if(this._maximized){div.title=this.NLS_maximize;_4.removeClass(div,"ovwRestore");_4.addClass(div,"ovwMaximize");this._resize(this.width,this.height);}else{div.title=this.NLS_restore;_4.removeClass(div,"ovwMaximize");_4.addClass(div,"ovwRestore");this._resize(this.map.width,this.map.height);}this._maximized=!this._maximized;},_resize:function(_13,_14){_4.style(this._body,{width:_13+"px",height:_14+"px"});var _15=esri.config.defaults.map.panDuration,_16=this.overviewMap;esri.config.defaults.map.panDuration=0;_16.resize(true);_16.centerAt(this._focusExtent.getCenter());esri.config.defaults.map.panDuration=_15;},_initialize:function(){if(!this.overviewMap){var _17;_17=(this.overviewMap=new esri.Map(this.id+"-map",{slider:false,lods:this._overviewLods,wrapAround180:this.map.wrapAround180}));_4.connect(_17,"onLoad",this,function(){this._map_resize_override=_4.hitch(_17,this._map_resize_override);_17.disableMapNavigation();this._activate();});_17.addLayer(this.baseLayer);}else{this._activate();}},_activate:function(){var map=this.map,_18=this.overviewMap;this._moveableHandle=new _4.dnd.Moveable(this._focusDiv);this._soeConnect=_4.connect(map,"onExtentChange",this,this._syncOverviewMap);this._ufoConnect=_4.connect(map,"onPan",this,this._updateFocus);this._oecConnect=_4.connect(_18,"onExtentChange",this,this._ovwExtentChangeHandler);this._opaConnect=_4.connect(_18,"onPan",this,this._ovwPanHandler);this._ozsConnect=_4.connect(_18,"onZoomStart",this,function(){esri.hide(this._focusDiv);});this._ozeConnect=_4.connect(_18,"onZoomEnd",this,function(){esri.show(this._focusDiv);});this._omsConnect=_4.connect(this._moveableHandle,"onMoveStop",this,this._moveStopHandler);this._syncOverviewMap(map.extent,null,null,null);},_deactivate:function(){_4.disconnect(this._soeConnect);_4.disconnect(this._ufoConnect);_4.disconnect(this._oecConnect);_4.disconnect(this._opaConnect);_4.disconnect(this._ozsConnect);_4.disconnect(this._ozeConnect);_4.disconnect(this._omsConnect);if(this._moveableHandle){this._moveableHandle.destroy();}},_syncOverviewMap:function(ext,_19,_1a,lod){if(this._suspendPanHandling){this._suspendPanHandling=false;return;}this._focusExtent=ext;this.overviewMap.setExtent(ext.expand(this.expandFactor),true);},_updateFocus:function(ext){if(this._suspendPanHandling){return;}this._focusExtent=ext;this._drawFocusDiv(ext);},_drawFocusDiv:function(ext,_1b){var _1c=this.overviewMap;var tl=_1c.toScreen(new esri.geometry.Point(ext.xmin,ext.ymax,_1c.spatialReference));var br=_1c.toScreen(new esri.geometry.Point(ext.xmax,ext.ymin,_1c.spatialReference));var _1d=br.x-tl.x,_1e=br.y-tl.y,_1f=true;if((_1d>this.overviewMap.width)&&(_1e>this.overviewMap.height)){_1f=false;}_4.style(this._focusDiv,{left:tl.x+(_1b?_1b.x:0)+"px",top:tl.y+(_1b?_1b.y:0)+"px",width:_1d+"px",height:_1e+"px",display:_1f?"block":"none"});},_moveStopHandler:function(evt){var _20=this._moveableHandle.node.style;var ext=this._focusExtent;var _21=this.overviewMap;var _22=_21.toMap(new esri.geometry.Point(parseInt(_20.left,10),parseInt(_20.top,10)));var _23=new esri.geometry.Point(ext.xmin,ext.ymax,_21.spatialReference);this._focusExtent=ext.offset(_22.x-_23.x,_22.y-_23.y);if(this._maximized){this._maximizeHandler();}else{_21.centerAt(this._focusExtent.getCenter());}this._suspendPanHandling=true;this.map.setExtent(this._focusExtent);},_ovwExtentChangeHandler:function(){this._drawFocusDiv(this._focusExtent);},_ovwPanHandler:function(ext,_24){this._drawFocusDiv(this._focusExtent,_24);}});}}};});