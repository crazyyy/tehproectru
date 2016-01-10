<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

    <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->
    <!-- meta -->

    <!-- icons -->
    <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">

    <!--[if lt IE 9]>
      <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/html5shiv.js"></script>
      <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/selectivizr.js"></script>
      <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/respond.js"></script>
    <![endif]-->
    <!-- css + javascript -->
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!-- wrapper -->
<div class="wrapper">
  <header role="banner">
    <div class="inner">

      <div class="logo">
        <?php if ( is_front_page() && is_home() ){ } else { ?>
          <a href="<?php echo home_url(); ?>">
            <?php  } ?>
            <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>" title="<?php wp_title( '' ); ?>" class="logo-img">
            <?php if ( is_front_page() && is_home() ){
            } else { ?>
          </a>
        <?php } ?>
      </div><!-- /logo -->

      <h2 class="site-title"><?php bloginfo( 'name' ); ?></h2>
      <h3 class="site-description"><?php bloginfo( 'description' ); ?></h3>
      <div class="phone-block">
        <a href="tel:88672989015" class="phone"><i class="fa fa-phone"></i>8(8672) 98 90 15</a>
        <a href="tel:89188289015" class="phone"><i class="fa fa-phone"></i>8-918-828-90-15</a>
        <span class="phone"><i class="fa fa-whatsapp"></i>8-928-935-04-45</i></span>
        <a href="#" class="recall">Обратный звонок</a>
      </div><!-- /.phone-block -->

      <nav class="nav" role="navigation">
        <?php wpeHeadNav(); ?>
      </nav><!-- /nav -->

    </div><!-- /.inner -->
  </header><!-- /header -->

  <section role="main">
    <div class="inner">
