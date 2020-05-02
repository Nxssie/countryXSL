export let loadNavbar = () => {
    return `
<!-- Navbar brand -->
  <a class="navbar-brand" href="index.html">
  <img src="img/logo.png" id="brand"/>
</a>

  <!-- Collapse button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="basicExampleNav">

    <!-- Links -->
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="switzerland.html">Switzerland</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="norway.html">Norway</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="uk.html">United Kingdom</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="china.html">China</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="peru.html">Peru</a>
      </li>

      <!-- Dropdown 
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>-->

    </ul>
  </div>
  <!-- Collapsible content -->`
};