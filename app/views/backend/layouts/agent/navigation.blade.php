<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#sidebar">
                <span class="sr-only"> </span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a id="menu-medium" class="sidebar-toggle tooltips">
                <i class="fa fa-outdent"></i>
            </a>
            <a class="navbar-brand" href="/"></a>
        </div>
        <div class="navbar-center">Agent</div>
        <div class="navbar-collapse collapse">
            <!-- BEGIN TOP NAVIGATION MENU -->
            <ul class="nav navbar-nav pull-right header-menu">
                <!-- BEGIN NOTIFICATION DROPDOWN -->
                {{--<li class="dropdown" id="notifications-header">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <i class="glyph-icon flaticon-notifications"></i>
                        <span class="badge badge-danger badge-header">{{ $count = Notification::unread()->count() }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-header clearfix">
                            <p class="pull-left">Notificaciones</p>
                        </li>
                        <li>
                            @if($count > 0)
                                <ul class="dropdown-menu-list withScroll" data-height="220">

                                    @foreach(Notification::unread()->get() as $n)
                                    <a href="{{ $n->getLink() }}">
                                        <li>                                   
                                            <i class="fa p-r-10 f-18 {{ $n->getClass() }} "></i>
                                            {{ $n->notification }}
                                            <span class="dropdown-time">{{ $n->getHumanDate() }}</span>
                                            
                                        </li> 
                                    </a>
                                    @endforeach

                                </ul>
                            @else

                                <a href="#">
                                    Sin notificaciones.
                                </a>

                            @endif
                        </li>
                        <li class="dropdown-footer clearfix">
                            <a href="#" class="pull-left">Ver todas las notificaciones</a>
                            <a href="#" class="pull-right">
                                <i class="fa fa-cog"></i>
                            </a>
                        </li>
                    </ul>
                </li>--}}
                <!-- END NOTIFICATION DROPDOWN -->
                <!-- BEGIN MESSAGES DROPDOWN -->

                <li class="dropdown" id="messages-header">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <i class="glyph-icon flaticon-notifications"></i>
                        <span class="badge badge-primary badge-header">{{ $count = Notification::unread()->count() }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-header clearfix">
                            <p class="pull-left">
                                Notificaciones
                            </p>
                        </li>
                        <li class="dropdown-body">
                            @if($count > 0)
                            <ul class="dropdown-menu-list withScroll" data-height="220">

                                @foreach(Notification::unread()->get() as $n)
                                <a href="{{ $n->getLink() }}">
                                    {{--<li>                                   
                                        <i class="fa p-r-10 f-18 {{ $n->getClass() }} "></i>
                                        {{ $n->notification }}
                                        <span class="dropdown-time">{{ $n->getHumanDate() }}</span>
                                        
                                    </li> --}}

                                    <li class="clearfix">
                                        <span class="pull-left p-r-5">
                                            {{ $n->getIcon() }}                                        
                                        </span>
                                        <div class="clearfix">
                                            <div>
                                                {{ $n->getReminder() }} 
                                                <small class="pull-right text-muted">
                                                    <span class="glyphicon glyphicon-time p-r-5"></span>{{ $n->getHumanDate() }}
                                                </small>
                                            </div>
                                            <p>{{ $n->notification }}</p>
                                        </div>
                                    </li>


                                </a>                              

                                @endforeach
                                
                            </ul>

                            @else

                            <a href="#">
                                Sin notificaciones.
                            </a>

                            @endif
                        </li>
                        <li class="dropdown-footer clearfix">
                            <a href="/notifications" class="pull-left">Ver todas las notificaciones</a>
                            <a href="/notifications" class="pull-right">
                                <i class="fa fa-cog"></i>
                            </a>
                        </li>
                    </ul>
                </li>
                
                <!-- END MESSAGES DROPDOWN -->
                <!-- BEGIN USER DROPDOWN -->
                <li class="dropdown" id="user-header">
                    <a href="#" class="dropdown-toggle c-white" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <img src="/assets/img/avatars/avatar1.png" alt="user avatar" width="30" class="p-r-5">
                        <span class="username">{{ Auth::user()->full_name }} {{ Auth::user()->getTypeName() }}</span>
                        <i class="fa fa-angle-down p-r-10"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="/profile">
                                <i class="glyph-icon flaticon-account"></i> Mi Perfil
                            </a>
                        </li>                        
                        <li class="dropdown-footer clearfix">
                            <a href="javascript:;" class="toggle_fullscreen" title="Pantalla completa">
                                <i class="glyph-icon flaticon-fullscreen3"></i>
                            </a>
                            <a href="#" title="Bloquear pantalla">
                                <i class="glyph-icon flaticon-padlock23"></i>
                            </a>
                            <a href="/logout" title="Salir">
                                <i class="fa fa-power-off"></i>
                            </a>
                        </li>
                    </ul>



                </li>
                <!-- END USER DROPDOWN -->
                
            </ul>
            <!-- END TOP NAVIGATION MENU -->
        </div>
    </div>
</nav>