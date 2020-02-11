$('document').ready(function(){

  $('.parent').hover(function(){
    $(this).addClass('active');
    var children = $('.active').children('.child-wrap');
    children.show();
  },function(){
    $(this).removeClass('active');
    $(this).children('.child-wrap').hide();
  });

  $('.child').hover(function(){
    $(this).addClass('active2');
    var grandChild = $('.active2').children('.grand-child-wrap');
    grandChild.show();
  },function(){
    $(this).removeClass('active2');
    $(this).children('.grand-child-wrap').hide();

  });

  $('.grand-child').hover(function(){
    $(this).addClass('active3');
    var grandChildChild = $('.active3').children('.grand-child-child-wrap');
    grandChildChild.show();
  },function(){
    $(this).removeClass('active3');
    $(this).children('.grand-child-child-wrap').hide();

  });
});