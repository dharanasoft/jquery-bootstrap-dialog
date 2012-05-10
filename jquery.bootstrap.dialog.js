(function($){
  $.fn.bootstrap_dialog = function(options){
    var title, content, ok, cancel, remove, hide_close;
    var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
 
    if(typeof options == "string"){
      switch(options){
        case "close": 
          $(this).data("current_dialog").hide();
          $("#modal_background").hide();
          $("#modal").hide();
          break;
        case "destroy":
          $(this).data("current_dialog").remove();
          $("#modal_background").remove();
          $("#modal").remove();
          break;
      }
      return $(this);
    }
    if(options) {
      title=options.title;
      content=options.content;
      hide_close=options.hide_close;
      if(options.ok)
        ok=__bind(options.ok,this);
      if(options.cancel)
        cancel=__bind(options.cancel,this);
      if(options.remove)
        remove=__bind(options.remove,this);
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
    $(this).data("current_dialog",current_dialog);
    if(options.hide_close) {
      $("<div class='modal-header'/>").appendTo(current_dialog).append("<h3>"+title+"</h3");
    } else {
      $("<div class='modal-header'/>").appendTo(current_dialog).append("<h3>"+title+"</h3").append("<a href='#' class='close'>x</a>");
    }
    if(options.content) {
      $("<div class='modal-body'>").appendTo(current_dialog).append(options.content);
    } else {
      $("<div class='modal-body'>").appendTo(current_dialog).append($(this));
    }
    console.log(current_dialog)
    if(ok || cancel || remove) {
      footer = $("<div class='modal-footer'>").appendTo(current_dialog);
      if(ok) {
        $("<a href='#' class='btn btn-primary'>Save</a>").appendTo(footer).click(function(e){ e.preventDefault(); ok();});
      }
      if(cancel) {
        $("<a href='#' class='btn'>Cancel</a>").appendTo(footer).click(function(e){ e.preventDefault(); cancel();});
      }
      if(remove) {
        $("<a href='#' class='btn btn-danger'>Delete</a>").appendTo(footer).click(function(e){ e.preventDefault(); remove();});
      }
    }
    $(current_dialog.find(".modal-header a.close")).click(function(){
      current_dialog.hide();
      $("#modal_background").hide();
    });
    return $(this);
  };
})(jQuery);


