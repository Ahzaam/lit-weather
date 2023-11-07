import { LitElement, html, css } from "lit";

class AboutComponent extends LitElement {
  static styles = css`
    /* Add your component styles here */
  `;

  render() {
    return html`
      <!-- Add your component's HTML structure here -->
      <h2>Kaaaham</h2>
    `;
  }
}

customElements.define("about-component", AboutComponent);
