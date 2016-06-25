// DZoneForwarder
// version 0.0.1 beta
// 2015-12-29
// Released under the MIT license
// ==UserScript==
// @name DZoneForwarder
// @namespace https://github.com/Litee/DZoneForwarder	
// @description GreaseMonkey script for automatically redirecting from DZone web page to the original article
// @include https://dzone.com/links/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==

var link = $('.attribution  a:first').attr('href');
if (link) {
	window.location.href = link;
}
