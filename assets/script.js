var x = "",i,j,k,l;
var myAssets = {
	"id":"cdn",
	"name":"CDN Kukode.in",
	"assets": [
		{
			"id":"bootstrap",
			"name":"Bootstrap",
			"version": [
				{
					"id":"bs-v3",
					"name":"v3.4",
					"file": [
						{"id":"bt-v3-css", "url":"https://cdn.kukode.in/bootstrap/3/css/bootstrap.min.css"},
						{"id":"bt-v3-js", "url":"https://cdn.kukode.in/bootstrap/3/js/bootstrap.min.js"},
					]
				},
				{
					"id":"bs-v4",
					"name":"v4.6",
					"file": [
						{"id":"bt-v4-css", "url":"https://cdn.kukode.in/bootstrap/4/css/bootstrap.min.css"},
						{"id":"bt-v4-js", "url":"https://cdn.kukode.in/bootstrap/4/js/bootstrap.bundle.min.js"},
					]
				},
				{
					"id":"bs-v5",
					"name":"v5.0",
					"file": [
						{"id":"bt-v5-css", "url":"https://cdn.kukode.in/bootstrap/5/css/bootstrap.min.css"},
						{"id":"bt-v5-js", "url":"https://cdn.kukode.in/bootstrap/5/js/bootstrap.bundle.min.js"},
					]
				},
		]},
		{
			"id":"jquery", 
			"name":"jQuery", 
			"file": [
				{"id":"jquery-js", "url":"https://cdn.kukode.in/jquery/dist/jquery.min.js"},
		]},
		{
			"id":"fontawesome", 
			"name":"Font Awesome Free", 
			"file": [
				{"id":"fa-free-css", "url":"https://cdn.kukode.in/fontawesome-free/css/all.min.css"},
		]},
		{
			"id":"feathericon", 
			"name":"Feather Icon", 
			"file": [
				{"id":"feathericon-js", "url":"https://cdn.kukode.in/feathericon/plugin/feathericon/feather.min.js"},
		]},
	]
};

// Load data from array Assets
function loadAssets(idName) {
	x += `<div class="accordion" id="accordionExample">`;
	for (i in myAssets.assets) {
		x += `<div class="card">
				<div class="card-header p-1" id="heading`+myAssets.assets[i].id+`">
					<h2 class="mb-0">
						<button class="btn btn-link btn-block text-left text-dark" type="button" data-toggle="collapse" data-target="#collapse`+myAssets.assets[i].id+`" aria-controls="collapse`+myAssets.assets[i].id+`">`+myAssets.assets[i].name+`</button>
					</h2>
				</div>`;
		// x += '<h5 class="mt-3">'+myAssets.assets[i].name+'</h5>';
		if (myAssets.assets[i].version === undefined) {
			for (j in myAssets.assets[i].file) {
				x += `<div id="collapse`+myAssets.assets[i].id+`" class="collapse" aria-labelledby="heading`+myAssets.assets[i].id+`" data-parent="#accordionExample">
						<div class="card-body py-2">
							<div class="input-group my-2">
								<input id="`+myAssets.assets[i].file[j].id+`" class="form-control rounded form-control-sm" value="`+myAssets.assets[i].file[j].url+`"><button class="ml-1 btn btn-sm btn-outline-secondary btn-copy" data-toggle="tooltip" title="Copy to clipboard">Copy</button>
							</div>
						</div>
					</div>`;
			}
		}
		else {
			var firstArray = myAssets.assets[i].version[0];
			var restArray = myAssets.assets[i].version.slice(1);
			x += `<div id="collapse`+myAssets.assets[i].id+`" class="collapse" aria-labelledby="heading`+myAssets.assets[i].id+`" data-parent="#accordionExample">
						<div class="card-body py-2">`;
			x += `<div class="py-2"><nav><div class="nav nav-tabs" id="nav-tab" role="tablist">`;
			
			x += `<a class="nav-link active" id="nav-`+firstArray.id+`-tab" data-toggle="tab" href="#nav-`+firstArray.id+`" role="tab" aria-controls="nav-`+firstArray.id+`" aria-selected="true">`+firstArray.name+`</a>`;
			for (j in restArray) {
				x += `<a class="nav-link" id="nav-`+restArray[j].id+`-tab" data-toggle="tab" href="#nav-`+restArray[j].id+`" role="tab" aria-controls="nav-`+restArray[j].id+`" aria-selected="false">`+restArray[j].name+`</a>`;
			}

			x += `</div></nav><div class="tab-content" id="nav-tabContent">`;
			
			x += `<div id="nav-`+firstArray.id+`" class="tab-pane fade bg-light rounded-lg rounded-bottom p-2 show active" role="tabpanel" aria-labelledby="nav-`+firstArray.id+`-tab">`;
			for (k in firstArray.file) {
				x += `<div class="input-group my-2">
						<input id="`+firstArray.file[k].id+`" class="form-control rounded form-control-sm" value="`+firstArray.file[k].url+`"><button class="ml-1 btn btn-sm btn-outline-secondary btn-copy" data-toggle="tooltip" title="Copy to clipboard">Copy</button>
					</div>`;
			} 
			x += `</div>`;

			for (j in restArray) {
				// x += restArray[j].name+"<br>";
				x += `<div id="nav-`+restArray[j].id+`" class="tab-pane fade bg-light rounded-lg rounded-bottom p-2" role="tabpanel" aria-labelledby="nav-`+restArray[j].id+`-tab">`;
				for (k in restArray[j].file) {
					x += `<div class="input-group my-2">
							<input id="`+restArray[j].file[k].id+`" class="form-control rounded form-control-sm" value="`+restArray[j].file[k].url+`"><button class="ml-1 btn btn-sm btn-outline-secondary btn-copy" data-toggle="tooltip" title="Copy to clipboard">Copy</button>
						</div>`;
				} 
				x += `</div>`;
				
			}
			x += `</div></div>`;
			x += `</div></div>`;
		}
		x += `</div>`;
		// x += '<hr>';
	}
	x += `</div>`;
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