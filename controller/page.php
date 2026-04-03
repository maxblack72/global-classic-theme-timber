<?php
/**
 * Page controller.
 *
 * @package Global Classic Theme Timber
 */

defined('ABSPATH') or exit();

$context = Timber\Timber::context();


Timber\Timber::render('page.twig', $context);
