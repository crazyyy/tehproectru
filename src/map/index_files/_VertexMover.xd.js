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

window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","esri.toolbars._VertexMover"],["require","dojox.gfx.move"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["esri.toolbars._VertexMover"]){_4._hasResource["esri.toolbars._VertexMover"]=true;_4.provide("esri.toolbars._VertexMover");_4.require("dojox.gfx.move");_4.declare("esri.toolbars.VertexMover",null,{constructor:function(_7,_8,_9,_a,_b,_c,_d,_e){this.point=_7;this.symbol=_8;this.relatedGraphic=_9;this.segIndex=_a;this.ptIndex=_b;this.segLength=_c;this.editor=_d;this.map=_d.map;this._scratchGL=_d.toolbar._scratchGL;this._placeholder=_e||false;this._type=_9.geometry.type;this._init();this._enable();},refresh:function(_f){if(_f||this._needRefresh()){this._disable();this._enable();}},destroy:function(){this._disable();if(this.graphic){this._scratchGL.remove(this.graphic);}this.point=this.symbol=this.graphic=this.relatedGraphic=this.segIndex=this.ptIndex=this.segLength=this.editor=this.map=this._scratchGL=null;},_init:function(){var _10=new esri.geometry.Point(this.point.toJson());var _11=new esri.Graphic(_10,this.symbol);switch(this._type){case "multipoint":_11._shape=this.relatedGraphic.getDojoShape().children[this.ptIndex];break;case "polyline":case "polygon":this._scratchGL.add(_11);break;}this.graphic=_11;},_enable:function(){var _12=this.graphic.getDojoShape();if(_12){_12._hasMover=true;this._moveable=this._getMoveable(_12);var _13=_12.getEventSource();if(_13){_4.style(_13,"cursor",this.editor.toolbar._cursors[this._placeholder?"move-gv":"move-v"]);}}},_disable:function(){var _14=this._moveable;if(_14){_4.disconnect(this._startHandle);_4.disconnect(this._firstHandle);_4.disconnect(this._movingHandle);_4.disconnect(this._stopHandle);var _15=_14.shape;if(_15){var _16=_15.getEventSource();if(_16){_4.style(_16,"cursor",null);}}_14.destroy();this._moveable=null;}},_needRefresh:function(){var _17=this.graphic.getDojoShape(),_18=false;if(_17){switch(this._type){case "multipoint":var _19=this.relatedGraphic.getDojoShape();if(_19){var _1a=_19.children[this.ptIndex];if(_17!==_1a){_17=_1a;this.graphic._shape=_17;_18=true;}}break;case "polyline":case "polygon":_18=!_17._hasMover;break;}}return _18;},_getMoveable:function(_1b){var _1c=new _6.gfx.Moveable(_1b,_4.isMac&&_4.isFF&&!esri.isTouchEnabled&&{leftButtonOnly:true});this._startHandle=_4.connect(_1c,"onMoveStart",this,this._moveStartHandler);this._firstHandle=_4.connect(_1c,"onFirstMove",this,this._firstMoveHandler);this._movingHandle=_4.connect(_1c,"onMoving",this,this._movingHandler);this._stopHandle=_4.connect(_1c,"onMoveStop",this,this._moveStopHandler);return _1c;},_getPtIndex:function(){return this.ptIndex+(this._placeholder?1:0);},_getInfo:function(){return {graphic:this.graphic,isGhost:this._placeholder,segmentIndex:this.segIndex,pointIndex:this._getPtIndex()};},_moveStartHandler:function(_1d){var map=this.map;if(map.snappingManager){map.snappingManager._setUpSnapping();}_1d.shape.moveToFront();this.constructor.onMoveStart(this);this.editor.toolbar.onVertexMoveStart(this.relatedGraphic,this._getInfo());},_firstMoveHandler:function(_1e){var _1f=_1e.shape;var _20=this._getControlEdges();var _21=this._scratchGL._div;var i,_22=[],_23=_1e.host.shape._wrapOffsets[0]||0;for(i=0;i<_20.length;i++){var _24=_20[i];_24.x1+=_23;_24.x2+=_23;_22.push([_21.createLine({x1:_24.x1,y1:_24.y1,x2:_24.x2,y2:_24.y2}).setStroke(this.editor._lineStroke),_24.x1,_24.y1,_24.x2,_24.y2]);}_1f._lines=_22;_1e.shape.moveToFront();this.constructor.onFirstMove(this);this.editor.toolbar.onVertexFirstMove(this.relatedGraphic,this._getInfo());},_movingHandler:function(_25){var _26=_25.shape,tx=_26.getTransform();var i,_27=_26._lines;for(i=0;i<_27.length;i++){var _28=_27[i];_28[0].setShape({x1:_28[1]+tx.dx,y1:_28[2]+tx.dy,x2:_28[3],y2:_28[4]});}this.editor.toolbar.onVertexMove(this.relatedGraphic,this._getInfo(),tx);},_moveStopHandler:function(_29){var _2a=_29.shape,tx=_2a.getTransform(),map=this.map;var _2b=this.graphic;var i,_2c=_2a._lines;if(_2c){for(i=0;i<_2c.length;i++){_2c[i][0].removeShape();}_2a._lines=null;}var ph=false,_2d=true,_2e=this._getInfo();if(tx&&(tx.dx||tx.dy)){if(this._placeholder){this._placeholder=false;ph=true;}}else{_2d=false;}var _2f;if(this.map.snappingManager){_2f=this.map.snappingManager._snappingPoint;}var _30=_2f||map.toMap(map.toScreen(_2b.geometry).offset(tx.dx,tx.dy));if(this.map.snappingManager){this.map.snappingManager._killOffSnapping();}_2a.setTransform(null);_2b.setGeometry(_30);this.constructor.onMoveStop(this,tx);this.editor.toolbar.onVertexMoveStop(this.relatedGraphic,_2e,tx);if(!_2d){this.editor.toolbar.onVertexClick(this.relatedGraphic,_2e);}if(ph){this.editor.toolbar.onVertexAdd(this.relatedGraphic,this._getInfo());}},_getControlEdges:function(){var map=this.map;var _31=this.relatedGraphic.geometry;var _32=this.segIndex,_33=this.ptIndex,_34=this.segLength;var _35=this._scratchGL._div;var _36=_35.getTransform();var sdx=_36.dx,sdy=_36.dy;var pt=map.toScreen(this.graphic.geometry);var x=pt.x-sdx,y=pt.y-sdy;var _37=[];var _38=this.editor._getControlPoints(this,_31,_32,_33,_34);if(_38[0]){_37.push({x1:x,y1:y,x2:_38[0].x-sdx,y2:_38[0].y-sdy});}if(_38[1]){_37.push({x1:x,y1:y,x2:_38[1].x-sdx,y2:_38[1].y-sdy});}return _37;}});_4.mixin(esri.toolbars.VertexMover,{onMoveStart:function(){},onFirstMove:function(){},onMoveStop:function(){}});}}};});