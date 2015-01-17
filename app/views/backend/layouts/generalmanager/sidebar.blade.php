<nav id="sidebar">
    <div id="main-menu">
        <ul class="sidebar-nav">
            <li class="<?= Request::is('/') ? 'current' : '' ?>">
                <a href="/"><i class="fa fa-dashboard"></i><span class="sidebar-text">Dashboard</span></a>
            </li>
            <li class="<?= Request::is('branch*') ? 'current' : '' ?>">
                <a href="/branch"><i class="glyph-icon flaticon-panels"></i><span class="sidebar-text">Sucursales</span></a>                
            </li>
            <li class="<?= Request::is('user*') ? 'current' : '' ?>">
                <a href="/user"><i class="glyph-icon flaticon-account"></i><span class="sidebar-text">Usuarios</span></a>
            </li>            
            <li class="<?= Request::is('customer*') ? 'current' : '' ?>">
                <a href="/customer"><i class="glyph-icon flaticon-ui-elements2"></i><span class="sidebar-text">Clientes</span></a>                
            </li>            
            <li class="<?= Request::is('ubication*') ? 'current' : '' ?>">
                <a href="/ubication"><i class="fa fa-globe"></i><span class="sidebar-text">Ubicaciones</span></a>
            </li>
            <li class="<?= Request::is('property*') ? 'current' : '' ?>">
                <a href="/property"><i class="fa fa-home"></i><span class="sidebar-text">Inmuebles</span></a>
            </li>

            <li class="<?= Request::is('operator*') ? 'current' : '' ?>">
                <a href="/operator"><i class="fa fa-user"></i><span class="sidebar-text">Operadores</span></a>
            </li>

            <br>
        </ul>
    </div>
</nav>