
var gameSize = 10;
var $table = document.getElementById("gameboard");


function drawTable() {
	// var row = document.createElement("tr");

	for ( var i = 0; i < gameSize; i++ ) {
		var row = document.createElement("tr");

		for (var j = 0; j < gameSize; j++) {
			var cell = document.createElement("td"),
				a = document.createElement("a");

			a.id = "cell_"+i+"_"+j;
			//  a.href="#"+a.id;

			cell.appendChild( a );
			row.appendChild( cell );
		}

		$table.appendChild( row );
	}
}


// on page load 
document.addEventListener("DOMContentLoaded", function(){

	drawTable();

	xhr.get('/players', function ( data ) {
		console.log( data );
		data.forEach(function( player ){
			player.cells.forEach( function( cell ) {
				var unit = document.querySelector( "#cell_"+cell.locationX+"_"+cell.locationY );

				unit.href = "#"+unit.id;
				unit.style.background = "#CCC";
			});
			player.units.forEach( function( cell ) {
				// document.querySelector( "#cell_"+cell.locationX+"_"+cell.locationY ).style.background = "#F00";
			});
		});
		// document.querySelector('#pre').textContent = JSON.stringify( data, null, 2 );
	});
});