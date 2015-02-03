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
    opt.order = [[ 4, "desc" ]]
    opt.columnDefs = [            
    {
        "targets": [ 3 ],
        "visible": false
    }            
    ];
    opt.language = {"sProcessing":     "Procesando...", "sLengthMenu":     "Mostrar _MENU_ registros", "sZeroRecords":    "No se encontraron resultados", "sEmptyTable":     "Ningún dato disponible en esta tabla", "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros", "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros", "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)", "sInfoPostFix":    "", "sSearch":         "Buscar: ", "sUrl":            "", "sInfoThousands":  ",", "sLoadingRecords": "Cargando...", "oPaginate": {"sFirst":    "Primero", "sLast":     "Último", "sNext":     "Siguiente", "sPrevious": "Anterior"}, "oAria": {"sSortAscending":  ": Activar para ordenar la columna de manera ascendente", "sSortDescending": ": Activar para ordenar la columna de manera descendente"} };

    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {            
            var letra = opt.word;
            var page = $('#filter-page').val();

            if ((letra == data[0][0] || letra == '' ) && page == data[3]){
                return true;
            }
            return false;
        }
        );

    $.fn.dataTable.ext.afnFiltering.push(
        function( oSettings, aData, iDataIndex ) {
            var start = moment(opt.start);
            var end = moment(opt.end);
            var current = moment(aData[4]);

            if(moment(opt.start).isValid()){
                $("#start").datepicker('update', new Date(opt.start));
            }

            if(moment(opt.end).isValid()){
                $("#end").datepicker('update', new Date(opt.end));
            }

            if (start <= current && end >= current){
                return true;
            }
            return false;
        }
        );
    /* Declaration */
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
        opt.start = moment().startOf('week').format("YYYY-MM-DD");
        //opt.start = moment().subtract(1, 'week').format("YYYY-MM-DD");
        opt.end = moment().format("YYYY-MM-DD");
        oTable.fnFilter();
    })

    $("#filter-month").on("click", function(){
        opt.start = moment().startOf('month').format("YYYY-MM-DD");
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

    /* init */
    opt.start = moment().format("YYYY-MM-DD");
    opt.end = moment().format("YYYY-MM-DD");
    oTable.fnFilter( $('#filter-page').val() );

    /* change color */

    $(".filter-word").on("click", function(){
        $.each($(".filter-word.btn-success"), function(index, val) {
            $(this).removeClass('btn-success');
            $(this).addClass('btn-info');
        });

        if($(this).hasClass('btn-info')){
            $(this).removeClass('btn-info');
            $(this).addClass('btn-success');
        }
    })


    $(".filter-range").on("click", function(){
        $.each($(".filter-range.btn-success"), function(index, val) {
            $(this).removeClass('btn-success');
            $(this).addClass('btn-info');
        });

        if($(this).hasClass('btn-info')){
            $(this).removeClass('btn-info');
            $(this).addClass('btn-success');
        }
    })

    /* EDIT PROSPECTS */
    /* ********************************************* */
    var row;
    $(document).on("click", ".edit-prospect", function(){
        var id = $(this).data('id');
        row = $(this);
        $.post('/api/prospect/'+id, function(data, textStatus, xhr) {
            $("#name").val(data.name);
            $("#phone").val(data.phone);
            $("#email").val(data.email);
            $("#id").val(data.id);

            $("#modal-prospect").modal('show');
        },"json");
    })

    $(document).on("click", "#save", function(){
        var data = {};
        data.name = $("#name").val();
        data.phone = $("#phone").val();
        data.email = $("#email").val();

        console.log(row);


        
        $.post('/api/prospect/'+$("#id").val()+'/edit', data, function(data, textStatus, xhr) {
            var p
            var tr = row.closest('tr');
            tr.children().eq(0).text(data.name);
            tr.children().eq(1).text(data.email);
            tr.children().eq(2).text(data.phone);
            


            if(!data.error){
                jSuccess(
                    "<i class='fa fa-check-square-o' style='padding-right:6px'></i>" + data.message, {
                        HorizontalPosition: 'right',
                        VerticalPosition: 'bottom',
                        ShowOverlay: $(this).data("overlay") ? $(this).data("overlay") : false,
                        TimeShown: $(this).data("timeshown") ? $(this).data("timeshown") : 1500,
                        OpacityOverlay: $(this).data("opacity") ? $(this).data("opacity") : 0.5,
                        MinWidth: $(this).data("min-width") ? $(this).data("min-width") : 250
                    });
            } else {
                jError(
                    "<i class='fa fa-frown-o' style='padding-right:6px'></i>" + data.message, {
                        HorizontalPosition: 'right',
                        VerticalPosition: 'bottom',
                        ShowOverlay: $(this).data("overlay") ? $(this).data("overlay") : false,
                        TimeShown: $(this).data("timeshown") ? $(this).data("timeshown") : 1500,
                        OpacityOverlay: $(this).data("opacity") ? $(this).data("opacity") : 0.5,
                        MinWidth: $(this).data("min-width") ? $(this).data("min-width") : 250
                    });
            }
        },"json");
    });


$(document).on("click", ".delete-prospect", function(){
    var id = $(this).data('id');
    if(confirm("Desea eliminar este prospecto?\nNo se puede revertir el proceso.")){
        row = $(this);

        $.post('/api/prospect/'+id+'/delete', function(data, textStatus, xhr) {     


            if(!data.error){
                row.closest('tr').remove();
                jSuccess(
                    "<i class='fa fa-check-square-o' style='padding-right:6px'></i>" + data.message, {
                        HorizontalPosition: 'right',
                        VerticalPosition: 'bottom',
                        ShowOverlay: $(this).data("overlay") ? $(this).data("overlay") : false,
                        TimeShown: $(this).data("timeshown") ? $(this).data("timeshown") : 1500,
                        OpacityOverlay: $(this).data("opacity") ? $(this).data("opacity") : 0.5,
                        MinWidth: $(this).data("min-width") ? $(this).data("min-width") : 250
                    });
            } else {
                jError(
                    "<i class='fa fa-frown-o' style='padding-right:6px'></i>" + data.message, {
                        HorizontalPosition: 'right',
                        VerticalPosition: 'bottom',
                        ShowOverlay: $(this).data("overlay") ? $(this).data("overlay") : false,
                        TimeShown: $(this).data("timeshown") ? $(this).data("timeshown") : 1500,
                        OpacityOverlay: $(this).data("opacity") ? $(this).data("opacity") : 0.5,
                        MinWidth: $(this).data("min-width") ? $(this).data("min-width") : 250
                    });
            }

        },"json");

    }
})

});