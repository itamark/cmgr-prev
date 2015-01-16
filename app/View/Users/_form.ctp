<div class="row">
    <div class="col l6 offset-l3">
    <?php echo $this->Form->create('User');?>
    <div class="center">
      <h3><?php echo $label ?></h3>
    </div>

    <hr>
    <?php echo $this->Form->input('name',array(
            'label' => __('Name'),
            'placeholder' => false,
            'value' => !empty( $user['name'] ) ? $user['name'] : ''));?>


         <?php echo $this->Form->input('username',array(
            'label' => __('Username'),
            'placeholder' => false,
            'value' => !empty( $user['username'] ) ? $user['username'] : ''));?><br>
      
        <?php echo $this->Form->input('email', array(
            'label' => __('Email'),
            'placeholder' => false,
            'value' => !empty( $user['email'] ) ? $user['email'] : ''));?>
     
        <?php echo $this->Form->input('password',array(
            'label' => __('Password'),
            'placeholder' => false,
            'value' => false));?>


	      <?php if(AuthComponent::user('role') == 'admin'){?>
        <?php echo $this->Form->input('role', array(
            'label' => __('Role'),
            'placeholder' => false,
            'options' => array('admin' => __('Admin'), 'author' => __('Author')),
            'selected' => !empty( $user['role'] ) ? $user['role'] : ''));?>
	      <?php }?>
      
        <?php echo $this->Form->end(__("Submit"));?>
  </div>
</div>
