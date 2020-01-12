$(document).ready(function(e){
    "use strict";
    $('.search-panel').each( function() {
      var to = $(this).data('search').toString();
      var text = $(this).find('[data-search="' + to + '"]').html();
      $(this).find('button span.search_by').html(text);
    });
    
    $('.search-panel li a').on('click', function(e){
      var sp = $(this).closest('.search-panel');
      var to = $(this).html();
      var text = $(this).html();
      sp.data('search', to);
      console.log(sp.find('.search_by'));
      sp.find('button span.search_by').html(text);
    });
});