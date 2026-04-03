<?php
/**
 * Post controller.
 *
 * @package Global Classic Theme Timber
 */

defined('ABSPATH') or exit();

$context = Timber\Timber::context();
$context['post'] = Timber\Timber::get_post();

Timber\Timber::render('post.twig', $context);
