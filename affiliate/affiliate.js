// Data Affiliate Link & Images -----
var dataAffiliate320 = [
	{"id":1, "url":"https://niagahoster.amz", "image":"https://cdn.kukode.in/affiliate/images/ex-img-1.png"},
	{"id":2, "url":"https://mobilbaru.amz", "image":"https://cdn.kukode.in/affiliate/images/ex-img-2.png"},
	{"id":3, "url":"https://talend.amz", "image":"https://cdn.kukode.in/affiliate/images/ex-img-3.png"},
	{"id":4, "url":"https://w3schools.amz", "image":"https://cdn.kukode.in/affiliate/images/ex-img-4.png"},
	{"id":5, "url":"https://newchic.amz", "image":"https://cdn.kukode.in/affiliate/images/ex-img-5.gif"},
	{"id":6, "url":"https://detik.amz", "image":"https://cdn.kukode.in/affiliate/images/ex-img-6.jpg"},
	{"id":7, "url":"https://tokoped.amz", "image":"https://cdn.kukode.in/affiliate/images/ex-img-7.jpg"},
	{"id":8, "url":"https://panasonic.amz", "image":"https://cdn.kukode.in/affiliate/images/ex-img-8.png"},
	{"id":9, "url":"https://olx.amz", "image":"https://cdn.kukode.in/affiliate/images/ex-img-9.png"},
	{"id":10, "url":"https://nanboya.amz", "image":"https://cdn.kukode.in/affiliate/images/ex-img-10.png"},
	{"id":11, "url":"https://leminerale.amz", "image":"https://cdn.kukode.in/affiliate/images/ex-img-11.png"},
];

// Display Randomly Affiliate by ID -----
function displayRandomImage(data) {
	// Get random ID -----
	var randomID = Math.floor((Math.random() * data.length) + 1);
	var item = data.find(item => item.id === randomID);
	// Set Attribute -----
	document.getElementById("ban-link").setAttribute("href", item.url);
	document.getElementById("ban-img").src = item.image;
}

// Change Affiliate by Interval time -----
function startTimer(data) {
	document.getElementById("ban-link").setAttribute("href", dataAffiliate320[0].url);
	document.getElementById("ban-img").src = dataAffiliate320[0].image;
	
	setInterval( function() { 
		displayRandomImage(data); 
	},5000);
}

/* 	Example run the Function -----

js -----
startTimer(dataAffiliate320);

html -----
<a id="ban-link" target="_blank"><img id="ban-img"></img></a>
<script type="text/javascript" src="https://cdn.kukode.in/affiliate/affiliate.js"></script>
<script type="text/javascript">startTimer(dataAffiliate320);</script>
*/