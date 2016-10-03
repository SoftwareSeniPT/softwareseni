var app = {
  init: function(){
    app.myFunc();
  },
  onResize: function() {},
  myFunc: function(){}
};

jQuery(document).ready(function(){
  app.init();
});

jQuery(window).resize(function(){
  app.onResize();
});
