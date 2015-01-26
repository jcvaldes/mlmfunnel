$(function () {

    var opt = {
        word : '',
        start: '',
        end: '',
        "bFilter": true,
    };

    opt.sDom = "<'row'<'col-md-6'f><'col-md-6'T>r>t<'row'<'col-md-6'i><'spcol-md-6an6'p>>",
    opt.oTableTools = {
        "sSwfPath": "/assets/plugins/datatables/swf/copy_csv_xls_pdf.swf",
        "aButtons": ["csv", "pdf"]
    };

    opt.order = [[ 5, "desc" ]]

    opt.columnDefs = [            
            {
                "targets": [ 4 ],
                "visible": false
            },
            {
                "targets": [ 0 ],
                "visible": false
            }
        ];

    opt.language = {"sProcessing":     "Procesando...", "sLengthMenu":     "Mostrar _MENU_ registros", "sZeroRecords":    "No se encontraron resultados", "sEmptyTable":     "Ningún dato disponible en esta tabla", "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros", "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros", "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)", "sInfoPostFix":    "", "sSearch":         "Buscar: ", "sUrl":            "", "sInfoThousands":  ",", "sLoadingRecords": "Cargando...", "oPaginate": {"sFirst":    "Primero", "sLast":     "Último", "sNext":     "Siguiente", "sPrevious": "Anterior"}, "oAria": {"sSortAscending":  ": Activar para ordenar la columna de manera ascendente", "sSortDescending": ": Activar para ordenar la columna de manera descendente"} };


    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {  
            //alert(settings.oPreviousSearch.sSearch);
            if(settings.oPreviousSearch.sSearch == 'datecomparevaluesofthis'){
                var start = opt.start.split('-');
                var end = opt.end.split('-');

                var current = data[5].split('-');

                var startDate=new Date();startDate.setFullYear(start[0],(start[1] - 1 ),start[2]);
                var endDate=new Date();endDate.setFullYear(end[0],(end[1] - 1 ),end[2]);
                var currentDate=new Date();currentDate.setFullYear(current[0],(current[1] - 1 ),current[2]);     

                console.log(startDate >= currentDate +" -- "+ endDate <= currentDate);

                console.log(startDate +" start- "+ currentDate +" -- "+ endDate +" end- "+ currentDate);

                if (startDate >= currentDate && endDate <= currentDate){
                    return true;
                }else{
                    return false;
                }
            }  

            var letra = opt.word;
            var page = $('#filter-page').val();

            if ((letra == data[0] || letra == '' ) && page == data[4])
            {
                return true;
            }
            return false;
        }
    );






$.fn.dataTable.ext.afnFiltering.push(
    function( oSettings, aData, iDataIndex ) {
        var start = moment(opt.start);
        var end = moment(opt.end);
        var current = moment(aData[5]);

        if(moment(opt.start).isValid()){
            $("#start").datepicker('update', new Date(opt.start));
        }

        if(moment(opt.end).isValid()){
            $("#end").datepicker('update', new Date(opt.end));
        }        
       

        if (start <= current && end >= current)
        {
            console.log(start +" -> "+ end +" -> "+ current);
            return true;
        }
        return false;
    }
);










    var oTable = $("#datatable").dataTable(opt);
    oTable.fnDraw();

    $(".filter-word").on("click", function(){
        opt.word = $(this).data('word');
        oTable.fnFilter(opt.word);
    })

    $('.filter').change( function() { 
        if($(this).val() == 'false'){
            oTable.fnFilter( $('#filter-page').val() );
        }else{
            oTable.fnFilter( $(this).val() );
        }        
    });

    oTable.fnFilter( $('#filter-page').val() );

    $("#filter-date").on("click", function(){
        opt.start = moment($('#start').data('date')).format("YYYY-MM-DD");
        opt.end = moment($('#end').data('date')).format("YYYY-MM-DD");

        oTable.fnFilter();
    })

    $("#filter-day").on("click", function(){
        opt.start = moment().format("YYYY-MM-DD");
        opt.end = moment().format("YYYY-MM-DD");
        oTable.fnFilter();
    })

    $("#filter-week").on("click", function(){
        opt.start = moment().subtract(1, 'week').format("YYYY-MM-DD");
        opt.end = moment().format("YYYY-MM-DD");
        oTable.fnFilter();
    })

    $("#filter-month").on("click", function(){
        opt.start = moment().subtract(1, 'month').format("YYYY-MM-DD");        
        opt.end = moment().format("YYYY-MM-DD");        
        oTable.fnFilter();
    })


    $("#start").datepicker().on("changeDate", function(e){
        opt.start = moment(e.date);
        oTable.fnFilter();
    });
    $("#end").datepicker().on("changeDate", function(e){
        opt.end = moment(e.date);
        oTable.fnFilter();
    });


});