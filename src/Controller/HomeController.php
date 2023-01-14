<?php

namespace App\Controller;

// use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
//     * @Method("GET")

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     * @Route("/{route}", name="vue_pages", requirements={"route"="^(?!.*_wdt|_profiler).+"})
     */
    public function index()
    {
        return $this->render('home/index.html.twig');

    }

}
