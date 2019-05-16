<?php

$default="http://adtrics.com/start";

//define url for product #1 or version 1 of your Landing Page
$url1="http://adtrics.com/opm";

//define url for product #2 or version 2 of your Landing Page
$url2="http://adtrics.com/web1-reg";
$url3="http://adtrics.com/web1-encore";
$url4="http://adtrics.com/web2-reg";
$url5="http://adtrics.com/web2-encore";
$url6="http://adtrics.com/aa-replay";
$url7="http://adtrics.com/aa-close";
$url8="http://adtrics.com/tracking";

if ($_GET['pid'] == "1")
{
 header("Location: $url1".preserve_qs());
}
elseif ($_GET['pid'] == "2")
{
 header("Location: $url2".preserve_qs());
}
elseif ($_GET['pid'] == "3")
{
 header("Location: $url3".preserve_qs());
}
elseif ($_GET['pid'] == "4")
{
 header("Location: $url4".preserve_qs());
}
elseif ($_GET['pid'] == "5")
{
 header("Location: $url5".preserve_qs());
}
elseif ($_GET['pid'] == "6")
{
 header("Location: $url6".preserve_qs());
}
elseif ($_GET['pid'] == "7")
{
 header("Location: $url7".preserve_qs());
}
elseif ($_GET['pid'] == "8")
{
 header("Location: $url7".preserve_qs());
}




//if there is no product variable, go to the first product
//URL, since there are affiliates who started promoting
//the first product before this script was set up and
//we don't want them to lose sales.
//if you have no prior affiliates, you might want to
//send people elsewhere if they arrive on a hoplink
//without a variable.

else
{
 header("Location: $default".preserve_qs());
}



function preserve_qs() {
 if (empty($_SERVER['QUERY_STRING']) && strpos($_SERVER['REQUEST_URI'], "?") === false) {
 return "";
 }
 return "?" . $_SERVER['QUERY_STRING'];
}

?>