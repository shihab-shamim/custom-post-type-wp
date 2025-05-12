<?php
/**
 * Plugin Name: Slider
 * Description: Short description of the plugin
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'PREFIX_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'PREFIX_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'PREFIX_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'PREFIXPlugin' ) ){
	class PREFIXPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
			add_action('init', [$this, 'slider_post_type']);
             add_shortcode( 'slider',  [$this,'slider_shortcode'] );
              add_filter('manage_posts_columns',  [ $this,'manage_posts_columns']);
              add_action('manage_posts_custom_column',  [ $this,'manage_posts_custom_column'], 10, 2);
              add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_admin_assets' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
		 function slider_post_type(){
            register_post_type('test_purpose', [
                    'label' => 'Slider',
                    'labels' => [
                        'add_new' => 'Add New',
                        'add_new_item' => 'Add New Slider',
                        'edit_item' => 'Edit Slider',
                        'not_found' => 'There was no Slider please add one'
                    ],
                    'show_in_rest' => true,
                    'public' => true,
                    'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M2 11.2v1.5h20v-1.5H2zM5.5 6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v3H20V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3h1.5V6zm2 14h2v-1.5h-2V20zm3.5 0h2v-1.5h-2V20zm7-1.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zm.5-2H20V15h-1.5v1.5zM5.5 18H4c0 1.1.9 2 2 2v-1.5c-.3 0-.5-.2-.5-.5zm0-3H4v1.5h1.5V15zm9 5h2v-1.5h-2V20z"></path></svg>'),
                    'template' => [['b-blocks/test-purpose']],
                    'template_lock' => 'all',
                ]);
        }

            function slider_shortcode( $atts ){
             $postId = $atts['id'];
            $post = get_post($postId);
            $block = parse_blocks($post->post_content);
            ob_start();
            echo render_block($block[0]);
            return ob_get_clean();
      }
      function manage_posts_columns ($defaults){
            unset($defaults['date']);
            $defaults['shortcode'] = "Shortcode";
            $defaults['author'] = "Post by";
            $defaults['date'] = "Date";
            return $defaults;
        }
         function manage_posts_custom_column ($column_name, $post_ID){
            if ($column_name == "shortcode") {
                //  echo '[slider id='.$post_ID.']';
            echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr( $post_ID ) . '">
                     <input value="[slider id=' . esc_attr( $post_ID ) . ']" onclick="copyBPlAdminShortcode(this)">
                     <span class="tooltip">' . esc_html__( 'Copy To Clipboard' ) . '</span>
                   </div>';
            }
           
        }
        function enqueue_admin_assets() {
    wp_enqueue_script(
        'slider-admin-script',
        PREFIX_DIR_URL . 'src/admin/admin.js',
        [],
        PREFIX_VERSION,
        true
    );

    wp_enqueue_style(
        'slider-admin-style',
        PREFIX_DIR_URL . 'src/admin/post.css',
        [],
        PREFIX_VERSION
    );
}

        
	}
	new PREFIXPlugin();
}

