!function (scope, name, definition) {
	if (typeof define == 'function') define(definition);
	else if (typeof module != 'undefined' && module.exports) module.exports['browser'] = definition();
	else scope[name] = definition();
}(window, 'xhr', function() {

	var xmlhttp = function (method, url, data, callback) {
		var XHR = window.XMLHttpRequest,
			request = new XHR();

		request.onreadystatechange = function () {
			var DONE = this.DONE || 4,
				status;

			if (this.readyState === DONE){
				status = request.status;

				if( status > 0 ) {
					// success
					if( callback ) {
						callback( JSON.parse( request.responseText ) );
					}
				} else {
					if( callback ) {
						callback("error");
					}
				}
			}
		};

		request.open(method, url, true);
		request.setRequestHeader('Accept', 'application/json');
		request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');  // Tells server that this call is made for ajax purposes.
		request.send( data ? JSON.stringify(data) : null );	// No data needs to be sent for GET request
	};

	return {
		get: function( url, callback) {
			xmlhttp('GET', url, null, callback );
		},
		post: function( url, data, callback ) {
			xmlhttp('POST', url, data, callback);
		}
	};
	
});