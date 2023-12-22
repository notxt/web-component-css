import "./submit-button.js";

const template = document.createElement("template");

const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
template.innerHTML = html`
  <form>
    <input type="text" required />
    <x-submit-button></x-submit-button>
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

customElements.define("x-form-custom-button", Form);

export const formCustomButtonFactory = () => {
  return new Form();
};
