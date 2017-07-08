$(window).resize(() => {

    let $navList = $('#navList');
    let $closeMenuButton = $('#closeMenuButton');
    if (window.innerWidth > 799) {
      $navList.show('fast');
      $closeMenuButton.hide();
    } else  {
      $navList.hide('fast');
      $closeMenuButton.show();
    }
});

$(function() {

  $(document).on('click', '.not-follow', openUrlInNewWindow);

  function openUrlInNewWindow(e) {
    e.preventDefault();
    
    let $target = $(e.target);
    
    $target = $target[0].tagName === 'A' ? $target : $target.parent();
      
    let url = $target.prop('href');
    
    window.open(url);
  }// end openUrlInNewWindow

});// end ready