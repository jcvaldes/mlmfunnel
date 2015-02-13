<nav id="sidebar">
    <div id="main-menu">
        <ul class="sidebar-nav">
            <li class="<?= Request::is('*dashboard') ? 'current' : '' ?>">
                <a href="/dashboard"><i class="fa fa-dashboard"></i><span class="sidebar-text">Dashboard</span></a>
            </li>
            <li class="<?= Request::is('*user*') ? 'current' : '' ?>">
                <a href="/dashboard/user"><i class="fa fa-user"></i><span class="sidebar-text">Usuarios</span></a>
            </li>

            <li class="<?= Request::is('*profile*') ? 'current' : '' ?>">
                <a href="/dashboard/profile"><i class="glyph-icon flaticon-account"></i><span class="sidebar-text">Mi perfil</span></a>
            </li> 
                        
            <br>
        </ul>
    </div>
</nav>