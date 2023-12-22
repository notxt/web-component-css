const template = document.createElement("template");

const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
template.innerHTML = html`
  <style>
    :host {
      --button-border-width: 15px;
    }

    button {
      border-width: var(--button-border-width);
    }
  </style>

  <button type="submit">custom button</button>
`;

class SubmitButton extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
  }

  connectedCallback() {
    this.internals_ = this.attachInternals();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const button = this.shadowRoot.querySelector("button");

    button.onclick = () => {
      if (this.internals_.form.checkValidity()) return;
      this.internals_.form.reportValidity();
    };
  }
}

customElements.define("x-submit-button", SubmitButton);

export const submitButtonFactory = () => {
  return new SubmitButton();
};
