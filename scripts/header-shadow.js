var $document = $(document),
  $element = $('header'),
  className = 'shadow-5';

$document.scroll(function() {
  if ($document.scrollTop() >= 40) {
    // Change 50 to the value you require
    // for the event to trigger
    $element.addClass(className);
  } else {
    $element.removeClass(className);
  }
});
