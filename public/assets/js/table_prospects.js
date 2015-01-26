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
            console.log(settings);
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
        var iFini = opt.start;
        var iFfin = opt.end;
        var iStartDateCol = 5;
        var iEndDateCol = 5;
 
        iFini=iFini.substring(6,10) + iFini.substring(3,5)+ iFini.substring(0,2);
        iFfin=iFfin.substring(6,10) + iFfin.substring(3,5)+ iFfin.substring(0,2);
 
        var datofini=aData[iStartDateCol].substring(6,10) + aData[iStartDateCol].substring(3,5)+ aData[iStartDateCol].substring(0,2);
        var datoffin=aData[iEndDateCol].substring(6,10) + aData[iEndDateCol].substring(3,5)+ aData[iEndDateCol].substring(0,2);
 
        if ( iFini === "" && iFfin === "" )
        {
            return true;
        }
        else if ( iFini <= datofini && iFfin === "")
        {
            return true;
        }
        else if ( iFfin >= datoffin && iFini === "")
        {
            return true;
        }
        else if (iFini <= datofini && iFfin >= datoffin)
        {
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
        opt.start = $('#start').data('date') || '';
        opt.end = $('#end').data('date') || '';
        oTable.fnFilter();
    })
});