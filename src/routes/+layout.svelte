<script>
import '../styles/main.css';
import Header from '../components/Header.svelte';
import Footer from '../components/Footer.svelte';
</script>
<div class="app"><noscript><div class="alert alert-warning" role="alert"><strong>Your browser does not support JavaScript.</strong></div></noscript><Header /><main><slot /></main><Footer /></div>