<?php
/**
 * Page controller.
 *
 * @package Global Classic Theme Timber
 */

defined('ABSPATH') or exit();

$context = Timber\Timber::context();

$context['faq_items'] = [
    [
        'question' => 'What is this theme built with?',
        'answer'   => 'This theme is built with WordPress, Timber, and Twig for templating, and uses Webpack to compile SCSS and JavaScript.',
    ],
    [
        'question' => 'Does it support the block editor?',
        'answer'   => 'Yes, the theme supports the WordPress block editor (Gutenberg) while remaining a classic theme without full site editing.',
    ],
    [
        'question' => 'How do I compile the assets?',
        'answer'   => 'Run <code>yarn build</code> for a production build or <code>yarn watch</code> to recompile automatically during development.',
    ],
    [
        'question' => 'Can I add more components?',
        'answer'   => 'Absolutely. Each component lives in its own folder under <code>components/</code> with its own Twig, SCSS, and JS files.',
    ],
];

Timber\Timber::render('page.twig', $context);
