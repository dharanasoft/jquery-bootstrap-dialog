(function($){
  $.fn.bootstrap_dialog = function(options){
    var title, ok, cancel;
    var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
 
    if(typeof options == "string"){
      switch(options){
        case "close": 
          $(this).data("current_dialog").hide();
          $("#modal_background").hide();
          break;
        case "destroy":
          $(this).data("current_dialog").remove();
          $("#modal_background").hide();
          break;
      }
      return $(this);
    }
    if(options) {
      title=options.title;
      if(options.ok)
        ok=__bind(options.ok,this);
      if(options.cancel)
        cancel=__bind(options.cancel,this);
    }
    else {
      title="";
    }
    if($("#modal_background").length==0){
      $("body").append("<div class='modal_background' id='modal_background'>");
      $("#modal_background").show();
    }
    $("#modal_background").show();
    current_dialog=$("<div class='modal'></div>").appendTo("body").attr("style","position:absolute; z-index: 25000; margin: 0");
    current_dialog.css("top",($(window).height()-current_dialog.height())/2);
    current_dialog.css("left",($(window).width()-current_dialog.width())/2);
    $(this).data("current_dialog",current_dialog)
    $("<div class='modal-header'/>").appendTo(current_dialog).append("<h3>"+title+"</h3").append("<a href='#' class='close'>x</a>");
    console.log(current_dialog)   
    $("<div class='modal-body'>").appendTo(current_dialog).append($(this));
    if(ok || cancel) {
      footer = $("<div class='modal-footer'>").appendTo(current_dialog);
      if(ok) {
        $("<a href='#' class='btn primary'>Save</a>").appendTo(footer).click(function(){ok();});
      }
      if(cancel) {
        $("<a href='#' class='btn'>Cancel</a>").appendTo(footer).click(function(){cancel();});
      }
    }
    $(current_dialog.find(".modal-header a.close")).click(function(){
      current_dialog.hide();
      $("#modal_background").hide();
    });
    return $(this);
  };
})(jQuery);
