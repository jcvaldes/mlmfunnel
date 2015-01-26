$(function () {

    var opt = {
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

    opt.language = {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar: ",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
    };


    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {    

            var letra = $('#filter-word').val();
            var page = $('#filter-page').val();

            if ((letra == data[0] || letra == 'false' ) && page == data[4])
            {
                return true;
            }
            return false;
        }
    );



    var oTable = $("#datatable").dataTable(opt);
    oTable.fnDraw();

    $('.filter').change( function() { 
        if($(this).val() == 'false'){
            oTable.fnFilter( $('#filter-page').val() );
        }else{
            oTable.fnFilter( $(this).val() );
        }        
    });

    oTable.fnFilter( $('#filter-page').val() );

});