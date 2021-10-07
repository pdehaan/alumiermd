/**
 * Created by nazar on 15.12.2015.
 */
$(document).ready(function(){
    $('.blog-grid__items').masonry({
        columnWidth: '.blog-grid-item',
        itemSelector: '.blog-grid-item',
        percentPosition: true
    });
    $('ul.menu').addClass('nav navbar-nav');
    $('li.menu-item-has-children').addClass('dropdown main__nav__item--nested').find('a.main__nav__item__link').addClass('dropdown-toggle hascarret').
        attr({
            'data-toggle' : 'dropdown',
            'aria-haspopup' : 'true',
            'role' : 'button'
        });
    $('li.dropdown.main__nav__item--nested').find('a.hascarret').append('<i id="caret" class="caret"></i>');

    $('a.a2a_dd').addClass('fa fa-share-square-o');
    $('ul.footer-nav__nav__list').find('li.menu-item').addClass('footer-nav__nav__link').css({
        'float':'none',
        'color':'#fff'
    });
	
	/* Alumier post toggle */
	$('.alumier-post-toggle').on('click', function(){
		$(this).next().toggle();
	});

});