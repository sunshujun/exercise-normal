// JavaScript Document
 $(function(){
	  //search 切换
	  (function(){
		  var aLi=$('#menu li')  
		  var aText=[
           '例如：荷塘鱼坊烧鱼或 樱花日本料理',
            '例如：昌平区育新站龙旗广场2号楼609室',
           '例如：万达影院双人情侣券',
            '例如：东莞出事了，打老虎是谁?',
            '例如:北京初春降雪，天气变幻莫测'
           ];
		   var num=0;
		   var oText=$('#search').find('.form .text');
		   oText.val(aText[num]);
		   
		  aLi.each(function(index) {
            $(this).click(function(){
				 aLi.attr('class','gradient');
				 $(this).attr('class','active')
				 num=index;
				 oText.val(aText[num]);
				});
           });
		   
		  oText.focus(function(){
			   if( oText.val()==aText[num])
			      { 
				   oText.val('');
				  }
			  });
		   oText.blur(function(){
			   if( oText.val()=='')
			      {
					   oText.val(aText[num]);
				  }
			   });
		})();
		
	 // updata 文字更新转动
	 (function(){
		var oUl=$('.wrap').find('ul'); 
		var str='';
		var up=$('.updata').find('.triangle_up');
		var down=$('.updata').find('.triangle_down_red');
		var iNum=0;
		var timer='';
		var oWrap=$('.wrap');
		var aData=[
					  {'name':'萱萱','time':4,'title':'那些灿烂华美的瞬间','url':'http://www.miaov.com/2013/'},
					  {'name':'明明','time':6,'title':'你到底是谁啊，啊啊啊','url':'http://www.miaov.com/2013/'},
					  {'name':'白白','time':7,'title':'你喜欢吃肉还是蔬菜','url':'http://www.miaov.com/2013/'},
					  {'name':'小小','time':8,'title':'如何通过蔬菜来调理身体','url':'http://www.miaov.com/2013/'},
					  {'name':'打打','time':9,'title':'你到底是谁啊，啊啊啊','url':'http://www.miaov.com/2013/'},
					  {'name':'畅畅','time':10,'title':'那些灿烂华美的瞬间','url':'http://www.miaov.com/2013/'},
					  {'name':'健健','time':11,'title':'你喜欢吃肉还是蔬菜','url':'http://www.miaov.com/2013/'},
					  {'name':'萱萱','time':12,'title':'如何通过蔬菜来调理身体','url':'http://www.miaov.com/2013/'}
                   ];
		 for( var i=0;i<aData.length;i++)
		   {
			 str+='<li><strong>'+aData[i].name+'</strong> <span>'+aData[i].time +'分钟前 </span>写了一篇新文章：<a href="'+aData[i].url+'">'+aData[i].title+'</a></li>'   
		   }
		     str+=str;
		  oUl.html(str);
		 var iH=oUl.find('li').height();
		 
		 up.click(function(){
			 clearInterval(timer);
			 Move(1);
			 timer=setTimeout(timeInter,5000);
			 });
	     down.click(function(){
			 clearInterval(timer);
			    Move(-1);
			 timer=setTimeout(timeInter,5000);
			 });
			 
		 function timeInter()
		    {
			    timer=setInterval(function(){
			     Move(-1);
			    },2000);
			 }
		 timeInter();
			 
		 function hover(){
					  oWrap.hover(function(){
							  clearInterval(timer);
							 },function(){
							   timer=setInterval(function(){
							   Move(-1);
							   },2500);
							 }); 
		              }
		 hover();
		 function Move(num){
			  iNum+=num;
			  if(Math.abs(iNum)>aData.length*2-1)
			    {
					iNum=-aData.length;
					oUl.css('top',30*(-aData.length+1));
				}
			  if(iNum>0)
			    {
				  iNum=-aData.length+1;
				  oUl.css('top',30*(-aData.length) );
					}
			   oUl.stop().animate({ top:iH*iNum },1500);
			 };
	  })();
	  
	 //两个选项卡切换
	  (function(){
		fnTab($('.tab1'),$('.host_list'));
		fnTab($('.tab2'),$('.subwaymap'));
		
		function fnTab(oTab,oCon)
		  {
			  var aNav=oTab.children();
			  var oCont=oCon.children();
			      oCont.eq(1).hide();
			   aNav.each(function(index){
				    $(this).click(function(){
					     aNav.removeClass('active').addClass('gradient');
						 $(this).removeClass('gradient').addClass('active');
					     aNav.find('.triangle').removeClass('triangle_down_red').addClass('triangle_down_gray');
						 $(this).find('.triangle').removeClass('triangle_down_gray').addClass('triangle_down_red');
						 oCont.eq(0).hide();
						 oCont.eq(1).hide();
						 oCont.eq(index).show();
					   });
				  });
		  }  
		  
	  })();
	  
	 //焦点图切换
	 (function(){
		var oDiv=$('.pic');
		var UlLi=oDiv.find('ul li');
		var OlLi=oDiv.find('ol li');
		var oP=oDiv.find('p');
		var arr=['爸爸去那儿','高级摄影，哈哈','性感美女'];
		var timer='';
		var iNum=0;
		
		OlLi.click(function(){
			iNum=$(this).index();
			fnfade();
			});
			
		oDiv.hover(function(){
			      clearInterval(timer);
				},function(){
					auto();
					});
					
	     function auto(){
			 timer=setInterval(function(){
				  iNum++;
				  iNum%=arr.length;
				  fnfade();
				 },2000);
			 }
		function fnfade()
		 {
			 UlLi.each(function(index){
			    if(index!=iNum)
				 {
					$(this).fadeOut().css('zIndex','1'); 
					 OlLi.eq(index).removeClass('active');
				 }else{
					$(this).fadeIn().css('zIndex','2'); 
					 OlLi.eq(index).addClass('active');
					 oP.html(arr[index]);
					  }
			});
		 } 
	   auto();
	   fnfade();
	    
	  })();
	  
	 //日历显示效果
	 (function(){
	   var aImg=$('.calendar .data').find('.future img');
	   var aData=$('.calendar .data_list').children();
	   var oInimg=$('.calendar .future_info img');
	   var oDiv=$('.calendar .future_info')
	   var oText=$('.calendar  .text');
	   var str='';
	   var iTop=0;
	   var iLeft=0;
	   aImg.each(function(i) {
             $(this).hover(function(){
				 str='<strong>'+aData.eq($(this).parent().index()%7).text()+'</strong><h3>本日主题</h3><br />'+$(this).attr('info');
		          oText.html(str);
				  oInimg.attr('src', $(this).attr('src') );
				  iTop=$(this).parent().position().top-31;
				  iLeft=$(this).parent().position().left+52;
				  oDiv.css({'top':iTop,'left':iLeft});
				  console.log(iTop);
				  console.log(iLeft);
		          oDiv.show();
		        },function(){
					oDiv.hide();
				})    
		
          });
		  
	 })();
	 
	 // BBS论坛
	 (function(){
	   var aLi=$('.bbs ol li');
	   aLi.each(function(index, element) {
              $(this).mouseover(function(){
		       aLi.attr('class','');
		      $(this).attr('class','active');
		   });
          });
	 })();
	 
  }) 