<?php
header("Content-type: application/json; charset=utf-8");
$data = [
	'key1' => 'value1',
	'key2' => 'value2',
];

echo json_encode($data);