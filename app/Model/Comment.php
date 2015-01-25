<?php
App::uses('AppModel', 'Model');
/**
 * Comment Model
 *
 * @property User $User
 * @property Item $Item
 */
class Comment extends AppModel {

/**
 * Display field
 *
 * @var string
 */
	public $displayField = 'comment_txt';


	//The Associations below have been created with all possible keys, those that are not needed can be removed

/**
 * belongsTo associations
 *
 * @var array
 */
	public $belongsTo = array(
		'User' => array(
			'className' => 'User',
			'foreignKey' => 'user_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		),
		'Item' => array(
			'className' => 'Item',
			'foreignKey' => 'item_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		)
	);
}
