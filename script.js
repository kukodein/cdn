var x = "",i,j;
var myAssets = {
	"name":"CDN Kukode.in",
	"assets": [
		{"name":"Bootstrap 4", "file": [
			{"id":"bootstrap-4-css", "url":"https://kukode.in/cdn/bootstrap-4/assets/dist/css/bootstrap.min.css"},
			{"id":"bootstrap-4-js", "url":"https://kukode.in/cdn/bootstrap-4/assets/dist/js/bootstrap.min.js"},
			{"id":"bootstrap-4-js-budle", "url":"https://kukode.in/cdn/bootstrap-4/assets/dist/js/bootstrap.bundle.min.js"},
		]},
		{"name":"jQuery", "file": [
			{"id":"jquery-js", "url":"https://kukode.in/cdn/jquery/dist/jquery.min.js"},
		]},
		{"name":"Font Awesome Free", "file": [
			{"id":"fa-free-css", "url":"https://kukode.in/cdn/fontawesome-free/css/all.min.css"},
		]},
		{"name":"Feather Icon", "file": [
			{"id":"feathericon-js", "url":"https://kukode.in/cdn/feathericon/plugin/feathericon/feather.min.js"},
		]},
	]
};

// Load data from array Assets
function loadAssets(idName) {
	for (i in myAssets.assets) {
		x += '<h5 class="mt-3">' + myAssets.assets[i].name + '</h5>';
		for (j in myAssets.assets[i].file) {
			x += '<div class="input-group mb-2"><input id="'+myAssets.assets[i].file[j].id+'" class="form-control rounded form-control-sm" value="'+myAssets.assets[i].file[j].url+'"><button class="ml-1 btn btn-sm btn-outline-secondary" data-toggle="tooltip" title="Copy to clipboard">Copy</button></div>';
		}
		x += '<hr>';
	}
	document.getElementById(idName).innerHTML = x;
}

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	// $('#myModal').modal('show');

	// Function copy to clipboard when button clicked
	$('button').on('click', function(){
		var idSelect = $(this).prev('input').attr('id');
		$("#demo").html(idSelect); 
		var copyText = document.getElementById(idSelect);
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		document.execCommand("copy");

		$(this).attr("data-original-title","Copied!");
		$(this).tooltip('show');
		$(this).tooltip('toggle');
		$(this).attr("data-original-title","Copy to clipboard");
	});
});