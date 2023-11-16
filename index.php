<html>
 <head>
   <title>CPE580page</title>
 </head>
 <body>
   <?php
        if(empty($_GET)){
        }
        else{
        $Temperature=@$_GET['temperature'];
        $Switches=@$_GET["switches"];
        error_reporting(E_ALL ^ E_NOTICE);
        $Write = "<p>Temperature: " .  $Temperature  . " Celsius </p>". "<p>Switches:" .  $Switches . "</p>";
        file_put_contents('output.html', $Write);
        }
        echo file_get_contents('output.html');
        
        ?>
        
 </body>
</html>