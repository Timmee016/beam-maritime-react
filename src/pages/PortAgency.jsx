export default function PortAgency() {
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
<h1>Port Agency</h1>
<p>Efficient vessel handling across Nigerian ports</p>
</section>

<!-- Content Section -->
<section class="content-section">
<h2>What We Offer</h2>
<p>
At Beam Maritime, our Port Agency services ensure smooth vessel turnaround with minimal delays.
Our experienced agents provide end-to-end support, including pre-arrival formalities,
coordination with port authorities, customs clearance, and post-departure documentation.
</p>
<p>
With deep local knowledge and 24/7 availability, we safeguard our clients' interests by ensuring
efficient operations and real-time updates throughout the vessel's stay.
</p>
<a href="quotation.html" class="cta-btn">Request a Quote</a>
</section>

<!-- Footer -->
<footer>
<p>&copy; 2025 Beam Maritime. All rights reserved.</p>
</footer>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </main>
  );
}
