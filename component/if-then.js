class IfThen extends HTMLElement {
  static formAssociated = true;

  constructor(ifLabelText, thenLabelText) {
    super();

    this.tabIndex = 0;
    this.required = true;

    this.attachShadow({ mode: "open" });
    const internals = this.attachInternals();

    const ifInput = document.createElement("input");
    ifInput.id = "if";
    ifInput.type = "checkbox";
    this.shadowRoot.appendChild(ifInput);

    const ifLabel = document.createElement("label");
    ifLabel.setAttribute("for", "if");
    ifLabel.innerText = ifLabelText;
    this.shadowRoot.appendChild(ifLabel);

    const thenContainer = document.createElement("div");
    this.shadowRoot.appendChild(thenContainer);

    const thenLabel = document.createElement("label");
    thenLabel.innerText = thenLabelText;

    const thenInput = document.createElement("input");
    thenInput.type = "text";

    const thenValidator = () => {
      const value = thenInput.value;
      if (value.length < 1) {
        internals.setValidity(
          { valueMissing: true },
          "Because you checked the box you have to fill this out",
          thenInput
        );
        return;
      }
      internals.setValidity({});
    };

    ifInput.onchange = () => {
      const checked = ifInput.checked;
      console.log(ifInput.checked, typeof ifInput.checked);
      if (!checked) {
        thenContainer.innerText = "";
        internals.setValidity({});
        return;
      }

      thenContainer.appendChild(thenLabel);
      thenContainer.appendChild(thenInput);
      thenValidator();
    };

    thenInput.onchange = () => thenValidator;
  }
}

customElements.define("x-if-then", IfThen);

export const ifThenFactory = (ifLabel, thenLabel) =>
  new IfThen(ifLabel, thenLabel);
