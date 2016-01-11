<?php /* Template Name: Home Page */ get_header(); ?>
  <?php if (have_posts()): while (have_posts()) : the_post(); ?>



  <article class="mapblock" xmlns:ng="http://angularjs.org" data-ng-app="app" data-ng-controller="App as app">

  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/app/app.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/app/cloack.css">

  <script>
    document.domain = "kadastrmap.ru";
  </script>



  <script>
    window.routs = {
      api: {
        kadastr_num: '/api/kadastr/num'
      },
      contact_us: '/contact-us/'
    };
  </script>
  <script>
    (function(w) {
      w.e = 'em';
      w.e = w.e instanceof Array ? w.e.join('') : w.e !== null ? w.e : '';
      w.lh = !!0;
    })(window);
  </script>

  <script src="<?php echo get_template_directory_uri(); ?>/js/map/json3.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/jquery-1.9.1.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/modernizr-2.6.2.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/yepnope.1.5.4-min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/amplify.store.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/angular.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/app.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/cfg.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/cfg(1).js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/factory.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/filters.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/directives.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/ctrl.js"></script>

  <script src="<?php echo get_template_directory_uri(); ?>/js/map/contact-us.ctrl.js"></script>

  <script src="<?php echo get_template_directory_uri(); ?>/js/map/jquery.sendkeys.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/bililiteRange.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/search.ctrl(1).js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/ZeroClipboard.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/map.ctrl(1).js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/partners.ctrl.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/main(1).js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/map/Cloak.js"></script>







          <form name="searchForm" class="b-search ng-pristine ng-scope ng-invalid ng-invalid-required ng-valid-pattern" ng-controller="Search as search">

            <div class="b-search__title">
              <h1>Узнайте кадастровую стоимость недвижимости</h1>
              <noindex>
                <a href="javascript:;" class="b-search__help active" ng-class="{active: search.show_help_icon}" ng-click="search.toggleShowHelp()" ng-mouseenter="search.toggleShowHelp(true)">
                  <div class="tooltip">
                    Кадастровую стоимость участка
                    <br> можно узнать в уведомлении
                    <br> Департамента земельных ресурсов
                  </div>
                </a>
              </noindex>
            </div>

            <div class="row">
              <div class="column column--l">

                <input type="text" class="b-search__query ng-pristine ng-invalid ng-invalid-required ng-valid-pattern ng-touched" name="query" ng-disabled="search.processing" ng-model="search.form.query" ng-pattern="/\d+\:\d+\:\d+\:\d+/" ng-required="1"
                placeholder="Введите кадастровый номер земельного участка или здания" required="required">
                <div class="b-search__progress ng-hide" ng-show="search.processing" ng-style="{width: search.progress}"></div><a href="javascript:;" class="b-search__example" ng-click="search.setExample()">Например: <span ng-bind="search.exampleQuery" class="ng-binding">77:02:0016009:32</span></a></div>

              <div class="column column--r">
                <button class="b-search__submit ng-binding" ng-click="search.submit()" ng-bind="search.processing ? &#39;Загрузка…&#39;: &#39;Найти&#39;" ng-disabled="searchForm.query.$invalid || search.processing" disabled="disabled">Найти</button>
              </div>

              <span style="display: inline-block; font-size: 10pt; position: relative; float: right; right: 4px; top: -18px;">Не знаете номер? Не получается найти? Найдите объект вручную на карте, запишите номер</span>
            </div>
          </form>

          <div class="b-result-box ng-scope ng-hide" id="ResultBox" ng-controller="Result as result" ng-show="result.data">
            <div class="b-result-box-header">
              <div class="row">
                <div class="column l">
                  <div class="b-result-box-header-icon"></div>
                </div>
                <div class="column r">
                  <div class="b-result-title ng-binding">Кадастровый номер участка </div>
                  <div class="b-result-text ng-binding">Адрес: </div>
                  <div class="b-result-text ng-binding">Уточненная площадь: м<sup>2</sup></div>
                  <input type="hidden" id="query11" style="visibility: hidden; height:0; opacity:0;overflow:hidden;">
                  <div class="copy-dynamic">
                    <p id="copy-dynamic" data-clipboard-target="query11">Скопировать ссылку на участок</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="b-result-cost">Кадастровая стоимость:
              <strong class="ng-binding">0 руб.</strong>
            </div>
          </div>

          <div class="b-map ng-scope" ng-controller="Map as map" ng-show="map.src">

            <iframe ng-src="http://maps.rosreestr.ru/PortalOnline/?l=5&amp;x=4939924.063650749&amp;y=7362998.703595956&amp;mls=map|anno&amp;cls=cadastre" ng-show="map.src" class="b-map__iframe"></iframe>

          </div>

        <div class="column l-content__col--b">
          <div class="b-partners ng-scope" ng-controller="Partners as partner" ng-show="app.mapLoaded">
          </div>
        </div>




















  </article><!-- /.mapblock -->













    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <?php the_content(); ?>
    </article>
  <?php endwhile; else: // If 404 page error ?>
    <article>
      <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
    </article>
  <?php endif; ?>
<?php get_footer(); ?>
