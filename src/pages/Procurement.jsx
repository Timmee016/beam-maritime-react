export default function Procurement() {
  return (
    <main>
      <!-- Header Navbar -->
<nav class="navbar navbar-expand-lg">
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

<!-- Services Dropdown -->
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
<h1>Procurement</h1>
<p>Efficient sourcing to meet your maritime needs</p>
</section>

<!-- Content Section -->
<section class="content-section">
<h2>What We Offer</h2>
<p>
Beam Maritime provides expert procurement services tailored to the unique demands of the maritime industry. We source high-quality equipment, spare parts, and supplies with speed, reliability, and cost-efficiency.
</p>
<p>
Our procurement team ensures timely delivery and strict compliance with international maritime standards.
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
