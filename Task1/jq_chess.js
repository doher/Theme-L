(function ($) {
    $(document).ready(function () {

        $('table.CHESS').css({
            'background-color': 'rgb(129, 194, 127)'
        })

        $('table.CHESS').find('tr').each(function (i) {
            $(this).children('td').each(function (j) {
                if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                    $(this).addClass('white');
                } else {
                    $(this).addClass('black');
                }
            })
        })

        $('.white').css({
            'background-color': 'white'
        });

        $('.black').css({
            'background-color': 'black'
        });
    });
})($);