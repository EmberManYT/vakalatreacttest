function myFunction(x) {
            x.classList.toggle("fa-minus-circle");
        }
        
        
        $("#car3").hide();
        $("#car4").hide();
        $("#car5").hide();
        $("#car6").hide();
        $("#car7").hide();
        //$(".sedan-section").hide();
        
        
        
                $(function () {
                    $("#suv-logo-section").hide();
                    $(".logo-section").hide();
                    $("#btnsedan1").click(function () {
                        $(".sedan-section").hide();
                        $("#suv-logo-section").hide();
                        $(".logo-section").show();

                    });
                    $("#car1").hide();
                    $("#clsbtn3").click(function () {
                        $("#suv-logo-section").hide();
                        $(".logo-section").hide();
                        $(".sedan-section").show();

                    });
                });
                $(function () {
                    $("#suv-logo-section").hide();
                    $("#bmwlogo").click(function () {
                        $(".logo-section").hide();
                        $("#suv-logo-section").hide();
                        //$("#gls-carousel").show();
                        $("#car1").show();

                    });
                    $("#clsbtn2").click(function () {
                        $("#car1").hide();
                        $(".logo-section").show();
                        $("#suv-logo-section").hide();

                    });
                });



                $(function () {
//                    $(".logo-section").hide();
//                    $("#btnsedan2").click(function () {
//                        $(".sedan-section").hide();
//                        //$(".logo-section").show();
//                         $(".logo-section").hide();
//
//                    });
                    $("#audi-image").hide();
                    $("#audilogo").click(function () {
                        $(".logo-section").hide();
                        $("#audi-image").show();

                    });
                    $("#clsbtn4").click(function () {
                        $("#audi-image").hide();
                        $(".logo-section").show();

                    });
                });



                $(function () {
//                    $(".logo-section").hide();
//                    $("#btnsedan2").click(function () {
//                        $(".logo-images").hide();
//                        $("#suv-logo-section").show();
//                        $(".logo-section").hide();
//
//                    });
                    $("#car1").hide();
                    $("#clsbtn3").click(function () {
                        $(".logo-section").hide();
                        $(".sedan-section").show();
                        $("#suv-logo-section").hide();

                    });
                });


                $(function () {
                    $("#car2").hide();
                    $("#mercedes-logo").click(function () {
                        $(".logo-section").hide();
                        $("#suv-logo-section").hide();
                        $("#car2").show();

                    });
                    $("#clsbtnlogos").click(function () {
                        $("#car2").hide();
                        $(".logo-section").hide();
                        $("#suv-logo-section").show();

                    });
                });


                $(function () {
                    $(".logo-section").hide();
                    $("#btnsedan2").click(function () {
                        $(".sedan-section").hide();
                         $("#suv-logo-section").show();
                        $(".logo-section").hide();

                    });
                    $("#audi-image").hide();
                    $("#audilogo").click(function () {
                        $(".logo-section").hide();
                        $("#audi-image").show();

                    });
                    $("#clsbtn4").click(function () {
                        $("#audi-image").hide();
                        $(".logo-section").show();

                    });
                });
                
                $(function () {
                    //$("#car1").hide();
                    $("#clsbtnsuv").click(function () {
                        $("#suv-logo-section").hide();
                        //$(".logo-section").show();
                        $(".sedan-section").show();
                        //$("#suv-logo-section").hide();

                    });
                });
                
                 $(function () {
                    $("#car2").hide();
                    $("#audi-logo").click(function () {
                        $(".logo-section").hide();
                        $("#suv-logo-section").hide();
                        $("#car3").show();

                    });
                    $("#clsbtnlogos").click(function () {
                        $("#car2").hide();
                        $(".logo-section").hide();
                        $("#suv-logo-section").show();

                    });
                });
                
                $(function () {
                    //$("#car1").hide();
                    $("#clsbtnaudi").click(function () {
                        $("#car3").hide();
                        $("#suv-logo-section").show();
                        //$(".logo-section").show();
                        //$(".sedan-section").show();
                        //$("#suv-logo-section").hide();

                    });
                });
                
                
                $(function () {
                    $("#jeep-logo").click(function () {
                        $(".logo-section").hide();
                        $("#suv-logo-section").hide();
                        $("#car4").show();

                    });
                });
                
                $(function () {
                    $("#clsbtnjeep").click(function () {
                        $("#car4").hide();
                        $("#suv-logo-section").show();

                    });
                });
                
                
                $(function () {
                    $("#mits-logo").click(function () {
                        $(".logo-section").hide();
                        $("#suv-logo-section").hide();
                        $("#car5").show();

                    });
                });
                
                $(function () {
                    $("#clsbtnpajero").click(function () {
                        $("#car5").hide();
                        $("#suv-logo-section").show();

                    });
                });
                
                
                
                $(function () {
                    $("#toyota-logo").click(function () {
                        $(".logo-section").hide();
                        $("#suv-logo-section").hide();
                        $("#car6").show();

                    });
                });
                
                $(function () {
                    $("#clsbtnfortuner").click(function () {
                        $("#car6").hide();
                        $("#suv-logo-section").show();

                    });
                });
                
                
                $(function () {
                    $("#mahindra-logo").click(function () {
                        $(".logo-section").hide();
                        $("#suv-logo-section").hide();
                        $("#car7").show();

                    });
                });
                
                $(function () {
                    $("#clsbtnscorpio").click(function () {
                        $("#car7").hide();
                        $("#suv-logo-section").show();

                    });
                });
                
                
//                $('#main_slider').carousel({
//                    interval: false,
//                });




   //$(function(){
   $("#collapse-btn").hide();  
       $("#know-btn").click(function(){
            $("#know-btn").hide(); 
           $("#collapse-btn").show();
                 
     });
     $("#collapse-btn").click(function(){
            $("#collapse-btn").hide(); 
           $("#know-btn").show();
                 
     });
   //});