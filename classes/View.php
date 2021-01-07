<?php


class View
{
    var $pageTemplates;

    function __construct() {
        $this->pageTemplates    = array(
            'index'         => 'templates/index.php',
            'about'         => 'templates/about.php',
            'ajax'          => 'templates/ajax.php',
            'references'    => 'templates/references.php',
            'contact'       => 'templates/contact.php',
            '404'           => 'templates/404.php',
            'navigation'    => 'templates/navigation.php',
            'footer'        => 'templates/footer.php',
        );
    }

    function loadPage($page){
        if (isset($this->pageTemplates[$page])) {
            include_once($this->pageTemplates[$page]);
        } else if (!isset($this->pageTemplates[$page])) {
            include_once($this->pageTemplates['404']);
        }
    }
}