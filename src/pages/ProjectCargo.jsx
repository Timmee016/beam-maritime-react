export default function ProjectCargo() {
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
<!-- Hero Section -->
<section class="hero">
<h1>Project Cargo</h1>
<p>Specialized handling of heavy and oversized shipments</p>
</section>

<!-- Content Section -->
<section class="content-section">
<h2>What We Offer</h2>
<p>
Our Project Cargo services are designed for complex logistics operations involving oversized or heavy equipment.
From planning to final delivery, we coordinate multimodal transportation, equipment sourcing, and site surveys.
</p>
<p>
Beam Maritime ensures compliance, safety, and efficiency throughout the project cargo journey, no matter how
remote or challenging the destination.
</p>
<a href="quotation.html" class="cta-btn">Request a Quote</a>
</section>

<!-- Footer -->
<footer>
<p>&copy; 2025 Beam Maritime. All rights reserved.</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </main>
  );
}
