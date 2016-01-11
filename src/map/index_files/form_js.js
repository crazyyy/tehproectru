 jQuery( document ).ready(function() {
            jQuery("#send_feedback").on("click",function(){
                jQuery(".ajax_form_advertice").fadeOut();
                jQuery(".ajax_form").fadeIn("slow");
                
            });

            jQuery(".form_header p").on("click",function(){
                jQuery(".ajax_form").fadeOut("slow");
            });



            jQuery("#send_advertice").on("click",function(){
                jQuery(".ajax_form").fadeOut();
                jQuery(".ajax_form_advertice").fadeIn("slow");                
            });

            jQuery(".ajax_form_advertice .form_header p").on("click",function(){
                jQuery(".ajax_form_advertice").fadeOut("slow");
            });
            
            jQuery("#send_feedback_button").on("click",function(){
                var name = jQuery("#form_name").val();
                var email = jQuery("#form_email").val();
                var massage = jQuery("#form_massage").val();

                jQuery.post( "/wp-admin/admin-ajax.php", { action: 'send_mail',type:"feedback", name: name, email: email, massage:massage }).done(function( data ) {
                    if(data === "true"){
                        jQuery(".ajax_form .form_inputs").html("Спасибо, сообщение отправлено!");
                    }else{
                        jQuery(".ajax_form .form_inputs").html("Произошла ошибка! Пожалуйста, попробуйте позже.");
                    }
                });
            });

            jQuery("#send_advertice_button").on("click",function(){
                var name = jQuery("#advertice_form_name").val();
                var email = jQuery("#advertice_form_email").val();
                var massage = jQuery("#advertice_form_massage").val();

                 jQuery.post( "/wp-admin/admin-ajax.php", { action: 'send_mail', type:"advertice", name: name, email: email, massage:massage }).done(function( data ) {
                    if(data === "true"){
                        jQuery(".ajax_form_advertice .form_inputs").html("Спасибо, сообщение отправлено!");
                    }else{
                        jQuery(".ajax_form_advertice .form_inputs").html("Произошла ошибка! Пожалуйста, попробуйте позже.");
                    }
                });
                
            });

            
           

        }); 