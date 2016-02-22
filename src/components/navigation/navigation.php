<div class="navigation">

    <header class="header">
        <h1 class="alpha header__logo uppercase no-bm">
            <a href="index.php">G<span class="mobile-hidden">ravita</span></a>
        </h1>
        <div class="header__burger">
            <div class="header__burger--filling"></div>
        </div>
    </header>

    <nav class="navigation__dropdown">
        <h2 class="navigation__dropdown-title header--gold uppercase">Look around</h2>
        <ul class="navigation__list delta no-styling">
            <li class="navigation__item"><a href="portfolio.php">Our Projects</a></li>
            <li class="navigation__item"><a href="about.php">About Gravita</a></li>
            <li class="navigation__item"><a href="words.php">Words</a></li>
            <li class="navigation__item"><a href="contact.php">Contact</a></li>
        </ul>
    </nav>

    <?php if (isset($include_intro) && $include_intro === true): ?>
    <div class="navigation__opener">
        <p>We work closely with organisations to help reshape, align and accentuate
        their purpose. Our aim is to craft new visual languages and apply design to
        fulfil the right reaction and response.</p>
    </div>
    <?php endif; ?>

</div>
