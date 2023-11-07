import { LitElement, html, css } from "lit";

class TimeTicker extends LitElement {
  static styles = css`
    :host {
      font-size: 2rem;
    }
  `;

  constructor() {
    super();
    this.currentTime = new Date().toLocaleTimeString();
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateTime();
  }

  updateTime() {
    this.currentTime = new Date().toLocaleTimeString();
    setTimeout(() => this.updateTime(), 1000);
  }

  render() {
    return html`<div>${this.currentTime}</div>`;
  }
}

customElements.define("time-ticker", TimeTicker);
