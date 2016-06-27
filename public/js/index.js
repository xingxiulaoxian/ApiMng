$(function(){
    var $apiList = $('#api-list');
    $('#add-api-btn').on('click', function(){
        var query = $('form').serialize();
        console.log(query);
        var link = $('#link-text').val();
        // var query = {
        //     link:link,
        //     param:[$('#link-param').val(),$('#link-param').val(),$('#link-param').val()]
        // };
        //return false;
        $.post('./active/addNewApi', query, function(data){
            $apiList.html(callback(data.list));
            console.log('请求结束');
        });
    });
    $('#add-param').on('click', function(){
        $(this).before('<input id="link-param" type="text" name="param">');
    });

    function callback(list){
    	var str = '';
    	list.forEach(function(ele, index, item){
    		str += ('<li><span>' + ele.uuid + '</span><a href="' + ele.link + '">' +
                 ele.link + '</a><i>' + (ele.param?ele.param:'') + '</i></li>');
    	});
    	return str;
    }
});