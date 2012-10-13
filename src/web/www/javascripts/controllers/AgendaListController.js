Ext.regController('AgendaList', {

	Index: function(options) {
    	
        if ( ! this.AgendaListView)
        {
            this.AgendaListView = this.render({
                xtype: 'AgendaListView',
            });
            
          this.AgendaListView.addListener('itemtap',
            	function(that, index, item, e) {
				var	record = that.store.getAt(index);
			//console.log(record);
				OKnesset.app.controllers.navigation.dispatchPanel('AgendaDetails/Index/'+ record.data.id, options.historyUrl);
				});
      
        }

     /*
		Ext.util.JSONP.request({
		    url: 'http://www.oknesset.org/api/v2/agenda',
		    params:{format:'jsonp'},
		    callbackKey : "callback",
			callback : function(data){
				
			console.log(data);
		    OKnesset.AgendaListStore.loadData(data);
		    	
		    console.log(data.objects);
		    	},
			onFailure : function(){console.log("Failure!");}
		});
		*/
	//console.log(agend.Objects);
		//OKnesset.AgendaListStore.loadData(data.objects);
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.AgendaTitle);
        this.application.viewport.setActiveItem(this.AgendaListView, options.animation);
        
    },
	refresh : function() {
		
		 //var AgendaList = this.AgendaListView.query('#AgendaList')[0];	
		this.AgendaListView.refresh();
	 }
 });