// header.js
class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="site-header" style="text-align:center; font-family:sans-serif;">
        <h1>Eric Kong</h1>
        <nav>
            <a href="/index.html">Home</a>
            <a href="/blog.html">Blog</a>
            <a href="/projects.html">Projects</a>
        </nav>
      </header>
    `;
    }
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer style="text-align:center; margin-top: 50px; font-size: 0.8em;">
        <p>&copy; 2026 Eric Kong</p>
      </footer>
    `;
    }
}
customElements.define('site-footer', SiteFooter);