$(window).resize(() => {

    let $navList = $('#navList');
    if (window.innerWidth > 799)
        $navList.show('fast');
    else 
      $navList.hide('fast');
});

$(function() {
  console.log('loaded');
  // $(document).on('change', '.contentWrapper', () => {
  //   consle.log('contentWrapper was changed');
  //   // let $root = $('#root');
    
  // });
  // const changeHeightAwesomeBorder = () => {
  //   $('#awesomeBorder').css('height', $('#root').innerHeight());
  // };
  // $('.header').fadeIn('slow');
  // $('#main').fadeIn('slow');
  // $('footer').fadeIn('slow');
  $('#closeMenuButton').hide();

  $(document).on('click', '.not-follow', openUrlInNewWindow);

  function openUrlInNewWindow(e) {
    e.preventDefault();
    
    let $target = $(e.target);
    
    $target = $target[0].tagName === 'A' ? $target : $target.parent();
      
    let url = $target.prop('href');
    
    window.open(url);
  }// end openUrlInNewWindow

});// end ready