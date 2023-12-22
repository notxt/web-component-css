const template = document.createElement("template");

const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
template.innerHTML = html`
  <style>
    :host {
      --button-border-width: 1px;
    }

    button {
      border-width: var(--button-border-width);
    }
  </style>
  <form>
    <input type="text" required />
    <button type="submit">form 2</button>
  </form>
`;

class Form extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const form = this.shadowRoot.querySelector("form");
    form.onsubmit = (event) => {
      event.preventDefault();
      console.log("form submitted");
    };
  }
}

customElements.define("x-form-2", Form);

export const form2Factory = () => {
  return new Form();
};
