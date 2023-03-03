import validator from "validator";

const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const form = document.querySelector(".form") as HTMLFormElement;
const inputsList = document.querySelectorAll("input");
const passwordAgain = document.querySelector(
  ".passwordAgain"
) as HTMLInputElement;

interface TypeForm {
  username: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  passwordAgain: HTMLInputElement;
}

class ValideForm implements TypeForm {
  constructor(
    public username: HTMLInputElement,
    public email: HTMLInputElement,
    public password: HTMLInputElement,
    public passwordAgain: HTMLInputElement
  ) {
    this.onSubmit();
  }

  init(): void {
    this.checkInputs();
  }

  checkInputs(): void {
    this.clearAllInputError(inputsList);

    if (!this.username.value) {
      this.getSpanAndSetMessage(this.username, "Campo obrigatório.");
      return;
    }
    if (this.username.value.length < 5) {
      this.getSpanAndSetMessage(
        this.username,
        "Seu usuário precisa ter ao menos 5 caracteres."
      );
      return;
    }
    if (!validator.isEmail(this.email.value)) {
      this.getSpanAndSetMessage(this.email, "E-mail inválido.");
      return;
    }

    if (!this.password.value) {
      this.getSpanAndSetMessage(this.password, "Senha é obrigátoría.");
      return;
    }

    if (!this.passwordAgain.value) {
      this.getSpanAndSetMessage(
        this.passwordAgain,
        "Confirmar a senha é obrigatório."
      );
      return;
    }

    if (this.password.value !== this.passwordAgain.value) {
      this.getSpanAndSetMessage(this.password, "Senhas não conferem.");
      this.getSpanAndSetMessage(this.passwordAgain, "Senhas não conferem.");
      return;
    }

    alert("Cadastro realizado com sucesso!");
  }

  getSpanError(input: HTMLElement): HTMLInputElement {
    const span = input.parentElement?.querySelector("span") as HTMLInputElement;

    return span;
  }

  setErrorMessage(span: HTMLSpanElement, message: string): void {
    span.innerHTML = message;
    span.style.display = "block";
  }

  getSpanAndSetMessage(input: HTMLElement, message: string): void {
    const span = input.parentElement?.querySelector("span") as HTMLSpanElement;

    this.setErrorMessage(span, message);
  }

  clearAllInputError(inputs: NodeListOf<HTMLInputElement>): void {
    inputs.forEach((input) => this.getSpanAndSetMessage(input, ""));
    return;
  }

  onSubmit(): void {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      this.init();
    });
  }
}

const user = new ValideForm(username, email, password, passwordAgain);
