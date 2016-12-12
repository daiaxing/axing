$(function(){
      $('#login').on('click',function(){
        $.ajax({
          url:'login',
          data:{
            account:$('#acc').val(),
            password:$('#pass').val()
          },
          type:'post',
          dataType:'json',
          success:function(data,status,xhr){
            if(data.message=='OK'){
              alert('登录成功');
              window.location.href='index.html';
            }

            else{ alert('账号或者密码错误');}
          },
          error:function(xhr,status,data){
            console.log(data);
            alert('服务器错误');
          }
        });
      });
    });
