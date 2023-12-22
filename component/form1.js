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
    <button type="submit">form 1</button>
  </form>
`;

class Form extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));

    const form = this.querySelector("form");
    form.onsubmit = (event) => {
      event.preventDefault();
      console.log("form submitted");
    };
  }
}

customElements.define("x-form-1", Form);

export const form1Factory = () => {
  return new Form();
};
