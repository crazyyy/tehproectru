"use strict";!function(){function t(t,o,n){function c(){return o.contactUsForm.$valid}function s(){o.contactUsForm.$setDirty()}function r(){return i.isValid()?(i.processing=!0,void t.post(n.routs.contact_us,$.extend({act:"msg"},i.form)).success(function(t){i.processing=!1,i.sent=!0})):(o.contactUsForm.$setDirty(),!1)}var i=this;i.form={},i.isValid=c,i.regexp={email:n.EMAIL_REGEXP},i.reset=s,i.submit=r,function(){var t=amplify.store("contactUsForm");t&&(i.form=t)}(),o.$watch("vm.form",function(t){amplify.store("contactUsForm",t)},!0)}angular.module("app").controller("ContactUs",t),t.$inject=["$http","$scope","$window"]}();