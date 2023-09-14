import { LightningElement } from "lwc";

export default class FullName extends LightningElement {
  fName = "";
  lName = "";
  fullName;
  //tempFullName;
  changeHandle1(event) {
    this.fName = event.target.value;
  }
  changeHandle2(event) {
    this.lName = event.target.value;
  }
  handleClick(event) {
    this.fullName = this.fName.toUpperCase() + " " + this.lName.toUpperCase();
    //this.fullName = this.tempFullName.toUpperCase;
  }
}
