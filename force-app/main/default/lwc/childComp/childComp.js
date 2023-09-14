import { LightningElement, api } from "lwc";

export default class ChildComp extends LightningElement {
  @api display;
  @api displayGreeting;
  @api user;
}
