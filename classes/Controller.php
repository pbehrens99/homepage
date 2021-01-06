<?php

require_once('Model.php');
require_once('View.php');

class Controller
{
    // CLASSES
    var $Model;
    var $View;

    // TABLES
    var $pageTitle;

    function __construct(){
        $this->Model        = new Model();
        $this->View         = new View();

        $this->pageTitle    = array(
            'index'         => 'Philipp Behrens',
            'about'         => 'Portfolio',
            'references'    => 'Referenzen',
            'contact'       => 'Kontakt',
        );
    }

    function getPageTitle($title){
        if (isset($this->pageTitle[$title])) {
            return $this->pageTitle[$title];
        } else {
            return '404';
        }
    }

    function init($page){
        $this->View->loadPage($page);
    }

}