<nav id="sidebar">
    <div id="main-menu">
        <ul class="sidebar-nav">
            <li class="<?= Request::is('*dashboard') ? 'current' : '' ?>">
                <a href="/dashboard"><i class="fa fa-dashboard"></i><span class="sidebar-text">Dashboard</span></a>
            </li>
            <li class="<?= Request::is('dashboard/user*') ? 'current' : '' ?>">
                <a href="/dashboard/user"><i class="fa fa-user"></i><span class="sidebar-text">Usuarios</span></a>
            </li>

            <li class="<?= Request::is('*profile*') ? 'current' : '' ?>">
                <a href="/dashboard/profile"><i class="glyph-icon flaticon-account"></i><span class="sidebar-text">Mi perfil</span></a>
            </li>

            <li class="<?= Request::is('*settings*') ? 'current' : '' ?>">
                <a href="/dashboard/settings"><i class="fa fa-gear"></i><span class="sidebar-text">Configuración</span></a>
            </li>

            <li class="<?= Request::is('*notifications*') ? 'current' : '' ?>">
                <a href="/dashboard/notifications"><i class="fa fa-envelope"></i><span class="sidebar-text">Notificaciones</span></a>
            </li>

            <br>
        </ul>
    </div>
</nav>