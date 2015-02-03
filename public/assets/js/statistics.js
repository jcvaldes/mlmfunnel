(function(){
	var url = $("input[name=url]").val();
	var id = $("input[name=user_id]").val();
	var page = $("input[name=type]").val();

	jQuery.get(url + '/api/statistic/' + id + '/' + page + '/visit', function(data) {
		//alert(JSON.stringify(data));
	}, 'json');

})();

  