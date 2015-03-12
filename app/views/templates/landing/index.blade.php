<!DOCTYPE html>
<html lang="en" class="bgCover wf-proximanova-i4-active wf-proximanova-i7-active wf-proximanova-n4-active wf-proximanova-n7-active wf-active wf-proximanova-i3-active wf-proximanova-n3-active" style='background-color: rgb(41, 41, 41); background-image: url("/templates/landing/images/amanecer.jpg");'>

<head data-next-url="#" data-this-url="#">
    <meta charset="UTF-8">
    <title>{{ $user->full_name }} || {{ Setting::key('app_name')->first()->value }}</title>
    <meta class="metaTagTop" name="description" content="">
    <meta class="metaTagTop" name="keywords" content="mlmfunnel, landing page, web site">
    <meta class="metaTagTop" name="author" content="MLMfunnel">
    <meta class="metaTagTop" property="og:image" content="" id="social-image">
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    <meta property="og:url" content="{{ URL::current() }}">
    <meta property="og:type" content="website">
    <meta name="viewport" content="initial-scale=1">
    <link href="/templates/landing/css/lander.css" media="screen" rel="stylesheet">
    <!-- css -->
    <!-- CDN stuff -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700%7COswald:400,700%7CDroid+Sans:400,700%7CRoboto:400,700%7CLato:400,700%7CPT+Sans:400,700%7CSource+Sans+Pro:400,700%7CNoto+Sans:400,700%7CPT+Sans:400,700%7CUbuntu:400,700%7CBitter:400,700%7CPT+Serif:400,700%7CRokkitt:400,700%7CDroid+Serif:400,700%7CRaleway:400,700%7CInconsolata:400,700" rel="stylesheet" type="text/css">
    <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link href="https://vjs.zencdn.net/4.11/video-js.css" rel="stylesheet">
    <style>
        #IntercomDefaultWidget {
            display: none;
        }
        .selectAW-date-demo,
        .elTicketAddToCalendar {
            display: none;
        }
        .video-js {
            padding-top: 56.25%
        }
        .vjs-fullscreen {
            padding-top: 0px
        }
    </style>
    
    <script>
        var jQueryScriptOutputted = false;

        function initJQuery() {
            if (typeof(jQuery) == 'undefined') {
                if (!jQueryScriptOutputted) {
                    jQueryScriptOutputted = true;
                    document.write('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"/>');
                }
                setTimeout("initJQuery()", 50);
            } else {
                $(function() {
                    // do anything that needs to be done on document.ready
                    // don't really need this dom ready thing if used in footer
                });
            }
        }
        initJQuery();
    </script>
    <script>
        $(function() {});
    </script>
    <meta name='description' content=''>
    <meta name='keywords' content=''>
</head>
<!-- custom 3rd party tracking => moved to noko -->

<body>
    <section id="custom-tracking-head" class="hide"></section>
    <!-- page container -->
    <div class="containerWrapper">

        <input id="submit-form-action" value="redirect-url" data-url="#" data-ar-service="" data-ar-list="" data-webhook="" type="hidden">
        <div class="nodoHiddenFormFields hide">
            <input id="elHidden1" class="elInputHidden elInput" name="ad" type="hidden">
            <input id="elHidden2" class="elInputHidden elInput" name="tag" type="hidden">
            <input id="elHidden3" class="elInputHidden elInput" name="" type="hidden">
            <input id="elHidden4" class="elInputHidden elInput" name="" type="hidden">
            <input id="elHidden5" class="elInputHidden elInput" name="" type="hidden">
        </div>

        <div class="nodoCustomHTML hide"></div>

        <div class="modalBackdropWrapper" style="display: none; background-color: rgba(0, 0, 0, 0.4);"></div>
        <div class="container containerModal midContainer noTopMargin padding40-top padding40-bottom padding40H  noBorder borderSolid border3px cornersAll radius10 shadow0 bgNoRepeat emptySection" id="modalPopup" data-title="Modal" data-block-color="0074C7" style="display: none; margin-top: 100px; padding-top: 40px; padding-bottom: 40px; outline: none; background-color: rgb(255, 255, 255);" data-trigger="none" data-animate="top" data-delay="0">
            <div class="containerInner ui-sortable"></div>
            <div class="closeLPModal"><img src="/templates/landing/images/closemodal.png" alt="">
            </div>

        </div>
        <div class="container noTopMargin padding40-top padding40-bottom padding40H  noBorder borderSolid border3px cornersAll radius0 bgNoRepeat activeSection_topBorder activeSection_bottomBorder emptySection activeSection_topBorder0 activeSection_bottomBorder0 shadow30 fullContainer" id="section-6005410000" data-title="Section" data-block-color="0074C7" style="padding-top: 20px; padding-bottom: 20px; outline: medium none; background-color: rgb(20, 19, 17);" data-trigger="none" data-animate="fade" data-delay="500">
            <div class="containerInner ui-sortable">
                <div class="row bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin innerToolsTop" id="row-2329610000" data-trigger="none" data-animate="fade" data-delay="500" data-title="2 column row" style="outline: none;">
                    <div id="col-left-871" class="col-md-6 innerContent col_left" data-col="left" data-trigger="none" data-animate="fade" data-delay="500" data-title="Left column" style="outline: none;">
                        <div class="col-inner bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin">
                            <div class="de elHeadlineWrapper de-editable" id="tmp_headline1-43924" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500" style="display: block; outline: medium none; cursor: pointer;">
                                <div class="ne elHeadline lh3 elMargin0 elBGStyle0 hsTextShadow0 hsSize2" style="color: rgb(203, 212, 27); text-align: left;" data-bold="inherit" contenteditable="false"><b>¡ATENCIÓN! Oportunidad De Negocio</b>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="col-right-532" class="col-md-6 innerContent col_right" data-col="right" data-trigger="none" data-animate="fade" data-delay="500" data-title="Right column" style="outline: none;">
                        <div class="col-inner bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin">
                            <div class="de elHeadlineWrapper de-editable" id="tmp_headline1-53255" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500" style="margin-top: 0px; outline: medium none; cursor: pointer;">
                                <div class="ne elHeadline lh3 elMargin0 elBGStyle0 hsTextShadow0 hsSize2" style="text-align: right; color: rgba(255, 255, 255, 0.760784);" data-bold="inherit" contenteditable="false">
                                    <b>Contáctame al:</b> {{ $user->phone }}</div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="container noTopMargin padding40-top padding40-bottom padding40H  borderSolid border3px cornersAll activeSection_topBorder activeSection_bottomBorder emptySection wideContainer bgCover activeSection_topBorder0 activeSection_bottomBorder0 shadow30 radius10 borderLightBottom" id="section-7818510000" data-title="Section" data-block-color="0074C7" style="padding-top: 40px; padding-bottom: 40px; border-color: rgba(0, 0, 0, 0.45); margin-top: 40px; outline: medium none; background-color: rgba(0, 0, 0, 0.498);" data-trigger="none" data-animate="fade" data-delay="500">
            <div class="containerInner ui-sortable">
                <div style="outline: none;" class="row bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin" id="row-950710000" data-trigger="none" data-animate="fade" data-delay="500" data-title="2 column row">
                    <div style="outline: none;" id="col-left-994" class="col-md-6 innerContent col_left" data-col="left" data-trigger="none" data-animate="fade" data-delay="500" data-title="Left column">
                        <div class="col-inner bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin">
                            <div data-youtube-controls="no" data-youtube-autoplay="yes" data-youtube-url="https://www.youtube.com/watch?v=JjBF1Faj-H4" data-video-type="youtube" class="de elVideoWrapper de-video-block elVideoWidth100 elMargin0 elVideoSkin1 de-editable" id="tmp_video-25090" data-de-type="video" data-de-editing="false" data-title="video" data-ce="false" data-trigger="none" data-animate="fade" data-delay="500" style="outline: medium none; cursor: pointer;">
                                <div class="elVideoplaceholder">
                                    <div class="elVideoplaceholder_inner">
                                    </div>
                                </div>
                                <div class="elVideo" style="display: none;">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JjBF1Faj-H4?autoplay=1&amp;modestbranding=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;hd=1" frameborder="0" allowfullscreen></iframe>
                                </div>

                            </div>
                            <div class="de elSeperator elMargin0 de-editable" id="tmp_divider-82505" data-de-type="divider" data-de-editing="false" data-title="Divider" data-ce="false" data-trigger="none" data-animate="fade" data-delay="500" style="margin-top: 20px; outline: medium none; cursor: pointer;">
                                <div class="elDivider elDividerStyle2 elDividerColor6">
                                    <div class="elDividerInner"></div>
                                </div>

                            </div>
                            <div class="de elMargin0 clearfix elScreenshot_right elFeatureImage_80_20 de-editable" id="tmp_featureimage-32960" data-de-type="featureimage" data-de-editing="false" data-title="Image Feature" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500" style="margin-top: 20px; outline: medium none; cursor: pointer;">
                                <div class="elScreenshot_text">
                                    <div class="elScreenshot_text_padding">
                                        <h3 class="ne elScreenshot_text_headline ssHeadlineSize2" style="color: rgb(255, 255, 255);" contenteditable="false"><b><u>Te invitó:</u> {{ $user->full_name }}</b></h3>
                                        <div class="ne elScreenshot_text_body ssBodySize1" style="color: rgba(255, 255, 255, 0.772549);" contenteditable="false">{{ $user->description }}
                                            <br>
                                        </div>
                                    </div>
                                </div>
                                <div class="elScreenshot_image elAlign_center">
                                    <img src="{{ $user->getProfilePicture() }}" class="elScreenshot_image_src1 ximg img-circle thumbnailImage shadow20" height="100" width="100">
                                </div>

                            </div>
                            <div class="de elSharing elAlign_center elMargin0 de-editable" id="tmp_social-81812" data-de-type="social" data-de-editing="false" data-title="Social Shares" data-ce="false" data-trigger="none" data-animate="fade" data-delay="500" style="margin-top: 20px; outline: medium none; cursor: pointer;">
                                <div data-url="{{ URL::current() }}" class="social-likes socialLikesPreview social-likes_visible social-likes_ready social-white" data-title="{{ URL::current() }}">
                                    <div class="social-likes__widget social-likes__widget_facebook" title="Share link on Facebook">
                                        <span class="social-likes__button social-likes__button_facebook"><span class="social-likes__icon social-likes__icon_facebook"></span>Facebook</span><span class="social-likes__counter social-likes__counter_facebook social-likes__counter_empty"></span>
                                    </div>
                                    <div class="social-likes__widget social-likes__widget_twitter" data-via="twitter-user" title="Share link on Twitter">
                                        <span class="social-likes__button social-likes__button_twitter"><span class="social-likes__icon social-likes__icon_twitter"></span>Twitter</span><span class="social-likes__counter social-likes__counter_twitter social-likes__counter_empty"></span>
                                    </div>
                                    <div class="social-likes__widget social-likes__widget_plusone" title="Share link on Google+">
                                        <span class="social-likes__button social-likes__button_plusone"><span class="social-likes__icon social-likes__icon_plusone"></span>Google+</span><span class="social-likes__counter social-likes__counter_plusone social-likes__counter_empty"></span>
                                    </div>
                                </div>
                                <div class="social-likes socialLikesLive social-white" data-url="{{ URL::current() }}" data-title="{{ $user->full_name }}" style="display: none;">
                                    <div class="facebook" title="Share link on Facebook">Facebook</div>
                                    <div class="twitter" data-via="mlmfunnel" title="Share link on Twitter">Twitter</div>
                                    <div class="plusone" title="Share link on Google+">Google+</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <?php $list = AweberList::user($user->id)->page('landing')->first(); ?>
                    
                    @if(count($list)>0)
                        <form method="post" class="af-form-wrapper" accept-charset="iso-8859-1" action="https://www.aweber.com/scripts/addlead.pl" id="suscribe-form" >
                        
                    @else
                        {{ Form::open(['route' => 'suscribe', 'method' => 'POST', 'id' => 'suscribe-form']) }}
                    @endif

                    
                    <div style="outline: none;" id="col-right-474" class="col-md-6 innerContent col_right" data-col="right" data-trigger="none" data-animate="fade" data-delay="500" data-title="Right column">
                        <div style="background-color: rgba(0, 0, 0, 0.64); padding: 40px;" class="col-inner bgCover  noBorder borderSolid border3px cornersAll P0-top P0-bottom P0H noTopMargin radius10 shadow40">
                            <div style="outline: medium none; cursor: pointer;" class="de elHeadlineWrapper de-editable" id="tmp_headline1-86070" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500">
                                <div class="ne elHeadline hsSize3 elMargin0 elBGStyle0 lh4 hsTextShadow2" style="color: rgb(255, 255, 255); text-align: center;" data-bold="inherit" contenteditable="false"><b>¡Suscríbete Gratis y Descubre Esta Gran Oportunidad!<br></b>
                                </div>

                            </div>
                            <div style="margin-top: 10px; outline: medium none; cursor: pointer;" class="de elHeadlineWrapper de-editable" id="headline-76279" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500">
                                <div class="ne elHeadline elMargin0 elBGStyle0 lh4 hsTextShadow2 hsSize21" style="color: rgba(233, 201, 55, 0.89); text-align: center;" data-bold="inherit" contenteditable="false"><b>Estás a punto de descubrir un sistema que te permitirá generar ingresos residuales con tan sólo "Cambiar de tienda"<br></b>
                                </div>

                            </div>
                            <div style="margin-top: 15px; outline: medium none; cursor: pointer;" class="de elInputWrapper de-input-block elAlign_center elMargin0 de-editable" id="tmp_input-61506" data-de-type="input" data-de-editing="false" data-title="Name Input" data-ce="false" data-trigger="none" data-animate="fade" data-delay="500">
                                <input placeholder="Ingresa Tu Nombre..." name="name" class="elInput elInput100 elAlign_left elInputBR5 elInputIRight required0 elInputIName elInputIColor elInputStyle2 elInputBG2 elInputMid" data-type="extra" type="text">
                            </div>
                            <div style="margin-top: 15px; outline: medium none; cursor: pointer; display: block;" class="de elInputWrapper de-input-block elAlign_center elMargin0 de-editable" id="input-11821" data-de-type="input" data-de-editing="false" data-title="Email Input" data-ce="false" data-trigger="none" data-animate="fade" data-delay="500">
                                <input placeholder="Ingresa Tu Email Principal..." name="email" class="elInput elInput100 elAlign_left elInputBR5 elInputIRight required0 elInputIColor elInputIEmail elInputBG2 elInputStyle2 elInputMid" data-type="extra" type="text">
                            </div>
                            <div style="margin-top: 15px; outline: medium none; cursor: pointer;" class="de elInputWrapper de-input-block elAlign_center elMargin0 de-editable" id="input-57742" data-de-type="input" data-de-editing="false" data-title="Phone Input" data-ce="false" data-trigger="none" data-animate="fade" data-delay="500">
                                <input placeholder="Ingresa Tu Número Telefónico..." name="phone" class="elInput elInput100 elAlign_left elInputBR5 elInputIRight required0 elInputIColor elInputIPhone elInputMid elInputStyle2 elInputBG2" data-type="extra" type="text">
                            </div>

                            <div style="margin-top: 15px; outline: medium none; cursor: pointer;" class="de elBTN elAlign_center elMargin0 de-editable" id="tmp_button-93582" data-de-type="button" data-de-editing="false" data-title="button" data-ce="false" data-trigger="none" data-animate="fade" data-delay="500">
                                <button id="submit-btn" type="submit" class="elButton elButtonColor1 elButtonFull elButtonSize2 elButtonBottomBorder elButtonTxtColor1" style="color: rgb(255, 255, 255); background-color: rgb(235, 129, 37);">
                                    <span class="elButtonMain">¡Acceder Ahora!</span>
                                    <span class="elButtonSub"></span>
                                </button>

                            </div>

                        </div>
                    </div>
                    {{ Form::hidden('url', url()) }}
                    {{ Form::hidden('user_id', $user->id) }}
                    {{ Form::hidden('type', 'landing') }}


                    @if(count($list)>0)
                    <input type="hidden" name="meta_web_form_id" value="{{ $list->meta_web_form_id }}" />
                    <input type="hidden" name="meta_split_id" value="" />
                    <input type="hidden" name="listname" value="{{ $list->listname }}" />
                    <input type="hidden" name="redirect" value="{{ url().'/thankyou/'. $user->username }}"/>

                    <input type="hidden" name="meta_adtracking" value="mlmfunnel" />
                    <input type="hidden" name="meta_message" value="1" />
                    <input type="hidden" name="meta_required" value="name,email" />

                    <input type="hidden" name="meta_tooltip" value="" />

                    @endif

                    {{ Form::close() }}
                </div>
            </div>

        </div>
        <div class="container noTopMargin padding40-top padding40-bottom padding40H  noBorder borderSolid border3px cornersAll activeSection_topBorder activeSection_bottomBorder bgCover100 emptySection wideContainer activeSection_topBorder0 activeSection_bottomBorder0 shadow30 radius10" id="section-7944310000" data-title="Section" data-block-color="0074C7" style="padding-top: 40px; padding-bottom: 40px; margin-top: 40px; outline: none; background-color: rgba(53, 58, 63, 0.933333);" data-trigger="none" data-animate="fade" data-delay="500">
            <div class="containerInner ui-sortable">
                <div style="outline: none;" class="row bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin" id="row-4138210000" data-trigger="none" data-animate="fade" data-delay="500" data-title="3 column row">
                    <div style="outline: none;" id="col-left-961" class="col-md-4 innerContent col_left" data-col="left" data-trigger="none" data-animate="fade" data-delay="500" data-title="Left column">
                        <div class="col-inner bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin">
                            <div style="display: block; outline: medium none; cursor: pointer;" class="de elHeadlineWrapper de-editable" id="tmp_headline1-78501" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500">
                                <div class="ne elHeadline lh3 elMargin0 elBGStyle0 hsSize27 hsTextShadow3" style="text-align: center; color: rgb(255, 255, 255);" data-bold="inherit" contenteditable="false">
                                    <b>Un Negocio Sencillo</b>
                                    <br>
                                </div>

                            </div>
                            <div style="margin-top: 10px; outline: medium none; cursor: pointer;" class="de elHeadlineWrapper de-editable" id="headline-20748" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500">
                                <div class="ne elHeadline lh3 elMargin0 elBGStyle0 hsTextShadow3 elHeadlineIcon_asterisk hsSize18" style="text-align: center; color: rgba(255, 255, 255, 0.71);" data-bold="inherit" contenteditable="false">Puedes empezar hoy mismo con tan sólo cambiar de tienda y comprar lo que necesitas a un menor precio
                                    <br>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style="outline: none;" id="col-center-492" class="col-md-4 innerContent col_right" data-col="center" data-trigger="none" data-animate="fade" data-delay="500" data-title="Center column">
                        <div class="col-inner bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin">
                            <div style="display: block; outline: medium none; cursor: pointer;" class="de elHeadlineWrapper de-editable" id="headline-77219" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500">
                                <div class="ne elHeadline lh3 elMargin0 elBGStyle0 hsSize27 hsTextShadow3" style="text-align: center; color: rgb(255, 255, 255);" data-bold="inherit" contenteditable="false">
                                    <b>Un Negocio Rentable</b>
                                    <br>
                                </div>

                            </div>
                            <div style="margin-top: 10px; outline: medium none; cursor: pointer;" class="de elHeadlineWrapper de-editable" id="headline-28693" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500">
                                <div class="ne elHeadline lh3 elMargin0 elBGStyle0 hsTextShadow3 elHeadlineIcon_asterisk hsSize18" style="text-align: center; color: rgba(255, 255, 255, 0.71);" data-bold="inherit" contenteditable="false">Respaldado por productos de Alta Calidad y de consumo masivo
                                    <br>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style="outline: none;" id="col-right-644" class="col-md-4 innerContent col_right" data-col="right" data-trigger="none" data-animate="fade" data-delay="500" data-title="Right column">
                        <div class="col-inner bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin">
                            <div style="display: block; outline: medium none; cursor: pointer;" class="de elHeadlineWrapper de-editable" id="headline-58837" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500">
                                <div class="ne elHeadline lh3 elMargin0 elBGStyle0 hsSize27 hsTextShadow3" style="text-align: center; color: rgb(255, 255, 255);" data-bold="inherit" contenteditable="false">
                                    <b>Un Negocio Que Te Cuida</b>
                                    <br>
                                </div>

                            </div>
                            <div style="margin-top: 10px; outline: medium none; cursor: pointer;" class="de elHeadlineWrapper de-editable" id="headline-63395" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500">
                                <div class="ne elHeadline lh3 elMargin0 elBGStyle0 hsTextShadow3 elHeadlineIcon_asterisk hsSize18" style="text-align: center; color: rgba(255, 255, 255, 0.71);" data-bold="inherit" contenteditable="false">Nuestros productos potencian tu bienestar y tu salud y están libres de sustancias tóxicas
                                    <br>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="container noTopMargin padding40-top padding40-bottom padding40H  borderSolid border3px cornersAll radius0 bgNoRepeat activeSection_topBorder activeSection_bottomBorder emptySection wideContainer activeSection_topBorder0 activeSection_bottomBorder0 shadow0 noBorder" id="section-1247410000" data-title="Section" data-block-color="0074C7" style="padding-top: 20px; padding-bottom: 20px; border-color: rgba(0, 0, 0, 0.360784); outline: none; background-color: rgba(35, 34, 34, 0);" data-trigger="none" data-animate="fade" data-delay="500">
            <div class="containerInner ui-sortable">
                <div style="outline: none;" class="row bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin" id="row-689510000" data-trigger="none" data-animate="fade" data-delay="500" data-title="1 column row">
                    <div style="outline: none;" id="col-full-678" class="col-md-12 innerContent col_left" data-col="full" data-trigger="none" data-animate="fade" data-delay="500" data-title="full column">
                        <div class="col-inner bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin">
                            <div style="outline: medium none; cursor: pointer;" class="de elHeadlineWrapper de-editable" id="tmp_headline1-15092" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500">
                                <div class="ne elHeadline lh3 elMargin0 elBGStyle0 hsTextShadow0 hsSize18" style="text-align: center; color: rgb(255, 255, 255);" data-bold="inherit" contenteditable="false">Copyright 2015 - {{ Setting::key('app_url')->first()->value }}
                                    <br>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <style id="button_style_tmp_button-93582">
            #tmp_button-93582 .elButtonFlat:hover {
                background-color: #d46d13!important;
            }
            #tmp_button-93582 .elButtonBottomBorder:hover {
                background-color: #d46d13!important;
            }
            #tmp_button-93582 .elButtonSubtle:hover {
                background-color: #d46d13!important;
            }
            #tmp_button-93582 .elButtonGradient {
                background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgb(235, 129, 37)), color-stop(1, #d46d13));
                background-image: -o-linear-gradient(bottom, rgb(235, 129, 37) 0%, #d46d13 100%);
                background-image: -moz-linear-gradient(bottom, rgb(235, 129, 37) 0%, #d46d13 100%);
                background-image: -webkit-linear-gradient(bottom, rgb(235, 129, 37) 0%, #d46d13 100%);
                background-image: -ms-linear-gradient(bottom, rgb(235, 129, 37) 0%, #d46d13 100%);
                background-image: linear-gradient(to bottom, rgb(235, 129, 37) 0%, #d46d13 100%);
            }
            #tmp_button-93582 .elButtonGradient:hover {
                background-image: -webkit-gradient(linear, left top, left bottom, color-stop(1, rgb(235, 129, 37)), color-stop(0, #d46d13));
                background-image: -o-linear-gradient(bottom, rgb(235, 129, 37) 100%, #d46d13 0%);
                background-image: -moz-linear-gradient(bottom, rgb(235, 129, 37) 100%, #d46d13 0%);
                background-image: -webkit-linear-gradient(bottom, rgb(235, 129, 37) 100%, #d46d13 0%);
                background-image: -ms-linear-gradient(bottom, rgb(235, 129, 37) 100%, #d46d13 0%);
                background-image: linear-gradient(to bottom, rgb(235, 129, 37) 100%, #d46d13 0%);
            }
            #tmp_button-93582 .elButtonBorder {
                border: 3px solid rgb(235, 129, 37)!important;
                color: rgb(235, 129, 37)!important;
            }
            #tmp_button-93582 .elButtonBorder:hover {
                background-color: rgb(235, 129, 37)!important;
                color: #FFF!important;
            }
        </style>
    </div>
    <!-- /end of page container -->

    <style id="custom-css">
    </style>
    <div id="fb-root"></div>
    <script>
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&appId=246441615530259&version=v2.0";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
    <!-- page ID -->
    <input type="hidden" value="1119361" id="page-id">
    <!-- root page ID -->
    <input type="hidden" value="1119361" id="root-id">
    <!-- variant check -->
    <input type="hidden" value="core" id="variant-check">
    <!-- user ID -->
    <input type="hidden" value="221211" id="user-id">
    <!-- Fancy JS -->
    <!-- js -->
    <!-- extra JS - TODO: move to lander.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mediaelement/2.13.2/js/mediaelement.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parsley.js/1.2.3/parsley.min.js"></script>
    <script type="text/javascript" src="https://addthisevent.com/libs/1.5.8/ate.min.js"></script>
    <script src="https://www.clickfunnels.com/assets/lander.js"></script>
    <!--[if lt IE 9]>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.min.js"></script>
  <![endif]-->
    <!-- hidden AR CF editor -->

    <link href="https://cdnjs.cloudflare.com/ajax/libs/mediaelement/2.13.2/css/mediaelementplayer.min.css" rel="stylesheet" type="text/css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mediaelement/2.13.2/css/mejs-skins.css" rel="stylesheet" type="text/css">
    <!-- billing related JS -->
    <script src="https://pasartes.clickfunnels.com/cf_pe_orders.js"></script>
    <!-- custom 3rd party tracking => moved to noko -->
    <section id="custom-tracking" class="hide"></section>
    <!-- iframe close button --><span class="countdown-time" style="display:none;"></span>
    <span class="webinar-last-time" style="display:none;"></span>
    <span class="webinar-ext" style="display:none;"></span>
    <span class="webinar-ot" style="display:none;"></span>

    <script type="text/javascript">
        document.createElement('video');
        document.createElement('audio');
        document.createElement('track');
    </script>
    <script src="https://vjs.zencdn.net/4.11/video.js"></script>
    <script type="text/javascript" src="https://addthisevent.com/libs/1.5.8/ate.min.js"></script>
    <script src="/assets/js/statistics.js"></script>


    @if(count($list)>0)
    <script>    
        $(document).on("ready", function(){
            $("#submit-btn").on("click", function(event){
                event.preventDefault();
                var form = $("#suscribe-form").serialize();                
                $.post('/suscribe', form, function(data, textStatus, xhr) {

                   
                });

                setTimeout(function(){ $("#suscribe-form").submit(); }, 1000);
            });
        });
    </script>   
    @endif


</body>

</html>