const template = document.createElement("template");

const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
template.innerHTML = html`
  <link rel="stylesheet" href="style.css" />
  <form>
    <input type="text" required />
    <button type="submit">form 3</button>
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

customElements.define("x-form-3", Form);

export const form3Factory = () => {
  return new Form();
};
