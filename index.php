<?php

require_once('classes/Controller.php');
$Controller     = new Controller();

if (isset($_GET['page'])) {
    $page       = $_GET['page'];
} else {
    $page       = 'index';
}

?>

<html>
    <head>

        <meta charset="UTF-8"/>
        <title><?php echo $Controller->getPageTitle($page); ?></title>
        <script src='https://code.jquery.com/jquery-3.5.1.js'></script>

        <link rel='stylesheet' type='text/css' href='css/main.css'/>

    </head>
    <body>
    
        <section id="navigation">
            <?php $Controller->init('navigation'); ?>
        </section>
        <section id="content">
            <?php $Controller->init($page); ?>
        </section>
        <section id="footer">
            <?php $Controller->init('footer'); ?>
        </section>

    </body>


    <script src='js/ajax.js'></script>
        

</html>
