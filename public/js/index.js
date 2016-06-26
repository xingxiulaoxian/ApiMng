$(function(){
    var $apiList = $('#api-list');
    $('#addnewapi').click(function(){
        $.post('./action/addNewApi', null, function(data){
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
        $.post('./action/addNewApi', query, function(data){
            $apiList.html(callback(data.list));
            console.log('请求结束');  
        })
    })

    $('#api-list').on('click', 'li', function(){
        var strUuid = $(this).data('uuid');
        $.post('./action/toggleApi', {uuids:strUuid, status:0}, function(data){
            $apiList.html(callback(data.list));
            console.log(data);
        })
    })

    function callback(list){
    	var str = '';
    	list.forEach(function(ele, index, item){
    		str += ('<li data-uuid="' + ele.uuid + '"><span>' 
                    + ele.uuid 
                    + '</span><a href="' + ele.link + '">' + ele.link + '</a><i>'
                    + (ele.param?ele.param:'') + '</i></li>');
        });
    	return str;
    }
});