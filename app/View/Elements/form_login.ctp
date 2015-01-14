	<div class="col card l6 offset-l3">
            <div class="card-content">
              <span class="card-title grey-text "><?php echo $label ?></span>

		<?php echo $this->Form->create('User',array(
												'url' => array(
													'controller' => 'users',
													'action' => 'login'
												)));?>
		<div class="center">
			<h2><?php echo Configure::read('Application.name') ?></h2>
		</div>

		  <?php echo $this->Form->input('email', array('label' => __('Email')));?>
		  <?php echo $this->Form->input('password', array('label' => __('Password')));?>
		  <div class="form-group">
		  	<?php echo $this->Html->link(__('Forgot your password?'),array('controller' => 'users','action' => 'remember_password')) ?>
		  </div>
		  <div class="checkbox">
		      <input type="checkbox" name="data[User][remember_me]" value="S" id="rememberme"> 
		   <label for="rememberme"><?php echo __('Remember me')?></label>

		  </div>
		  <button type="submit" class="btn btn-default"><?php echo __('Login')?></button>
		</form>


	</div>
	</div>
