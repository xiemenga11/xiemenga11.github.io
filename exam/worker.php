<?php
$p = $_POST;
$file = fopen('js/one.js', 'a');
switch ($p['a']) {
	case 'A':
		$p['a'] = 0;
		break;
	case 'B':
		$p['a'] = 1;
		break;
	case 'C':
		$p['a'] = 2;
		break;
	case 'D':
		$p['a'] = 3;
		break;
	default:
		# code...
		break;
}
fwrite($file, "{\n");
fwrite($file, '  title:"'.$p['title']."\",\n");
fwrite($file, '  p:'.$p['p'].",\n");
fwrite($file, '  a:'.$p['a'].",\n");
fwrite($file, "},\n");
fclose($file);
echo 1;
 ?>
