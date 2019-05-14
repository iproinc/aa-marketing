<?php

    if( isset($_POST['subscribe']) ) {
        if($_SERVER['REQUEST_METHOD'] == "POST"){
            
            $hop =  strip_tags($_POST['form_field'][35378]);
            $email = trim($_POST["form_field"][3]);
            
            if(!preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^", $email)){ 
                // Failed
                header("Location: https://adtrics.com/bootcamp/?hop=$hop");
            } else {
                // Passed
                // Post to sendlane with first submit single optin
                $single_url = 'https://fredlam.sendlane.com/api/v1/list-subscriber-add';
                $double_url = 'https://fredlam.sendlane.com/form/26440';
                
                $single_data = array(
                    'api'           => 'c30d349679d0d58',
                    'hash'          => '238160c46ec30275486d82dfc0653e65',
                    'email'         => $email,
                    'list_id'       => '84',
                    'hop'     => $hop
                );
                
                $double_data = array(
                    'email'         => $email,
                    'form_field[35378]'     => $hop
                );
                
                httpPost($double_url, $double_data);
                httpPost($single_url, $single_data);
                
                // header("Location: https://adtricsjv.com/form.html");
                header("Location: https://adtrics.com/aa-segway/?hop=$hop");
            }
        }
    }

                
    function httpPost($url, $data)
    {
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($curl);
        curl_close($curl);
        return $response;
    }