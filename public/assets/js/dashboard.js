$(function () {

    /* Display message header */
    setTimeout(function () {
        $('#chat-notification').removeClass('hide').addClass('animated bounceIn');
        $('#chat-popup').removeClass('hide').addClass('animated fadeIn');
    }, 5000);

    /* Hide message header */
    setTimeout(function () {
        $('#chat-popup').removeClass('animated fadeIn').addClass('animated fadeOut').delay(800).hide(0);
    }, 8000);

    


    /* ******************* DONUT CHART 
    new Morris.Donut({
        element: 'donut-chart1',
        data: [{
            label: "Chrome",
            value: 34
        }, {
            label: "Firefox",
            value: 24
        }, {
            label: "Opera",
            value: 12
        }, {
            label: "Safari",
            value: 25
        }, {
            label: "Internet Explorer",
            value: 5
        }],
        colors: ['#C75757', '#18A689', '#0090D9', '#2B2E33', '#0090D9'],
        formatter: function (x) {
            return x + "%"
        }
    });
    ******************* */


    //************** SPARKLINE SMALL CHART *****************//
    $(function () {
        /* Sparklines can also take their values from the first argument passed to the sparkline() function */
        var myvalues1 = [13, 14, 16, 15, 11, 14, 20, 14, 12, 16, 11, 17];
        var myvalues2 = [14, 17, 16, 12, 18, 16, 22, 15, 14, 17, 11, 18];
        $('.spark-chart-1').sparkline(myvalues1, {
            type: 'line',
            lineColor: '#18A689',
            fillColor: '#18A689',
            spotColor: '#18A689',
            height: '32px',
            width: '100%'
        });
        $('.spark-chart-2').sparkline(myvalues2, {
            type: 'line',
            lineColor: '#6B787F',
            fillColor: '#0090D9',
            spotColor: '#6B787F',
            height: '32px',
            width: '100%'
        });
    });

    /* We have to recreate charts on resize to make them responsive */
    $(window).resize(function () {
        var myvalues1 = [13, 14, 16, 15, 11, 14, 20, 14, 12, 16, 11, 17];
        var myvalues2 = [14, 17, 16, 12, 18, 16, 22, 15, 14, 17, 11, 18];
        $('.spark-chart-1').sparkline(myvalues1, {
            type: 'line',
            lineColor: '#18A689',
            fillColor: '#18A689',
            spotColor: '#18A689',
            height: '32px',
            width: '100%'
        });
        $('.spark-chart-2').sparkline(myvalues2, {
            type: 'line',
            lineColor: '#6B787F',
            fillColor: '#0090D9',
            spotColor: '#6B787F',
            height: '32px',
            width: '100%'
        });
        new Morris.Donut({
            element: 'donut-chart1',
            data: [{
                label: "Chrome",
                value: 30
            }, {
                label: "Firefox",
                value: 20
            }, {
                label: "Opera",
                value: 20
            }, {
                label: "Safari",
                value: 20
            }, {
                label: "Internet Explorer",
                value: 10
            }],
            colors: ['#C75757', '#18A689', '#0090D9', '#2B2E33', '#0090D9']
        });
    });


    //******************** TO DO LIST ********************//
    $("#sortable-todo").sortable();

    $('.my_checkbox_all').on('click', function (event) {
        if ($(this).prop('checked') ==  true){
            $(this).closest('#task-manager').find('input:checkbox').prop('checked', true);
        } else {
            $(this).closest('#task-manager').find('input:checkbox').prop('checked', false);
        }
    });


    //******************** REVENUE CHART ********************//
    function randomValue() {
        return (Math.floor(Math.random() * (1 + 24))) + 8;
    }

    var data1 = [
        [1, 5 + randomValue()], [2, 10 + randomValue()], [3, 10 + randomValue()], [4, 15 + randomValue()], [5, 20 + randomValue()], [6, 25 + randomValue()], [7, 30 + randomValue()], [8, 35 + randomValue()], [9, 40 + randomValue()], [10, 45 + randomValue()], [11, 50 + randomValue()], [12, 55 + randomValue()], [13, 60 + randomValue()], [14, 70 + randomValue()], [15, 75 + randomValue()], [16, 80 + randomValue()], [17, 85 + randomValue()], [18, 90 + randomValue()], [19, 95 + randomValue()], [20, 100 + randomValue()]
    ];
    var data2 = [
        [6, 1425], [7, 1754], [8, 1964], [9, 2145], [10, 2550], [11, 2210], [12, 1760], [13, 1820], [14, 1880], [15, 1985],  [16, 2240]
    ];

    var plot = $.plot(
        $('#chart_revenue'), [{
            label: "Revenue",
            data: data1,
            color: '#fff',
            points: {
                fillColor: "#9182d4"
            }
        }], {
            grid: {
                color: '#fff',
                borderColor: "transparent",
                clickable: true,
                hoverable: true
            },
            series: {
                lines: {
                    show: true,
                    fill: false,
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                show: false
            },
            yaxis: {
                tickColor: '#B992DB'
            },
            legend: {
                show: false
            },
            tooltip: true
        });

    var previousPoint = null;
    $("#chart_revenue").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;
                $("#flot-tooltip").remove();
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                showTooltip(item.pageX, item.pageY, y + "0 $");
            }
        } else {
            $("#flot-tooltip").remove();
            previousPoint = null;
        }
    });


    //**************** GOOGLE MAP WIDGET WITH FINDER ****************//
    if ($('#geocoding-map').length) {
        var geocoding_map;
        geocoding_map = new GMaps({
            el: '#geocoding-map',
            lat: 25.771912,
            lng: -80.186868,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            zoom: 11,
            styles: [{
                "featureType": "water",
                "stylers": [{
                    "color": "#0090d9"
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "landscape",
                "stylers": [{
                    "color": "#ccdae5"
                }]
            }, {
                "featureType": "road",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 45
                }]
            }, {
                "featureType": "road.highway",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            }, {
                "featureType": "transit",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            }]
        });
        $('#geocoding_form').submit(function (e) {
            e.preventDefault();
            GMaps.geocode({
                address: $('#address').val().trim(),
                callback: function (results, status) {
                    if (status == 'OK') {
                        var latlng = results[0].geometry.location;
                        geocoding_map.setCenter(latlng.lat(), latlng.lng());
                        geocoding_map.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng()
                        });
                    }
                }
            });
        });
    }

    //******************** WEATHER WIDGET ********************//

    /* We initiate widget with a city (can be changed) */
    var city = 'Miami';
    $.simpleWeather({
        location: city,
        woeid: '',
        unit: 'f',
        success: function (weather) {
            city = weather.city;
            region = weather.country;
            tomorrow_date = weather.tomorrow.date;
            weather_icon = '<i class="icon-' + weather.code + '"></i>';
            $(".weather-city").html(city);
            $(".weather-currently").html(weather.currently);
            $(".today-img").html('<i class="big-img-weather icon-' + weather.code + '"></i>');
            $(".today-temp").html(weather.low + 'Â° / ' + weather.high + 'Â°');
            $(".weather-region").html(region);
            $(".weather-day").html(tomorrow_date);
            $(".weather-icon").html(weather_icon);
            $(".1-days-day").html(weather.forecasts.one.day);
            $(".1-days-image").html('<i class="icon-' + weather.forecasts.one.code + '"></i>');
            $(".1-days-temp").html(weather.forecasts.one.low + 'Â° / ' + weather.forecasts.one.high + 'Â°');
            $(".2-days-day").html(weather.forecasts.two.day);
            $(".2-days-image").html('<i class="icon-' + weather.forecasts.two.code + '"></i>');
            $(".2-days-temp").html(weather.forecasts.two.low + 'Â° / ' + weather.forecasts.two.high + 'Â°');
            $(".3-days-day").html(weather.forecasts.three.day);
            $(".3-days-image").html('<i class="icon-' + weather.forecasts.three.code + '"></i>');
            $(".3-days-temp").html(weather.forecasts.three.low + 'Â° / ' + weather.forecasts.three.high + 'Â°');
            $(".4-days-day").html(weather.forecasts.four.day);
            $(".4-days-image").html('<i class="icon-' + weather.forecasts.four.code + '"></i>');
            $(".4-days-temp").html(weather.forecasts.four.low + 'Â° / ' + weather.forecasts.four.high + 'Â°');
        }
    });

    /* We get city from input on change */
    $("#city-form").change(function () {
        city = document.getElementById("city-form").value;
        $.simpleWeather({
            location: city,
            woeid: '',
            unit: 'f',
            success: function (weather) {
                city = weather.city;
                region = weather.country;
                tomorrow_date = weather.tomorrow.date;
                weather_icon = '<i class="icon-' + weather.code + '"></i>';
                $(".weather-city").html(city);
                $(".weather-currently").html(weather.currently);
                $(".today-img").html('<i class="big-img-weather icon-' + weather.code + '"></i>');
                $(".today-temp").html(weather.low + 'Â° / ' + weather.high + 'Â°');
                $(".weather-region").html(region);
                $(".weather-day").html(tomorrow_date);
                $(".weather-icon").html(weather_icon);
                $(".1-days-day").html(weather.forecasts.one.day);
                $(".1-days-image").html('<i class="icon-' + weather.forecasts.one.code + '"></i>');
                $(".1-days-temp").html(weather.forecasts.one.low + 'Â° / ' + weather.forecasts.one.high + 'Â°');
                $(".2-days-day").html(weather.forecasts.two.day);
                $(".2-days-image").html('<i class="icon-' + weather.forecasts.two.code + '"></i>');
                $(".2-days-temp").html(weather.forecasts.two.low + 'Â° / ' + weather.forecasts.two.high + 'Â°');
                $(".3-days-day").html(weather.forecasts.three.day);
                $(".3-days-image").html('<i class="icon-' + weather.forecasts.three.code + '"></i>');
                $(".3-days-temp").html(weather.forecasts.three.low + 'Â° / ' + weather.forecasts.three.high + 'Â°');
                $(".4-days-day").html(weather.forecasts.four.day);
                $(".4-days-image").html('<i class="icon-' + weather.forecasts.four.code + '"></i>');
                $(".4-days-temp").html(weather.forecasts.four.low + 'Â° / ' + weather.forecasts.four.high + 'Â°');
            }
        });
    });

});