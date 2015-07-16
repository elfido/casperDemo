var casper = require('casper').create(),
    page = "http://localhost:8000/demo/search.html",
    qc = require('./qc.js');

casper.on("resource.received", function( resource ){
  qc.addLoadedResource( {url: resource.url, status: resource.status} );
});

casper.on("error", function( error, trace ){
    this.echo( "error: " + error );
    this.echo( JSON.stringify(trace));
});

casper.on("load.failed", function( error ){
    console.log("load failed");
    console.dir(error);
});

casper.on("page.resource.requested", function(data, request){

});

casper.on("page.error", function( error ){
    console.log("Page error");
    this.echo( JSON.stringify( error ));
});

casper.start( page );

casper.then( function(){
  this.echo( this.getTitle() );
  qc.getReport();
} );

casper.run();
