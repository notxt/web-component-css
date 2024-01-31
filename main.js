import { formFactory } from "./component/form.js";

const body = document.querySelector("body");

const form = formFactory();
body.appendChild(form);
