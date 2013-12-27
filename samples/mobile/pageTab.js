﻿var myTabOption = [
	{optionValue:"AXMobileModal", optionText:"AXMobileModal", addClass:"", url:"index.html"},
	{optionValue:"mobileButton", optionText:"mobile button", addClass:"", url:"button.html"},
	{optionValue:"AXMobileMenu", optionText:"AXMobileMenu", addClass:"", url:"mobileMenu.html"}	
];

var pageTabChange = function(selectedObject, value){
	location.href = selectedObject.url;
};

$(document.body).ready(function(){
	var myPageID = "";
	try{
		myPageID = pageID;
	}catch(e){
		
	}
	$("#demoPageTabTarget").bindTab({
		value: (myPageID||""), 
		overflow: "scroll", 
		options: myTabOption, 
		onchange: pageTabChange
	});
});