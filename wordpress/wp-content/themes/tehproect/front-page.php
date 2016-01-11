<?php /* Template Name: Home Page */ get_header(); ?>
  <?php if (have_posts()): while (have_posts()) : the_post(); ?>



  <article class="mapblock">

  <div class="mapcenterok">
    <iframe src="" frameborder="0"></iframe>
  </div>






  </article><!-- /.mapblock -->



<script>
  $( document ).ready(function() {
    $(".mapcenterok iframe").attr("src", "http://maps.rosreestr.ru/PortalOnline/?l=5&x=4939924.063650749&y=7362998.703595956&mls=map|anno&cls=cadastre");
  })

</script>









    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <?php the_content(); ?>
    </article>
  <?php endwhile; else: // If 404 page error ?>
    <article>
      <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
    </article>
  <?php endif; ?>
<?php get_footer(); ?>
