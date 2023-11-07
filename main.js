import { LitElement, html, css } from "lit";

class MyComponent extends LitElement {
  static styles = css`
    /* Add your component styles here */

    .cool-text {
      font-size: 36px; /* Font size */
      color: green; /* Grey color */
      position: relative;
    }
  `;

  render() {
    return html` <p>Yusrida Shafra</p> `;
  }
}

customElements.define("my-component", MyComponent);
