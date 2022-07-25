
            var months
            var today = new Date();
         
            var day=today.getDate();
            var month = (today.getMonth()+1);
            var year = today.getFullYear();

            var n = (day +2*month +(3*(month+1))/5 + year +(year /4)) % 7
            Math.round(n);
            n = parseInt(n);
            if(n== 1)
                n='Sunday'
                else if(n==2)
                n='Monday'
                else if(n==3)
                n='Tuesday'
                else if(n==4)
                n='Wednesday'
                else if(n==5)
                n='Thursday'
                else if(n==6)
                n='Friday'
                else if(n==7)
                n='Saturday'
            
            
                if(month == 1)
                    month='January'
                    else if(month == 2)
                    month = 'February'
                    else if(month == 3)
                    month='March'
                    else if(month == 4)
                    month='April'
                    else if(month == 5)
                    month='May'
                    else if(month == 6)
                    month='June'
                    else if(month == 7)
                    month='July'
                    else if(month == 8)
                    month='August'
                    else if(month ==9)
                    month='September'
                    else if(month == 10)
                    month='October'
                    else if(month == 11)
                    month = 'November'
                    else if(month == 12)
                    month='December'

            
            var d1=document.querySelector('.day');
            
            var date1 = n +', '+month+' '+day +', ' + year;
            var t1 = document.createTextNode(date1);
            d1.appendChild(t1);
    
            var d2=document.querySelectorAll(".breaking-news-time")
          
            for(var i = 0; i <d2.length;i++ )
            {
                var date2= month +' ' + day + ' ' + year
                var t2= document.createTextNode(date2);
                d2[i].appendChild(t2);
            }
            


          
                
                    var bitcoin = document.getElementById("bitcoin");
                    var bitcoinmoney = document.getElementById("bitcoinmoney")
                    var ran1=Math.random()
                    var ran2=Math.random()*900 
                
                    var btc=document.createTextNode(ran1.toFixed(2));
                    var btcmoney=document.createTextNode(ran2.toFixed(2));
                    bitcoin.appendChild(btc);
                    bitcoinmoney.appendChild(btcmoney);
              
           
                    var et = document.getElementById("et");
                    var etmoney= document.getElementById("etmoney")
                    var ran3=Math.random()
                    var ran4=Math.random() * 200
                    var eth= document.createTextNode(ran3.toFixed(2))
                    var ethmoney = document.createTextNode(ran4.toFixed(2))
                    et.appendChild(eth)
                    etmoney.appendChild(ethmoney);
                    

                    var dog = document.getElementById("dog");
                    var dogemoney=document.getElementById("dogmoney")
                    var ran5 = Math.random();
                    var ran6 = Math.random() * 100;

                    var doge=document.createTextNode(ran5.toFixed(2))
                    var dogemoneyy=document.createTextNode(ran6.toFixed(2))
                    dog.appendChild(doge);
                    dogemoney.appendChild(dogemoneyy);



                    $(document).ready(function()
                    {
                        $("#gototop").hide();
                        $(window).scroll(function(){
                            if($(this).scrollTop() >=344 )
                            $("#gototop").show("slow");
                            else
                            $("#gototop").hide("slow");


                        })
                        $("#gototop").click(function(){
                            $("html,body").animate({
                                scrollTop:0
                            },2000)
                        })
                    })

              
             