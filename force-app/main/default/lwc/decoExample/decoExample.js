import { LightningElement, track } from 'lwc';

export default class DecoExample extends LightningElement {

    greeting= 'Rohit';
    myDetails = {
        fName: 'Laptop',
        age: 24,
        lName: 'Phone',
        sal: 299999
    };
    arr = ['AA', 'BB', 'CC', 'DD', 'EE'];
    handleClick(event){
        this.myDetails = { fName: 'AAJ KA DIN', lName: 'KAL KA DIN' };
        this.arr = [...this.arr, '88','100'];
    }
}