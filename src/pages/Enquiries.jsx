export default function Enquiries() {
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

<!-- Enquiry Form -->
<section class="enquiry-form-section fade-in-up">
<h1 class="text-center mb-4">Make an Enquiry</h1>
<form class="contact-form" aria-label="Enquiry form">
<label for="fullName">Full Name</label>
<input id="fullName" type="text" placeholder="Enter your name" required />

<label for="email">Email Address</label>
<input id="email" type="email" placeholder="Enter your email" required />

<label for="company">Company Name</label>
<input id="company" type="text" placeholder="Company name" required />

<label for="phone">Phone Number</label>
<input id="phone" type="tel" placeholder="Phone number" required />

<label for="message">Your Enquiry</label>
<textarea id="message" placeholder="What would you like to know?" rows="5" required></textarea>

<button type="submit" class="btn-pulse">Submit Enquiry</button>
</form>
</section>
<!-- Footer -->
<footer>
<p>&copy; 2025 Beam Maritime. All rights reserved.</p>
</footer>
<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', () => {
document.querySelector('.fade-in-up').classList.add('visible');
});
</script>
    </main>
  );
}
