var qc = {
  page: {
    errors: [],
    loadedResources: []
  },
  addLoadedResource: function( resource ){
    if (resource.status && resource.status == "200")
      this.page.loadedResources.push( resource );
    else{
      this.addError("Load","Resource not found "+ resource.url );
    }
  },
  addError: function( group, msg ){
    this.page.errors.push(msg);
  },
  getReport: function(){
    for( error in this.page.errors){
      console.log(this.page.errors[error]);
    }
  },
  setPage: function( page ){
    this._page = page;
  }
};

module.exports = qc;
