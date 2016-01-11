/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.form.ComboBox"],["require","dojo.window"],["require","dojo.regexp"],["require","dojo.data.util.simpleFetch"],["require","dojo.data.util.filter"],["require","dijit._CssStateMixin"],["require","dijit.form._FormWidget"],["require","dijit.form.ValidationTextBox"],["require","dijit._HasDropDown"],["requireLocalization","dijit.form","ComboBox",null,"ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,kk,ko,nb,nl,pl,pt,pt-pt,ro,ru,sk,sl,sv,th,tr,zh,zh-tw","ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,kk,ko,nb,nl,pl,pt,pt-pt,ro,ru,sk,sl,sv,th,tr,zh,zh-tw"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.form.ComboBox"]){_4._hasResource["dijit.form.ComboBox"]=true;_4.provide("dijit.form.ComboBox");_4.require("dojo.window");_4.require("dojo.regexp");_4.require("dojo.data.util.simpleFetch");_4.require("dojo.data.util.filter");_4.require("dijit._CssStateMixin");_4.require("dijit.form._FormWidget");_4.require("dijit.form.ValidationTextBox");_4.require("dijit._HasDropDown");_4.declare("dijit.form.ComboBoxMixin",_5._HasDropDown,{item:null,pageSize:Infinity,store:null,fetchProperties:{},query:{},autoComplete:true,highlightMatch:"first",searchDelay:100,searchAttr:"name",labelAttr:"",labelType:"text",queryExpr:"${0}*",ignoreCase:true,hasDownArrow:true,templateString:_4.cache("dijit.form","templates/DropDownBox.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\r\n\tid=\"widget_${id}\"\r\n\trole=\"combobox\"\r\n\t><div class='dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer'\r\n\t\tdojoAttachPoint=\"_buttonNode, _popupStateNode\" role=\"presentation\"\r\n\t\t><input class=\"dijitReset dijitInputField dijitArrowButtonInner\" value=\"&#9660; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t\t\t${_buttonInputDisabled}\r\n\t/></div\r\n\t><div class='dijitReset dijitValidationContainer'\r\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\r\n\t/></div\r\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\r\n\t\t><input class='dijitReset dijitInputInner' ${!nameAttrSetting} type=\"text\" autocomplete=\"off\"\r\n\t\t\tdojoAttachPoint=\"textbox,focusNode\" role=\"textbox\" aria-haspopup=\"true\"\r\n\t/></div\r\n></div>\r\n"),baseClass:"dijitTextBox dijitComboBox",dropDownClass:"dijit.form._ComboBoxMenu",cssStateNodes:{"_buttonNode":"dijitDownArrowButton"},maxHeight:-1,_stopClickEvents:false,_getCaretPos:function(_7){var _8=0;if(typeof (_7.selectionStart)=="number"){_8=_7.selectionStart;}else{if(_4.isIE){var tr=_4.doc.selection.createRange().duplicate();var _9=_7.createTextRange();tr.move("character",0);_9.move("character",0);try{_9.setEndPoint("EndToEnd",tr);_8=String(_9.text).replace(/\r/g,"").length;}catch(e){}}}return _8;},_setCaretPos:function(_a,_b){_b=parseInt(_b);_5.selectInputText(_a,_b,_b);},_setDisabledAttr:function(_c){this.inherited(arguments);_5.setWaiState(this.domNode,"disabled",_c);},_abortQuery:function(){if(this.searchTimer){clearTimeout(this.searchTimer);this.searchTimer=null;}if(this._fetchHandle){if(this._fetchHandle.abort){this._fetchHandle.abort();}this._fetchHandle=null;}},_onInput:function(_d){if(!this.searchTimer&&(_d.type=="paste"||_d.type=="input")&&this._lastInput!=this.textbox.value){this.searchTimer=setTimeout(_4.hitch(this,function(){this._onKey({charOrCode:229});}),100);}this.inherited(arguments);},_onKey:function(_e){var _f=_e.charOrCode;if(_e.altKey||((_e.ctrlKey||_e.metaKey)&&(_f!="x"&&_f!="v"))||_f==_4.keys.SHIFT){return;}var _10=false;var pw=this.dropDown;var dk=_4.keys;var _11=null;this._prev_key_backspace=false;this._abortQuery();this.inherited(arguments);if(this._opened){_11=pw.getHighlightedOption();}switch(_f){case dk.PAGE_DOWN:case dk.DOWN_ARROW:case dk.PAGE_UP:case dk.UP_ARROW:if(this._opened){this._announceOption(_11);}_4.stopEvent(_e);break;case dk.ENTER:if(_11){if(_11==pw.nextButton){this._nextSearch(1);_4.stopEvent(_e);break;}else{if(_11==pw.previousButton){this._nextSearch(-1);_4.stopEvent(_e);break;}}}else{this._setBlurValue();this._setCaretPos(this.focusNode,this.focusNode.value.length);}if(this._opened||this._fetchHandle){_e.preventDefault();}case dk.TAB:var _12=this.get("displayedValue");if(pw&&(_12==pw._messages["previousMessage"]||_12==pw._messages["nextMessage"])){break;}if(_11){this._selectOption();}if(this._opened){this._lastQuery=null;this.closeDropDown();}break;case " ":if(_11){_4.stopEvent(_e);this._selectOption();this.closeDropDown();}else{_10=true;}break;case dk.DELETE:case dk.BACKSPACE:this._prev_key_backspace=true;_10=true;break;default:_10=typeof _f=="string"||_f==229;}if(_10){this.item=undefined;this.searchTimer=setTimeout(_4.hitch(this,"_startSearchFromInput"),1);}},_autoCompleteText:function(_13){var fn=this.focusNode;_5.selectInputText(fn,fn.value.length);var _14=this.ignoreCase?"toLowerCase":"substr";if(_13[_14](0).indexOf(this.focusNode.value[_14](0))==0){var _15=this._getCaretPos(fn);if((_15+1)>fn.value.length){fn.value=_13;_5.selectInputText(fn,_15);}}else{fn.value=_13;_5.selectInputText(fn);}},_openResultList:function(_16,_17){this._fetchHandle=null;if(this.disabled||this.readOnly||(_17.query[this.searchAttr]!=this._lastQuery)){return;}var _18=this.dropDown._highlighted_option&&_4.hasClass(this.dropDown._highlighted_option,"dijitMenuItemSelected");this.dropDown.clearResultList();if(!_16.length&&!this._maxOptions){this.closeDropDown();return;}_17._maxOptions=this._maxOptions;var _19=this.dropDown.createOptions(_16,_17,_4.hitch(this,"_getMenuLabelFromItem"));this._showResultList();if(_17.direction){if(1==_17.direction){this.dropDown.highlightFirstOption();}else{if(-1==_17.direction){this.dropDown.highlightLastOption();}}if(_18){this._announceOption(this.dropDown.getHighlightedOption());}}else{if(this.autoComplete&&!this._prev_key_backspace&&!/^[*]+$/.test(_17.query[this.searchAttr])){this._announceOption(_19[1]);}}},_showResultList:function(){this.closeDropDown(true);this.displayMessage("");this.openDropDown();_5.setWaiState(this.domNode,"expanded","true");},loadDropDown:function(_1a){this._startSearchAll();},isLoaded:function(){return false;},closeDropDown:function(){this._abortQuery();if(this._opened){this.inherited(arguments);_5.setWaiState(this.domNode,"expanded","false");_5.removeWaiState(this.focusNode,"activedescendant");}},_setBlurValue:function(){var _1b=this.get("displayedValue");var pw=this.dropDown;if(pw&&(_1b==pw._messages["previousMessage"]||_1b==pw._messages["nextMessage"])){this._setValueAttr(this._lastValueReported,true);}else{if(typeof this.item=="undefined"){this.item=null;this.set("displayedValue",_1b);}else{if(this.value!=this._lastValueReported){_5.form._FormValueWidget.prototype._setValueAttr.call(this,this.value,true);}this._refreshState();}}},_onBlur:function(){this.closeDropDown();this.inherited(arguments);},_setItemAttr:function(_1c,_1d,_1e){if(!_1e){_1e=this.store.getValue(_1c,this.searchAttr);}var _1f=this._getValueField()!=this.searchAttr?this.store.getIdentity(_1c):_1e;this._set("item",_1c);_5.form.ComboBox.superclass._setValueAttr.call(this,_1f,_1d,_1e);},_announceOption:function(_20){if(!_20){return;}var _21;if(_20==this.dropDown.nextButton||_20==this.dropDown.previousButton){_21=_20.innerHTML;this.item=undefined;this.value="";}else{_21=this.store.getValue(_20.item,this.searchAttr).toString();this.set("item",_20.item,false,_21);}this.focusNode.value=this.focusNode.value.substring(0,this._lastInput.length);_5.setWaiState(this.focusNode,"activedescendant",_4.attr(_20,"id"));this._autoCompleteText(_21);},_selectOption:function(evt){if(evt){this._announceOption(evt.target);}this.closeDropDown();this._setCaretPos(this.focusNode,this.focusNode.value.length);_5.form._FormValueWidget.prototype._setValueAttr.call(this,this.value,true);},_startSearchAll:function(){this._startSearch("");},_startSearchFromInput:function(){this._startSearch(this.focusNode.value.replace(/([\\\*\?])/g,"\\$1"));},_getQueryString:function(_22){return _4.string.substitute(this.queryExpr,[_22]);},_startSearch:function(key){if(!this.dropDown){var _23=this.id+"_popup",_24=_4.getObject(this.dropDownClass,false);this.dropDown=new _24({onChange:_4.hitch(this,this._selectOption),id:_23,dir:this.dir});_5.removeWaiState(this.focusNode,"activedescendant");_5.setWaiState(this.textbox,"owns",_23);}var _25=_4.clone(this.query);this._lastInput=key;this._lastQuery=_25[this.searchAttr]=this._getQueryString(key);this.searchTimer=setTimeout(_4.hitch(this,function(_26,_27){this.searchTimer=null;var _28={queryOptions:{ignoreCase:this.ignoreCase,deep:true},query:_26,onBegin:_4.hitch(this,"_setMaxOptions"),onComplete:_4.hitch(this,"_openResultList"),onError:function(_29){_27._fetchHandle=null;console.error("dijit.form.ComboBox: "+_29);_27.closeDropDown();},start:0,count:this.pageSize};_4.mixin(_28,_27.fetchProperties);this._fetchHandle=_27.store.fetch(_28);var _2a=function(_2b,_2c){_2b.start+=_2b.count*_2c;_2b.direction=_2c;this._fetchHandle=this.store.fetch(_2b);this.focus();};this._nextSearch=this.dropDown.onPage=_4.hitch(this,_2a,this._fetchHandle);},_25,this),this.searchDelay);},_setMaxOptions:function(_2d,_2e){this._maxOptions=_2d;},_getValueField:function(){return this.searchAttr;},constructor:function(){this.query={};this.fetchProperties={};},postMixInProperties:function(){if(!this.store){var _2f=this.srcNodeRef;this.store=new _5.form._ComboBoxDataStore(_2f);if(!("value" in this.params)){var _30=(this.item=this.store.fetchSelectedItem());if(_30){var _31=this._getValueField();this.value=this.store.getValue(_30,_31);}}}this.inherited(arguments);},postCreate:function(){var _32=_4.query("label[for=\""+this.id+"\"]");if(_32.length){_32[0].id=(this.id+"_label");_5.setWaiState(this.domNode,"labelledby",_32[0].id);}this.inherited(arguments);},_setHasDownArrowAttr:function(val){this.hasDownArrow=val;this._buttonNode.style.display=val?"":"none";},_getMenuLabelFromItem:function(_33){var _34=this.labelFunc(_33,this.store),_35=this.labelType;if(this.highlightMatch!="none"&&this.labelType=="text"&&this._lastInput){_34=this.doHighlight(_34,this._escapeHtml(this._lastInput));_35="html";}return {html:_35=="html",label:_34};},doHighlight:function(_36,_37){var _38=(this.ignoreCase?"i":"")+(this.highlightMatch=="all"?"g":""),i=this.queryExpr.indexOf("${0}");_37=_4.regexp.escapeString(_37);return this._escapeHtml(_36).replace(new RegExp((i==0?"^":"")+"("+_37+")"+(i==(this.queryExpr.length-4)?"$":""),_38),"<span class=\"dijitComboBoxHighlightMatch\">$1</span>");},_escapeHtml:function(str){str=String(str).replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");return str;},reset:function(){this.item=null;this.inherited(arguments);},labelFunc:function(_39,_3a){return _3a.getValue(_39,this.labelAttr||this.searchAttr).toString();}});_4.declare("dijit.form._ComboBoxMenu",[_5._Widget,_5._Templated,_5._CssStateMixin],{templateString:"<ul class='dijitReset dijitMenu' dojoAttachEvent='onmousedown:_onMouseDown,onmouseup:_onMouseUp,onmouseover:_onMouseOver,onmouseout:_onMouseOut' style='overflow: \"auto\"; overflow-x: \"hidden\";'>"+"<li class='dijitMenuItem dijitMenuPreviousButton' dojoAttachPoint='previousButton' role='option'></li>"+"<li class='dijitMenuItem dijitMenuNextButton' dojoAttachPoint='nextButton' role='option'></li>"+"</ul>",_messages:null,baseClass:"dijitComboBoxMenu",postMixInProperties:function(){this.inherited(arguments);this._messages=_4.i18n.getLocalization("dijit.form","ComboBox",this.lang);},buildRendering:function(){this.inherited(arguments);this.previousButton.innerHTML=this._messages["previousMessage"];this.nextButton.innerHTML=this._messages["nextMessage"];},_setValueAttr:function(_3b){this.value=_3b;this.onChange(_3b);},onChange:function(_3c){},onPage:function(_3d){},onClose:function(){this._blurOptionNode();},_createOption:function(_3e,_3f){var _40=_4.create("li",{"class":"dijitReset dijitMenuItem"+(this.isLeftToRight()?"":" dijitMenuItemRtl"),role:"option"});var _41=_3f(_3e);if(_41.html){_40.innerHTML=_41.label;}else{_40.appendChild(_4.doc.createTextNode(_41.label));}if(_40.innerHTML==""){_40.innerHTML="&nbsp;";}_40.item=_3e;return _40;},createOptions:function(_42,_43,_44){this.previousButton.style.display=(_43.start==0)?"none":"";_4.attr(this.previousButton,"id",this.id+"_prev");_4.forEach(_42,function(_45,i){var _46=this._createOption(_45,_44);_4.attr(_46,"id",this.id+i);this.domNode.insertBefore(_46,this.nextButton);},this);var _47=false;if(_43._maxOptions&&_43._maxOptions!=-1){if((_43.start+_43.count)<_43._maxOptions){_47=true;}else{if((_43.start+_43.count)>_43._maxOptions&&_43.count==_42.length){_47=true;}}}else{if(_43.count==_42.length){_47=true;}}this.nextButton.style.display=_47?"":"none";_4.attr(this.nextButton,"id",this.id+"_next");return this.domNode.childNodes;},clearResultList:function(){while(this.domNode.childNodes.length>2){this.domNode.removeChild(this.domNode.childNodes[this.domNode.childNodes.length-2]);}this._blurOptionNode();},_onMouseDown:function(evt){_4.stopEvent(evt);},_onMouseUp:function(evt){if(evt.target===this.domNode||!this._highlighted_option){return;}else{if(evt.target==this.previousButton){this._blurOptionNode();this.onPage(-1);}else{if(evt.target==this.nextButton){this._blurOptionNode();this.onPage(1);}else{var tgt=evt.target;while(!tgt.item){tgt=tgt.parentNode;}this._setValueAttr({target:tgt},true);}}}},_onMouseOver:function(evt){if(evt.target===this.domNode){return;}var tgt=evt.target;if(!(tgt==this.previousButton||tgt==this.nextButton)){while(!tgt.item){tgt=tgt.parentNode;}}this._focusOptionNode(tgt);},_onMouseOut:function(evt){if(evt.target===this.domNode){return;}this._blurOptionNode();},_focusOptionNode:function(_48){if(this._highlighted_option!=_48){this._blurOptionNode();this._highlighted_option=_48;_4.addClass(this._highlighted_option,"dijitMenuItemSelected");}},_blurOptionNode:function(){if(this._highlighted_option){_4.removeClass(this._highlighted_option,"dijitMenuItemSelected");this._highlighted_option=null;}},_highlightNextOption:function(){if(!this.getHighlightedOption()){var fc=this.domNode.firstChild;this._focusOptionNode(fc.style.display=="none"?fc.nextSibling:fc);}else{var ns=this._highlighted_option.nextSibling;if(ns&&ns.style.display!="none"){this._focusOptionNode(ns);}else{this.highlightFirstOption();}}_4.window.scrollIntoView(this._highlighted_option);},highlightFirstOption:function(){var _49=this.domNode.firstChild;var _4a=_49.nextSibling;this._focusOptionNode(_4a.style.display=="none"?_49:_4a);_4.window.scrollIntoView(this._highlighted_option);},highlightLastOption:function(){this._focusOptionNode(this.domNode.lastChild.previousSibling);_4.window.scrollIntoView(this._highlighted_option);},_highlightPrevOption:function(){if(!this.getHighlightedOption()){var lc=this.domNode.lastChild;this._focusOptionNode(lc.style.display=="none"?lc.previousSibling:lc);}else{var ps=this._highlighted_option.previousSibling;if(ps&&ps.style.display!="none"){this._focusOptionNode(ps);}else{this.highlightLastOption();}}_4.window.scrollIntoView(this._highlighted_option);},_page:function(up){var _4b=0;var _4c=this.domNode.scrollTop;var _4d=_4.style(this.domNode,"height");if(!this.getHighlightedOption()){this._highlightNextOption();}while(_4b<_4d){if(up){if(!this.getHighlightedOption().previousSibling||this._highlighted_option.previousSibling.style.display=="none"){break;}this._highlightPrevOption();}else{if(!this.getHighlightedOption().nextSibling||this._highlighted_option.nextSibling.style.display=="none"){break;}this._highlightNextOption();}var _4e=this.domNode.scrollTop;_4b+=(_4e-_4c)*(up?-1:1);_4c=_4e;}},pageUp:function(){this._page(true);},pageDown:function(){this._page(false);},getHighlightedOption:function(){var ho=this._highlighted_option;return (ho&&ho.parentNode)?ho:null;},handleKey:function(evt){switch(evt.charOrCode){case _4.keys.DOWN_ARROW:this._highlightNextOption();return false;case _4.keys.PAGE_DOWN:this.pageDown();return false;case _4.keys.UP_ARROW:this._highlightPrevOption();return false;case _4.keys.PAGE_UP:this.pageUp();return false;default:return true;}}});_4.declare("dijit.form.ComboBox",[_5.form.ValidationTextBox,_5.form.ComboBoxMixin],{_setValueAttr:function(_4f,_50,_51){this._set("item",null);if(!_4f){_4f="";}_5.form.ValidationTextBox.prototype._setValueAttr.call(this,_4f,_50,_51);}});_4.declare("dijit.form._ComboBoxDataStore",null,{constructor:function(_52){this.root=_52;if(_52.tagName!="SELECT"&&_52.firstChild){_52=_4.query("select",_52);if(_52.length>0){_52=_52[0];}else{this.root.innerHTML="<SELECT>"+this.root.innerHTML+"</SELECT>";_52=this.root.firstChild;}this.root=_52;}_4.query("> option",_52).forEach(function(_53){_53.innerHTML=_4.trim(_53.innerHTML);});},getValue:function(_54,_55,_56){return (_55=="value")?_54.value:(_54.innerText||_54.textContent||"");},isItemLoaded:function(_57){return true;},getFeatures:function(){return {"dojo.data.api.Read":true,"dojo.data.api.Identity":true};},_fetchItems:function(_58,_59,_5a){if(!_58.query){_58.query={};}if(!_58.query.name){_58.query.name="";}if(!_58.queryOptions){_58.queryOptions={};}var _5b=_4.data.util.filter.patternToRegExp(_58.query.name,_58.queryOptions.ignoreCase),_5c=_4.query("> option",this.root).filter(function(_5d){return (_5d.innerText||_5d.textContent||"").match(_5b);});if(_58.sort){_5c.sort(_4.data.util.sorter.createSortFunction(_58.sort,this));}_59(_5c,_58);},close:function(_5e){return;},getLabel:function(_5f){return _5f.innerHTML;},getIdentity:function(_60){return _4.attr(_60,"value");},fetchItemByIdentity:function(_61){var _62=_4.query("> option[value='"+_61.identity+"']",this.root)[0];_61.onItem(_62);},fetchSelectedItem:function(){var _63=this.root,si=_63.selectedIndex;return typeof si=="number"?_4.query("> option:nth-child("+(si!=-1?si+1:1)+")",_63)[0]:null;}});_4.extend(_5.form._ComboBoxDataStore,_4.data.util.simpleFetch);}}};});