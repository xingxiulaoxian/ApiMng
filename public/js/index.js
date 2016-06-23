$(function(){
    $('#addnewapi').click(function(){
    	var $apiList = $('#api-list');
        $.post('./active/addNewApi', null, function(data){
        	$apiList.html(callback(data.list));
       		console.log('请求结束');  
        });
    });

    function callback(list){
    	var str = '';
    	list.forEach(function(ele, index, item){
    		str += '<li>' + ele + '</li>';
    	});
    	return str;
    }
});