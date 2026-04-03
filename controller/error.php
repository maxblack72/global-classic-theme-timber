<?php

defined('ABSPATH') or exit();

$context = Timber\Timber::context();

Timber\Timber::render('404.twig', $context);
