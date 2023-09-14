import { LightningElement } from "lwc";

export default class ParentComp extends LightningElement {
  greeting = "Welcome to Tech Journy With Ankit";
  userDetails = {
    fName: "Ayansh",
    lName: "Singh",
    age: "33"
  };
}
