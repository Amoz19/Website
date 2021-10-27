
			var i=0,images=[
				"img/net (4).jpg",
				"img/net (1).jpg",
				"img/net (5).jpg"
			];
			
			
			function mySlide(param){
				if(param === 'next')
				{
					i++;
					if(i===images.length){ i=images.length-1;}
				}else{
					i--;
					if(i<0){
						i=0;
					}           
				}
				document.getElementById('slide').src=images[i];
			}