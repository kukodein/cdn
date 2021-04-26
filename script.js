var x = "",i,j;
var myAssets = {
	"name":"CDN Kukode.in",
	"assets": [
		{
			"name":"Bootstrap 3", 
			"file": [
				{"id":"bootstrap-3-css", "url":"https://cdn.kukode.in/bootstrap/3/css/bootstrap.min.css"},
				{"id":"bootstrap-3-js", "url":"https://cdn.kukode.in/bootstrap/3/js/bootstrap.min.js"},
		]},
		{
			"name":"Bootstrap 4", 
			"file": [
				{"id":"bootstrap-4-css", "url":"https://cdn.kukode.in/bootstrap/4/css/bootstrap.min.css"},
				{"id":"bootstrap-4-js-bundle", "url":"https://cdn.kukode.in/bootstrap/4/js/bootstrap.bundle.min.js"},
		]},
		{
			"name":"Bootstrap 5", 
			"file": [
				{"id":"bootstrap-5-css", "url":"https://cdn.kukode.in/bootstrap/5/css/bootstrap.min.css"},
				{"id":"bootstrap-5-js-bundle", "url":"https://cdn.kukode.in/bootstrap/5/js/bootstrap.bundle.min.js"},
		]},
		{
			"name":"jQuery", 
			"file": [
				{"id":"jquery-js", "url":"https://cdn.kukode.in/jquery/dist/jquery.min.js"},
		]},
		{
			"name":"Font Awesome Free", 
			"file": [
				{"id":"fa-free-css", "url":"https://cdn.kukode.in/fontawesome-free/css/all.min.css"},
		]},
		{
			"name":"Feather Icon", 
			"file": [
				{"id":"feathericon-js", "url":"https://cdn.kukode.in/feathericon/plugin/feathericon/feather.min.js"},
		]},
	]
};

// Load data from array Assets
function loadAssets(idName) {
	for (i in myAssets.assets) {
		x += '<h5 class="mt-3">' + myAssets.assets[i].name + '</h5>';
		for (j in myAssets.assets[i].file) {
			x += '<div class="input-group mb-2"><input id="'+myAssets.assets[i].file[j].id+'" class="form-control rounded form-control-sm" value="'+myAssets.assets[i].file[j].url+'"><button class="ml-1 btn btn-sm btn-outline-secondary btn-copy" data-toggle="tooltip" title="Copy to clipboard">Copy</button></div>';
		}
		x += '<hr>';
	}
	document.getElementById(idName).innerHTML = x;
}

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	// $('#myModal').modal('show');

	// Function copy to clipboard when button clicked
	$('.btn-copy').on('click', function(){
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

	$('.btn-image').on('click', function(){
		$('#message').tooltip('hide');
	});
	
	$("#myModal").on("hidden.bs.modal", function () {
		$('#message').tooltip('show')
	});

	$('#message').tooltip('show')
});