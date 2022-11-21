<?php
// Redirect to ./R15E
// This is so just it redirects to ./R15E (the capital letters) when the cpanel redirects ain't working.
// Making sure that it also throws a permanent 301 so that everyone's aware.
// Hacky implementation, I know - but this should be enough for now.
// - Macky

header('Location: https://feutech.acm.org/R15E', true, 301);
exit;
?>