<?php
/**
 * plugin name:Admin menu
 * description:simple a admin menu 
 * 
 */
if( !defined('ABSPATH') ){ exit;}

 class BPAS_Admin_Settings{
     public function __construct(){
        add_action( 'admin_menu', [$this,'wpdocs_register_my_custom_menu_page'] );
        add_action( 'admin_enqueue_scripts', [$this,'admin_menu_enqueue'] );
        // add_action( 'wp_ajax_form_data_post', array($this, 'form_submit_data_callback') );
        add_action( 'wp_ajax_form_data_post', array( $this, 'form_submit_data_callback' ) );
        add_action( 'wp_ajax_form_data_get', array( $this, 'form_submit_data_get_callback' ) );
        
     }

    public  function wpdocs_register_my_custom_menu_page(){
	add_menu_page( 
		'Admin Page',
		'Admin Menu',
		'manage_options',
		'Admin Page',
		[$this,'my_custom_menu_page'],
		'dashicons-welcome-widgets-menus',
		20
	); 
}
    public function admin_menu_enqueue($screen){
         if ($screen =="toplevel_page_Admin Page" ){
            $adminAssets = require plugin_dir_path( __FILE__ ) . 'assest/build/admin.asset.php';

    wp_enqueue_script( 'admin_js', plugin_dir_url( __FILE__ ) . '/assest/build/admin.js', $adminAssets['dependencies'], $adminAssets['version'] ,array('in_footer' => true));
    wp_enqueue_style( 'admin_style', plugin_dir_url( __FILE__ ) . '/assest/build/admin.css', [], '1.0.0' );
    wp_localize_script( 'admin_js', 'test_admin_page',
		array( 
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce("test_admin_nonce"),
			
		)
	);
}


    }
    function form_submit_data_callback(){
         check_ajax_referer('test_admin_nonce', 'nonce');
         
           $formData = json_decode(file_get_contents("php://input"), true);

        //  $email=$_GET["email"];
        //  $name=$_GET["name"];
        //  $gender=$_GET["gender"];
        //  $city=$_GET["city"];
        //  $position=$_GET["position"];

        //  $formData=array(
        //     "email"=>$email,
        //     "name"=>$name,
        //     "gender"=>$gender,
        //     "city"=>$city,
        //     "position"=>$position
        //  );
         update_option('test_admin_page', $formData);

        
         wp_send_json_success(["data"=>$formData]);

    }
    function form_submit_data_get_callback(){
        $formData=get_option("test_admin_page");
        wp_send_json_success($formData);
    }



  public function my_custom_menu_page(){

    echo '<div id="admin_menu_root"></div>';
}


 }

new BPAS_Admin_Settings();