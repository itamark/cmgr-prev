<div class="items index">
	<div class="row">
			<div class="col l8 itemscontainer">
<?php echo $this->Form->create(null, array('url'=>'/items/add')); ?>
<!-- 		<legend><?php echo __('Add Item'); ?></legend>
 -->		
				<?php
		
		echo $this->Form->input('user_id', array('options' => $users, 'default' => AuthComponent::user('id'), 'type' => 'hidden'));
		echo $this->Form->input('title', array('type' => 'hidden'));
		
		echo $this->Form->input('description', array('label' => 'Ask and share...'));
		echo $this->Form->input('url', array('type' => 'hidden'));
		echo $this->Form->input('topic_id', array('options' => $topics));
	?>
			
	
<?php echo $this->Form->end(__('Post')); ?>

<?php foreach ($items as $item): ?>

<div class="card">
            <div class="card-content">

<div class="row">
<div class="col l2">
		<img class="media-object round" src="https://secure.gravatar.com/avatar/<?php echo md5(h($item['User']['email'])); ?>?s=50&d=mm">
</div>
<div class="col l8">
             		 <h5 class=""><?php echo h($item['Item']['description']); ?></span>



</div>
<div class="col l2">
  <!-- Dropdown Structure -->
  <?php if($item['User']['id'] === AuthComponent::user('id')){ ?>
  	 <!-- Dropdown Trigger -->
  <a class='dropdown-button btn btn-small grey white-text' href='#' data-activates='dropdown1'><i class="mdi-navigation-more-vert"></i></a>
  <ul id='dropdown1' class='dropdown-content'>
    <li><?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $item['Item']['id']), array(), __('Are you sure you want to delete # %s?', $item['Item']['id'])); ?>
</li>

  </ul>
  <?php } ?>
</div>

  </div>

<div class="row">
<div class="col l12">
 <ul class="collection" id="<?php echo 'collectionitem'.$item['Item']['id']; ?>">
    
    

<?php foreach ($item['Comment'] as $comment): ?>
	  <li class="collection-item">
<img class="media-object round" src="https://secure.gravatar.com/avatar/<?php echo md5(h($item['User']['email'])); ?>?s=20&d=mm">
<?php echo $comment['comment_txt']; ?>
</li>
<?php endforeach; ?>
</ul>
</div>
</div>
<div class="row">
<div class="col l12">
	<?php echo $this->Form->create('Comment', array('action' => 'add')); ?>
	<?php
		echo $this->Form->input('user_id', array( 'default' => AuthComponent::user('id'), 'type' => 'hidden'));
		echo $this->Form->input('comment_txt', array('label' => 'Comment'));
		echo $this->Form->input('item_id', array( 'default' => $item['Item']['id'], 'type' => 'hidden'));
	?>
<?php echo $this->Form->end(__('Submit')); ?>
</div>

</div>
        

</div>
		</div>
<?php endforeach; ?>
</div>
		</div>
<!-- 	<table cellpadding="0" cellspacing="0">
	<thead>
	<tr>
			<th><?php echo $this->Paginator->sort('id'); ?></th>
			<th><?php echo $this->Paginator->sort('url'); ?></th>
			<th><?php echo $this->Paginator->sort('user_id'); ?></th>
			<th><?php echo $this->Paginator->sort('title'); ?></th>
			<th><?php echo $this->Paginator->sort('description'); ?></th>
			<th><?php echo $this->Paginator->sort('topic_id'); ?></th>
			<th><?php echo $this->Paginator->sort('created'); ?></th>
			<th><?php echo $this->Paginator->sort('modified'); ?></th>
			<th class="actions"><?php echo __('Actions'); ?></th>
	</tr>
	</thead>
	<tbody>
	<?php foreach ($items as $item): ?>
	<tr>
		<td><?php echo h($item['Item']['id']); ?>&nbsp;</td>
		<td><?php echo h($item['Item']['url']); ?>&nbsp;</td>
		<td>
			<?php echo $this->Html->link($item['User']['name'], array('controller' => 'users', 'action' => 'view', $item['User']['id'])); ?>
		</td>
		<td><?php echo h($item['Item']['title']); ?>&nbsp;</td>
		<td><?php echo h($item['Item']['description']); ?>&nbsp;</td>
		<td>
			<?php echo $this->Html->link($item['Topic']['name'], array('controller' => 'topics', 'action' => 'view', $item['Topic']['id'])); ?>
		</td>
		<td><?php echo h($item['Item']['created']); ?>&nbsp;</td>
		<td><?php echo h($item['Item']['modified']); ?>&nbsp;</td>
		<td class="actions">
			<?php echo $this->Html->link(__('View'), array('action' => 'view', $item['Item']['id'])); ?>
			<?php echo $this->Html->link(__('Edit'), array('action' => 'edit', $item['Item']['id'])); ?>
			<?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $item['Item']['id']), array(), __('Are you sure you want to delete # %s?', $item['Item']['id'])); ?>
		</td>
	</tr>
<?php endforeach; ?>
	</tbody>
	</table> -->
<!-- 	<p>
	<?php
	echo $this->Paginator->counter(array(
	'format' => __('Page {:page} of {:pages}, showing {:current} records out of {:count} total, starting on record {:start}, ending on {:end}')
	));
	?>	</p>
	<div class="paging">
	<?php
		echo $this->Paginator->prev('< ' . __('previous'), array(), null, array('class' => 'prev disabled'));
		echo $this->Paginator->numbers(array('separator' => ''));
		echo $this->Paginator->next(__('next') . ' >', array(), null, array('class' => 'next disabled'));
	?>
	</div>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>
		<li><?php echo $this->Html->link(__('New Item'), array('action' => 'add')); ?></li>
		<li><?php echo $this->Html->link(__('List Users'), array('controller' => 'users', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New User'), array('controller' => 'users', 'action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(__('List Topics'), array('controller' => 'topics', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Topic'), array('controller' => 'topics', 'action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(__('List Comments'), array('controller' => 'comments', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Comment'), array('controller' => 'comments', 'action' => 'add')); ?> </li>
	</ul>
</div> -->
