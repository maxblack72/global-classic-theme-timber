<?php

defined('ABSPATH') or exit();

Timber\Timber::init();

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('wp-block-styles');
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'global-classic-theme-timber-main',
        get_template_directory_uri() . '/static/main.css',
        [],
        '1.0.0'
    );

    wp_enqueue_script(
        'global-classic-theme-timber-main',
        get_template_directory_uri() . '/static/main.js',
        [],
        '1.0.0',
        true
    );
});
