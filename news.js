function init() {


    var months
    var today = new Date();

    var day = today.getDate();
    var month = (today.getMonth() + 1);
    var year = today.getFullYear();

    var n = (day + 2 * month + (3 * (month + 1)) / 5 + year + (year / 4)) % 7
    n = Math.round(n);
    n = parseInt(n);
    if (n == 7 || n == 0)
        n = 'Saturday'
    if (n == 1)
        n = 'Sunday'
    else if (n == 2)
        n = 'Monday'
    else if (n == 3)
        n = 'Tuesday'
    else if (n == 4)
        n = 'Wednesday'
    else if (n == 5)
        n = 'Thursday'
    else if (n == 6)
        n = 'Friday'




    if (month == 1)
        month = 'January'
    else if (month == 2)
        month = 'February'
    else if (month == 3)
        month = 'March'
    else if (month == 4)
        month = 'April'
    else if (month == 5)
        month = 'May'
    else if (month == 6)
        month = 'June'
    else if (month == 7)
        month = 'July'
    else if (month == 8)
        month = 'August'
    else if (month == 9)
        month = 'September'
    else if (month == 10)
        month = 'October'
    else if (month == 11)
        month = 'November'
    else if (month == 12)
        month = 'December'


    var d1 = document.querySelector('.day');

    var date1 = n + ', ' + month + ' ' + day + ', ' + year;
    var t1 = document.createTextNode(date1);
    d1.appendChild(t1);

    var d2 = document.querySelectorAll(".breaking-news-time")
    var d3 = document.querySelectorAll(".day-time")

    for (var i = 0; i < d2.length; i++) {
        var date2 = month + ' ' + day + ' ' + year
        var t2 = document.createTextNode(date2);
        d2[i].appendChild(t2);

    }

    var d3 = document.querySelectorAll(".day-time")
    for (var i = 0; i < d3.length; i++) {
        var date3 = month + ' ' + day + ' ' + year
        var t3 = document.createTextNode(date3);
        d3[i].appendChild(t3);

    }

  


}
function checkMail() {

    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var reg = /[a-zA-Z0-9]+@[a-zA-Z0-9]+(.[a-zA-Z]{2,})+$/;
    if (email.match(reg)) {


        text.innerHTML = "Thank you for your subscribing"
        text.style.color = "#00ff00";


    }
    else {

        text.innerHTML = "Please enter your email correctly"
        text.style.color = "#ff0000";

    }



}




$(document).ready(function () {
    $("#gototop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 344)
            $("#gototop").show("slow");
        else
            $("#gototop").hide("slow");


    })
    $("#gototop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    })
    
   

    $("#btn2").click(function() {
        $("#btn1").css({
            "background-color":"transparent"
        })
        $(this).css({
            "background-color":"blue"
        })
        $(".main-card").css({
            "left":"-100%"
            
        })

    })
    $("#btn1").click(function( ){
        $("#btn2").css({
            "background-color":"transparent"
        })
        $(this).css({
            "background-color":"blue"
        })
        $(".main-card").css({
            "left":"0"
        })
    })
   
    

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

      var bitcoin=null;
      var et=null;
      var dog=null;
      var bitcoinmoney = $("#bitcoinmoney")
      var etmoney = $("#etmoney")
      var dogmoney = $("#dogmoney")
      bitcoin=start1(etmoney,100,90000,"bitcoin")
      et=start1(dogmoney,50,9000,"et")
      dog=start2(bitcoinmoney,100,10000,"dog")

      function start1(el,steps,max,type) {
        return setInterval(function() {
            let value=parseInt(el.text());
            if(value < max)
            {
                value+=steps;
                el.html(value);
            }
            else 
            {
                if(type==="etmoney")
                {
                    clearInterval(etmoney);
                }
                else 
                {
                    if(type==="dog")
                    clearInterval(dogmoney);
                }
            }


        },5000)
      }

      function start2(el,steps,min) {
        return setInterval(function () {
            var value=parseInt(el.text())
            if(value > min)
            {
                value -=steps;
                el.html(value);
            }
            else 
            {
                if(type===bitcoinmoney)
                {
                    clearInterval(bitcoin);
                }
            }
            console.log(Math.random())
        },5000)
      }
     

     /*SEARCH*/
      $(".box ").click(function ( ){
        $(".box .input ").css({
            "width":"200px"
        })
      })
     $(".box .input").change(function() {
        $(".box .input ").css({
            "width":"0"
        })
     })
    


     var topics = ["World","War","Us","News","game", "movies"]
  $("#search").keyup(function () {

    let text = $(this).val().toLowerCase();
    let h = ""
    for ( let c of topics)
    {
        if(c.toLowerCase().indexOf(text) >=0 )
        {
            h+= ` <li><a href="javascript:;">${c}</a></li>`
        }
        if(h != "")
            {
                $("#list").html(h);
                $("#list").show()
            }
           $("#list").on("click", "a", function() {
            $(".input").val($(this).text());
            $("#list").hide()

           }) 

    }
  })


   /*LOAD*/
   window.addEventListener("load",function() {
    var loader = document.querySelector(".loading")
    this.setTimeout(function() {
        loader.style="display:none;"
    },1000)
  })

})



 