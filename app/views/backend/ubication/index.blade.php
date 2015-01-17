@extends('backend.layouts.master')

@section('css')  
<style>
    .country, .estate{
        cursor: pointer;
    }

    .sel {
        background-color: #EF4836 !important
    }

</style> 
@stop

@section('content')

<div id="main-content" class="page-notes" ng-app="ubicationApp">
            <div class="row" data-equal-height="true">
                <div class="col-lg-4 col-md-4 list-notes" id="countries" ng-controller="CountryListCtrl">
                    <div class="panel panel-default">
                        <div class="panel-body notes">
                            
                            <div class="row">
                                <div class="col-md-12">
                                    <div data-rel="tooltip" data-placement="left" data-original-title="Add a note" id="add-note" ng-click="createCountry()">
                                        <i class="fa fa-plus"></i>Agregar Pais
                                    </div>
                                </div>
                            </div>
                            <div id="notes-list" class="panel panel-default withScroll" data-height="window" data-padding="129" >

                                <div class="note-item media current fade in" ng-repeat="country in countries" ng-class="{sel: country.id == selected}">
                                    <button class="close" data-dismiss="alert" data-rel="tooltip" data-placement="left" data-original-title="Borrar" ng-click="deleteCountry(country.id)">×</button>
                                    <div>
                                        <div>
                                            <h4 class="note-name country" data-id="@{{country.id}}" ng-click="showEstates(country.id)">@{{country.name}}</h4>
                                        </div>                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                


                <div class="col-lg-4 col-md-4 list-notes hide" id="estates" ng-controller="EstateListCtrl">
                    <div class="panel panel-default">
                        <div class="panel-body notes">
                            
                            <div class="row">
                                <div class="col-md-12">
                                    <div data-rel="tooltip" data-placement="left" data-original-title="Add a note" id="add-note" ng-click="createEstate()">
                                        <i class="fa fa-plus"></i>Agregar Provincia
                                    </div>
                                </div>
                            </div>
                            <div id="notes-list" class="panel panel-default withScroll" data-height="window" data-padding="129" >

                                <div class="note-item media current fade in" ng-repeat="estate in estates" ng-class="{sel: estate.id== selected}">
                                    <button class="close" data-dismiss="alert" data-rel="tooltip" data-placement="left" data-original-title="Borrar" ng-click="deleteEstate(estate.id)">×</button>
                                    <div>
                                        <div>
                                            <h4 class="note-name estate" data-id="@{{estate.id}}" ng-click="showCities(estate.id)">@{{estate.name}}</h4>
                                        </div>                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>



                <div class="col-lg-4 col-md-4 list-notes hide" id="cities" ng-controller="CityListCtrl">
                    <div class="panel panel-default">
                        <div class="panel-body notes">
                            
                            <div class="row">
                                <div class="col-md-12">
                                    <div data-rel="tooltip" data-placement="left" data-original-title="Add a note" id="add-note" ng-click="createCity()">
                                        <i class="fa fa-plus"></i>Agregar Ciudad
                                    </div>
                                </div>
                            </div>
                            <div id="notes-list" class="panel panel-default withScroll" data-height="window" data-padding="129" >

                                <div class="note-item media current fade in" ng-repeat="city in cities">
                                    <button class="close" data-dismiss="alert" data-rel="tooltip" data-placement="left" data-original-title="Borrar" ng-click="deleteCity(city.id)">×</button>
                                    <div>
                                        <div>
                                            <h4 class="note-name city" data-id="@{{city.id}}">@{{city.name}}</h4>
                                        </div>                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

@stop

@section('javascript')
    <script src="{{ asset('/assets/plugins/quicksearch/jquery.quicksearch.js') }}"></script>
    <script src="{{ asset('/assets/js/notes.js') }}"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.5/angular.min.js"></script>
    <script src="{{ asset('/assets/js/ubication.angular.js')}}"></script>   
@stop