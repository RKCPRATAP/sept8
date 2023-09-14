import { LightningElement } from "lwc";

export default class Calc extends LightningElement {
  num1 = "";
  num2 = "";
  result = 0;

  changeNum(event) {
    let name = event.target.name;
    if (name === "input1") {
      this.num1 = event.target.value;
    } else if (name === "input2") {
      this.num2 = event.target.value;
    }
  }
  handleClick(event) {
    let labelName = event.target.label;
    if (labelName === "Add") {
      this.result = parseInt(this.num1) + parseInt(this.num2);
    } else if (labelName === "Sub") {
      this.result = parseInt(this.num1) - parseInt(this.num2);
    } else if (labelName === "Mul") {
      this.result = parseInt(this.num1) * parseInt(this.num2);
    } else if (labelName === "Div") {
      this.result = parseInt(this.num1) / parseInt(this.num2);
    }
    this.num1 = " ";
    this.num2 = " ";
  }
}
