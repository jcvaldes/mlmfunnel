@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/magnific/magnific-popup.css') }}">
@stop

@section('content')

<div id="main-content">
    <div class="page-title"> <i class="icon-custom-left"></i>
        <h3><strong>Tutoriales </strong></h3>
    </div>
    <div class="m-b-30"></div>
    <div class="row">
        <div class="col-md-12">
            <!-- BEGIN GALLERY -->
            <div class="gallery">
                <div class="row">

                    @foreach ($videos as $key => $video)
                        <div class="mix category-2 col-lg-6 col-md-6 col-sm-6 col-xs-12" data-value="2">
                            <div class="thumbnail-meta text-center" style="color:black">
                                <h4>{{ $video['title'] }}</h4>
                            </div>
                            <div class="thumbnail">
                                <div class="overlay">
                                    <div class="thumbnail-actions">
                                        <a href="http://www.youtube.com/watch?v={{ $video['id'] }}" class="btn btn-default btn-icon btn-rounded popup-youtube" title="{{ $video['title'] }}"><i class="fa fa-video-camera"></i></a>
                                    </div>
                                </div>
                                <img src="http://img.youtube.com/vi/{{ $video['id'] }}/hqdefault.jpg" class="img-responsive" alt="{{ $video['title'] }}" />

                            </div>
                        </div>
                    @endforeach

                </div>
            </div>
            <!-- END GALLERY -->
        </div>
    </div>
</div>

@stop

@section('javascript')
<script src="{{ asset('/assets/plugins/magnific/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ asset('/assets/plugins/gallery-mixitup/jquery.mixitup.js') }}"></script>
<script src="{{ asset('/assets/js/gallery.js') }}"></script>
@stop