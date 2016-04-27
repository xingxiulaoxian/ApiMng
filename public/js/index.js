$(function(){
    $('#addnewapi').click(function(){
        
        $.post('./active/addNewApi', null, function(){
          console.log('请求结束');  
        })
    
    })
})