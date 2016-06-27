$(function(){
    var $apiList = $('#api-list');
    $('#add-api-btn').on('click', function(){
        var query = $('form').serialize();
        console.log(query);
        var link = $('#link-text').val();

        $.post('./active/addNewApi', query, function(data){
            $apiList.html(callback(data.list));
            console.log('请求结束');
        });
    });
    $('#add-param').on('click', function(){
        $(this).before('<input id="link-param" type="text" name="param">');
    });

    $('#api-list').on('click', 'li', function(){
        var strUuid = $(this).data('uuid');
        $.post('./action/toggleApi', {uuids:strUuid, status:0}, function(data){
            $apiList.html(callback(data.list));
            console.log(data);
        });
    });

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