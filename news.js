function init()
{

    var months
    var today = new Date();
 
    var day=today.getDate();
    var month = (today.getMonth()+1);
    var year = today.getFullYear();

    var n = (day +2*month +(3*(month+1))/5 + year +(year /4)) % 7
    n=Math.round(n);
    alert(n);
        n = parseInt(n);
        if(n==7 || n==0)
        n='Saturday'
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
    var d3=document.querySelectorAll(".day-time")

    for(var i = 0; i <d2.length;i++ )
    {
        var date2= month +' ' + day + ' ' + year
        var t2= document.createTextNode(date2);
        d2[i].appendChild(t2);
        
    }
    
    var d3=document.querySelectorAll(".day-time")
    for(var i =0; i < d3.length;i++)
    {
        var date3= month +' ' + day + ' ' + year
        var t3= document.createTextNode(date3);
        d3[i].appendChild(t3);

    }



           
}
    function checkMail()
    {
        
           var form=document.getElementById("form");
           var email=document.getElementById("email").value;
           var text=document.getElementById("text");
           var reg= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if(email.match(reg))
            {
             
          
                text.innerHTML="Thank you for your subscribing"
                text.style.color="#00ff00";


            }
            else
            {
              
                text.innerHTML="Please enter your email correctly"
                text.style.color="#ff0000";

            }
                

        
    }


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
                            },1000)
                        })

                        $(window).scroll(function(){
                
                                var ran1=Math.random()
                                var ran2=Math.random()
                                var ran3=Math.random()
                                $("#bitcoin").html(ran1.toPrecision(2))
                                $("#et").html(ran2.toPrecision(2))
                                $("#dog").html(ran3.toPrecision(2))
    
                                var ran4=Math.random()*100;
                                var ran5=Math.random()*100;
                                var ran6=Math.random()*100;
                                $("#bitcoinmoney").html(ran4.toPrecision(2))
                                $("#etmoney").html(ran5.toPrecision(2))
                                $("#dogmoney").html(ran6.toPrecision(2))
                            
                           
                        })



                        
                    })
            

                   
             