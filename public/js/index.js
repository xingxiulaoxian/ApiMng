$(function(){
    var $apiList = $('#api-list');
    $('#addnewapi').click(function(){
        $.post('./active/addNewApi', null, function(data){
        	$apiList.html(callback(data.list));
       		console.log('请求结束');  
        });
    });
    $('#add-api-btn').on('click', function(){
        var link = $('#link-text').val();
        var query = {
            link:link,
            param:$('#link-param').val()
        }
        $.post('./active/addNewApi', query, function(data){
            $apiList.html(callback(data.list));
            console.log('请求结束');  
        })
    })

    function callback(list){
    	var str = '';
    	list.forEach(function(ele, index, item){
    		str += ('<li><span>' 
                        + ele.uuid 
                        + '</span><a href="' + ele.link + '">' + ele.link + '</a><i>'
                        + (ele.param?ele.param:'') + '</i></li>');
    	});
    	return str;
    }
});