<?php

    if( isset($_POST['subscribe']) ) {
        if($_SERVER['REQUEST_METHOD'] == "POST"){
            $hop =  strip_tags($_POST['form_field'][35378]);
            $email = trim($_POST["form_field"][3]);
            if(!preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^", $email)){ 
                // Failed
                header("Location: https://adtrics.com/opm/?hop=$hop&pid=1");
                die();
            } else {
                // Passed
                // Post to sendlane with first submit
                $url = 'http://fredlam.sendlane.com/api/v1/list-subscriber-add';
                $data = array(
                    'api'           => 'c30d349679d0d58',
                    'hash'          => '238160c46ec30275486d82dfc0653e65',
                    'email'         => $email,
                    'list_id'       => '84',
                    'hop'           => $hop
                );
                // use key 'http' even if you send the request to https://...
                $options = array(
                    'http' => array(
                        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                        'method'  => 'POST',
                        'content' => http_build_query($data)
                    )
                );
                $context  = stream_context_create($options);
                file_get_contents($url, false, $context);
    
                // Redirect with hop
                header("Location: https://adtrics.com/aa-segway/?hop=$hop");
                die();
            }
        }
    }