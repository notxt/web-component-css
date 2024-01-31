import { ifThenFactory } from "./if-then.js";

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
`;

class Form extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.appendChild(template.content.cloneNode(true));

    const form = document.createElement("form");

    const ifThen = ifThenFactory(
      "If you click this",
      "Then you must fill this out"
    );
    form.appendChild(ifThen);

    const container = document.createElement("div");
    const label2 = document.createElement("label");
    label2.innerText = "Control";
    container.appendChild(label2);
    const input = document.createElement("input");
    input.type = "text";
    input.required = true;
    container.appendChild(input);
    form.appendChild(container);

    const button = document.createElement("button");
    button.innerText = "Submit";
    form.appendChild(button);

    this.shadowRoot.appendChild(form);

    form.onsubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      console.log("form submitted", formData);
    };
  }
}

customElements.define("x-form", Form);

export const formFactory = () => {
  return new Form();
};
