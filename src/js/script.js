$(document).ready(() => {
    $('#mobile-btn').on('click', () => {
        $('#mobile-menu').toggleClass('active')
        $('#mobile-btn').find('i').toggleClass('fa-x')
    })

    const sections = $('section')
    const navItems = $('.nav-item')

    $(window).on('scroll', () => {
        const header = $('header')
        const scrollPosition = $(window).scrollTop() - header.outerHeight()

        console.log(scrollPosition);

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)')
        }

        let activeSectionIndex = 0

        sections.each(function (i) {
            const section = $(this)
            const sectionTop = section.offset().top
            const sectionBottom = sectionTop + section.outerHeight()

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i
                return false
            }
        })
        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active')

    })

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

})