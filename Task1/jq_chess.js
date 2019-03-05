(function ($) {
    $(document).ready(function () {

        $('table.CHESS').css({
            'background-color': 'rgb(129, 194, 127)'
        })

        $('table.CHESS').find('tr:odd').each(function () {
            $(this).children('td:odd').each(function () {
                $(this).addClass('white');
            });

            $(this).children('td:even').each(function () {
                $(this).addClass('black');
            });
        });

        $('table.CHESS').find('tr:even').each(function () {
            $(this).children('td:odd').each(function () {
                $(this).addClass('black');
            });

            $(this).children('td:even').each(function () {
                $(this).addClass('white');
            });
        });

        $('.white').css({
            'background-color': 'white'
        });

        $('.black').css({
            'background-color': 'black'
        });

        $('table.CHESS').find('tr:first').each(function () {
            $(this).children('td').css({
                'background-color': 'rgb(129, 194, 127)'
            })
        });

        $('table.CHESS').find('tr:last').each(function () {
            $(this).children('td').css({
                'background-color': 'rgb(129, 194, 127)'
            })
        });

        $('table.CHESS').find('tr').each(function () {
            $(this).children('td:first').css({
                'background-color': 'rgb(129, 194, 127)'
            })
        });

        $('table.CHESS').find('tr').each(function () {
            $(this).children('td:last').css({
                'background-color': 'rgb(129, 194, 127)'
            })
        });
    });
})($);