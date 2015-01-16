<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

$cakeDescription = __d('cake_dev', 'CMGR');
// $cakeVersion = __d('cake_dev', 'CakePHP %s', Configure::version())
?>
<!DOCTYPE html>
<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<title>
		<?php echo $cakeDescription ?>:
		<?php echo $this->fetch('title'); ?>
	</title>
	<?php
		echo $this->Html->meta('icon');

		echo $this->Html->css('cake.cmgr');

		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>
	      <link type="text/css" rel="stylesheet" href="/libs/materialize/css/materialize.min.css"  media="screen,projection"/>

</head>
<body>

	 <nav class="teal">
      <div class="nav-wrapper container">
        <a href="/" class="brand-logo">CMGR</a>
        <ul id="nav-mobile" class="right side-nav">
          <!-- <li><a href="sass.html">Sass</a></li>
          <li><a href="components.html">Components</a></li> -->
          <?php if(AuthComponent::user('id')): ?>
        <li><a class="dropdown-button" href="#!" data-activates="dropdown1"><i class="mdi-social-person small left"></i>User<i class="mdi-navigation-arrow-drop-down right"></i></a></li>
    <?php else: ?>
     <li><a href="/sign-up">Sign Up</a></li>
 <?php endif; ?>
        </ul>

        <!-- Include this line below -->
        <a class="button-collapse" href="#" data-activates="nav-mobile"><i class="mdi-navigation-menu"></i></a>
        	<!-- Dropdown Structure -->
<ul id="dropdown1" class="dropdown-content">
  <li><a href="/me">View Profile</a></li>
 <!--  <li class="divider"></li> -->
  <li><a href="/logout">Logout</a></li>
</ul>
        <!-- End -->

      </div>
    </nav>
	<div id="container" class="container">
		<!-- <div id="header">
			<h1><?php echo $this->Html->link($cakeDescription, '/'); ?></h1>
		</div> -->
		<div id="content">

			<?php echo $this->Session->flash(); ?>

			<?php echo $this->fetch('content'); ?>
		</div>
		<div id="footer">
			
		</div>
	</div>
	<?php 
	// echo $this->element('sql_dump'); 
	?>
		      <script type="text/javascript" src="/libs/jquery/jquery.js"></script>

	      <script type="text/javascript" src="/libs/materialize/js/materialize.min.js"></script>
	      <script type="text/javascript">
	      $(function(){
$('select').material_select();
$(".button-collapse").sideNav();
$(".dropdown-button").dropdown({hover: false});
});
	      </script>
	      		      <script type="text/javascript" src="/js/scripts.js"></script>

	      	     


</body>
</html>
