
$(function(){

	$('#search-form').submit(function(event){

		event.preventDefault();

		var searchData = $('#search-data').val();

		// This is where I will call the query function
		console.log(searchData);

		getSearchResults(searchData);
		// clears search text from form
		$('#search-data').val('');
	});
});

// This function gets the search results from Youtube
function getSearchResults(searchData){

	var params = {
    
    	part: 'snippet',
    	// my actual key
    	key: 'AIzaSyCH-N0-ck_N-Xwk1_1p7pinYHVD3rDvwQg',
    	
    	q: searchTerm,
  		
  		r: 'json'
  };
  
    url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items); //<-- There is no `data.Search`
  }); 
}

}

