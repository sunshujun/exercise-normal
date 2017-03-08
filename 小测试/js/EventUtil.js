var EventUtil={
				addHander:function(target,type,fun){
					if(target.addEventListener)
					{  
					    target.addEventListener(type,fun,false);
					}else if(target.attachEvent){
						target.attachEvent("on"+type,fun,false);
					}else{
						target["on"+type]=fun;
					}
				},
				removeHander:function(target,type,fun){
					if(target.removeEventListener)
					{
						target.removeEventListener(type,fun,false);
					}else if(target.detachEvent){
						target.detachEvent("on"+type,fun,false);
					}else{
						target["on"+type]=null;
					}
				}
			}