export default function MiniBlog() {
  return (
    <main>
      <!-- Navbar Section -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
<a class="navbar-brand logo-container" href="#">
<img src="BEAM_MARITIME_Logo.png" alt="Beam Maritime Logo" />
</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
<ul class="navbar-nav">
<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
<li class="nav-item"><a class="nav-link" href="about.html">About Our Company</a></li>

<!-- Dropdown for Services -->
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button"
data-bs-toggle="dropdown" aria-expanded="false">
Our Services
</a>
<ul class="dropdown-menu" aria-labelledby="servicesDropdown">
<li><a class="dropdown-item" href="portagency.html">Port Agency</a></li>
<li><a class="dropdown-item" href="cargodocumentation.html">Cargo Documentation</a></li>
<li><a class="dropdown-item" href="protectiveagency.html">Protective Agency</a></li>
<li><a class="dropdown-item" href="projectcargo.html">Project Cargo</a></li>
<li><a class="dropdown-item" href="procurement.html">Procurement</a></li>
<li><a class="dropdown-item" href="warehousing.html">Warehousing</a></li>
</ul>
</li>

<li class="nav-item"><a class="nav-link" href="enquiries.html">Make Enquiries</a></li>
<li class="nav-item"><a class="nav-link" href="miniblog.html">Blog</a></li>
<li class="nav-item"><a class="nav-link" href="guidlines.html">Guidelines</a></li>
</ul>
</div>
</div>
</nav>

<section class="blog-section">
<h1>Beam Maritime Blog</h1>
<img src="https://img.freepik.com/free-photo/shipping-port-loading-cargo-container-ship_335224-303.jpg" class="blog-image" alt="Shipping Overview">

<div class="blog-card">
<div class="blog-title">Why Proper Documentation Matters in Shipping</div>
<div class="blog-date">Posted June 20, 2025</div>
<div class="blog-content">
Documentation errors can delay shipments or incur penalties. At Beam Maritime, we ensure every form and permit is double-checked to protect your cargo and keep operations smooth.
</div>
</div>

<div class="blog-card">
<div class="blog-title">Port Agency vs. Protective Agency</div>
<div class="blog-date">Posted June 18, 2025</div>
<div class="blog-content">
These two services may sound similar but serve different purposes. A port agent manages logistics at the dock; a protective agent safeguards your interests. We do both — efficiently.
</div>
</div>

<div class="blog-card">
<div class="blog-title">The Future of Project Cargo</div>
<div class="blog-date">Posted June 15, 2025</div>
<div class="blog-content">
As infrastructure projects expand across Africa, the demand for specialized cargo handling grows. Beam Maritime is equipped for the complexity of oversized freight, end to end.
</div>
</div>

</section>

<footer>
<p>&copy; 2025 Beam Maritime. All rights reserved.</p>
</footer>
    </main>
  );
}
