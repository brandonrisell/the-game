
var gameSize = 10;
var $table = document.getElementById("gameboard");

function drawTable() {
	// var row = document.createElement("tr");

	for ( var i = 0; i < gameSize; i++ ) {
		var row = document.createElement("tr");

		for (var j = 0; j < gameSize; j++) {
			var cell = document.createElement("td"),
				a = document.createElement("a");

			cell.id = "cell_"+i+"_"+j;
			// a.id = "cell_"+i+"_"+j;
			//  a.href="#"+a.id;

			cell.appendChild( a );
			row.appendChild( cell );
		}

		$table.appendChild( row );
	}
}

function LightenDarkenColor(col,amt) {
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    var result = (g | (b << 8) | (r << 16)).toString(16);

    result = ( result.length < 6 ? "0" : "" ) + result;
    return (usePound?"#":"") + result;
}


// on page load 
document.addEventListener("DOMContentLoaded", function() {

	// create the table
	drawTable();

	// load the table with players
	xhr.get('/players', function ( data ) {
		console.log( data );
		data.forEach(function( player ) {

			player.cells.forEach( function( cell ) {
				var id = "#cell_"+cell.locationX+"_"+cell.locationY,
					td = document.querySelector( id );

				//  unit.href = "#"+unit.id;
				td.style.background = LightenDarkenColor( player.color, 128 );
			});
			player.units.forEach( function( cell ) {
				var id = "#cell_"+cell.locationX+"_"+cell.locationY,
					a = document.querySelector( id + " a" );

				a.href = "#unit_"+cell.locationX+"_"+cell.locationY;
				a.style.background = player.color;
				a.textContent = "1";
				// document.querySelector( "#cell_"+cell.locationX+"_"+cell.locationY ).style.background = "#F00";
			});
		});
		// document.querySelector('#pre').textContent = JSON.stringify( data, null, 2 );
	});

	// handle player actions
});