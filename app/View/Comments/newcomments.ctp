<?php foreach($comments as $comment): ?>
<li class="collection-item">
<img class="media-object round" src="https://secure.gravatar.com/avatar/<?php echo md5(h($comment['User']['email'])); ?>?s=20&d=mm">

<?php echo $comment['Comment']['comment_txt']; ?></li>
<?php endforeach; ?>