$('#banner-head').click(function() {
    location.reload();
});

$(function(){

	$('#search-form').submit(function(event){

		event.preventDefault();

		var searchData = $('#search-data').val();

		// This is where I will call the query function
		// console.log(searchData);

		getSearchResults(searchData);
		// clears search text from form
		$('#search-data').val('');
	});
});

// This function gets the search results from Youtube
function getSearchResults(searchData){

	var params = {
    
    	part: 'snippet',

      maxResults: 12,
    	// my actual key
    	key: 'AIzaSyCH-N0-ck_N-Xwk1_1p7pinYHVD3rDvwQg',
    	
    	q: searchData
  		
  };
  
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    
    // console.log(data);
    $('#output').empty();

    resultVideos(data.items);
   
  }); 
}

function resultVideos(videos){

  $.each(videos, function(index,value){
    
    $('#output').append('<li><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '"><img src="' + value.snippet.thumbnails.medium.url + '"></a></li>');
    
    console.log(value);

  });

}




