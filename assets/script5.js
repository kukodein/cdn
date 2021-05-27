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
	x += `<div class="accordion" id="accordion`+myAssets.id+`">`;
	for (i in myAssets.assets) {
		x += `<div class="accordion-item">
				<div class="accordion-header" id="heading`+myAssets.assets[i].id+`">
					<button class="accordion-button collapsed py-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse`+myAssets.assets[i].id+`" aria-controls="collapse`+myAssets.assets[i].id+`">`+myAssets.assets[i].name+`</button>
				</div>`;
		if (myAssets.assets[i].version === undefined) {
			for (j in myAssets.assets[i].file) {
				x += `<div id="collapse`+myAssets.assets[i].id+`" class="accordion-collapse collapse" aria-labelledby="heading`+myAssets.assets[i].id+`" data-bs-parent="#accordion`+myAssets.id+`">
						<div class="accordion-body py-2">
							<div class="input-group my-2">
								<input id="`+myAssets.assets[i].file[j].id+`" class="form-control rounded form-control-sm" value="`+myAssets.assets[i].file[j].url+`"><button class="ms-1 btn btn-sm btn-outline-secondary btn-copy rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard">Copy</button>
							</div>
						</div>
					</div>`;
			}
		}
		else {
			var firstArray = myAssets.assets[i].version[0];
			var restArray = myAssets.assets[i].version.slice(1);
			x += `<div id="collapse`+myAssets.assets[i].id+`" class="accordion-collapse collapse" aria-labelledby="heading`+myAssets.assets[i].id+`" data-bs-parent="#accordion`+myAssets.id+`">
						<div class="accordion-body py-2">`;
			x += `<div class="py-2">`;

			// nav
			x += `<nav><div class="nav nav-tabs" id="nav-tab" role="tablist">`;

				// firstArray
				x += `<button class="nav-link active" id="nav-`+firstArray.id+`-tab" data-bs-toggle="tab" data-bs-target="#nav-`+firstArray.id+`" type="button" role="tab" aria-controls="nav-`+firstArray.id+`" aria-selected="true">`+firstArray.name+`</button>`;
				
				// restArray
				for (j in restArray) {
					x += `<button class="nav-link" id="nav-`+restArray[j].id+`-tab" data-bs-toggle="tab" data-bs-target="#nav-`+restArray[j].id+`" type="button" role="tab" aria-controls="nav-`+restArray[j].id+`" aria-selected="false">`+restArray[j].name+`</button>`;
				}
			x += `</div></nav>`;
			// end nav

			// tabs content
			x += `<div class="tab-content" id="nav-tabContent">`;
				
				// firstArray
				x += `<div id="nav-`+firstArray.id+`" class="tab-pane fade bg-light rounded-lg rounded-bottom p-2 shadow-sm show active" role="tabpanel" aria-labelledby="nav-`+firstArray.id+`-tab">`;
				for (k in firstArray.file) {
					x += `<div class="input-group my-2">
							<input id="`+firstArray.file[k].id+`" class="form-control rounded form-control-sm" value="`+firstArray.file[k].url+`"><button class="ms-1 btn btn-sm btn-outline-secondary btn-copy rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard">Copy</button>
						</div>`;
				} 
				x += `</div>`;

				// restArray
				for (j in restArray) {
					x += `<div id="nav-`+restArray[j].id+`" class="tab-pane fade bg-light rounded-lg rounded-bottom p-2 shadow-sm" role="tabpanel" aria-labelledby="nav-`+restArray[j].id+`-tab">`;
					for (k in restArray[j].file) {
						x += `<div class="input-group my-2">
								<input id="`+restArray[j].file[k].id+`" class="form-control rounded form-control-sm" value="`+restArray[j].file[k].url+`"><button class="ms-1 btn btn-sm btn-outline-secondary btn-copy rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard">Copy</button>
							</div>`;
					} 
					x += `</div>`;
					
				}
			// end tab content

			x += `</div></div>`;
			x += `</div></div>`;
		}
		x += `</div>`;
	}
	x += `</div>`;
	x += `<script>
			var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
			var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
				return new bootstrap.Tooltip(tooltipTriggerEl);
			});
		</script>`;
	document.getElementById(idName).innerHTML = x;
}

$(function () {
	// $('[data-toggle="tooltip"]').tooltip();
	$('[data-bs-toggle="tooltip"]').tooltip();

	// Function copy to clipboard when button clicked
	$('.btn-copy').on('click', function(){
		var idSelect = $(this).prev('input').attr('id');
		$("#demo").html(idSelect); 
		var copyText = document.getElementById(idSelect);
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		document.execCommand("copy");

		$(this).attr("data-bs-original-title","Copied!");
		$(this).tooltip('show');
		$(this).tooltip('toggle');
		$(this).attr("data-bs-original-title","Copy to clipboard");
	});

	$('.btn-image').on('click', function(){
		$('#message').tooltip('hide');
	});
	
	$("#myModal").on("hidden.bs.modal", function () {
		$('#message').tooltip('show');
	});

	$('#message').tooltip('show');
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});