import { LightningElement } from "lwc";

export default class ParentComp extends LightningElement {
  greeting = "Welcome to Rohit";
  userDetails = {
    fName: "Ayansh",
    lName: "Singh",
    age: 33
  };
}
