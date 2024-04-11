$(document).ready(function() {
    setTimeout(function() {
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });
        console.log('Isotope grid initialized');

        $('.button-group').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    }, 1000);

});


