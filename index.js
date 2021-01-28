var button = document.querySelector("#submit")
var box = document.querySelector("#search")
var output = document.querySelector('#output')


button.addEventListener('click', (e) => { 
	display()
})

function display() {
	var url = "https://itunes.apple.com/search?term="+search.value
	var cors = "https://cors-anywhere.herokuapp.com/"

	fetch(cors+url).then(data => data.json()).then(json => { console.log(json)
	var script = ''
	json.results.forEach( song => {

			script += `

	<div class = " col s4 m4 l4">
		<div class="card">
    		<div class="card-image waves-effect waves-block waves-light">
      			<img class="activator" src="${song.artworkUrl100}">
    		</div>
    		<div class="card-content">
      			<span class="card-title activator grey-text text-darken-4" class="container">${song.trackCensoredName}<i class="material-icons right">more_vert</i></span>
      			<p>${song.artistName}</p>
    		</div>
    	<div class="card-reveal">
      		<span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      		<p>Here is some more information about this product that is only revealed once clicked on.</p>
    	</div>
  		</div>
  	</div>
	`


	//containers=document.getElementsByClassName('container')
	//containers[0].addEventListener('click', (e) => { 
	//	window.href.location.href=song.trackViewUrl
	//}) 
		})

	output.innerHTML=script
	}).catch(error => console.log(error))

}