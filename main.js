import { form1Factory } from "./component/form1.js";
import { form2Factory } from "./component/form2.js";
import { form3Factory } from "./component/form3.js";
import { formCustomButtonFactory } from "./component/form-custom-button.js";

const body = document.querySelector("body");

const form1 = form1Factory();
body.appendChild(form1);

const form2 = form2Factory();
body.appendChild(form2);

const form4 = form3Factory();
body.appendChild(form4);

const formCustomButton = formCustomButtonFactory();
body.appendChild(formCustomButton);
