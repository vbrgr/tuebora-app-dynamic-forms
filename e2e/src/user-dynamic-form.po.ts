import { browser, by, element } from 'protractor';

export class UserDynamicFormPage {
  navigateTo() {
    return browser.get(browser.baseUrl.concat('user-dynamic-form')) as Promise<any>;
  }


  getAllInputText() {
    return element.all(by.css('input[type="text"]'));
  }
  getAllEmail() {
    return element.all(by.css('input[type="email"]'));
  }
  getAllInputNumber() {
    return element.all(by.css('input[type="number"]'));
  }
  getAllRadio() {
    return element.all(by.css('input[type="radio"]'));
  }
  getAllSelect() {
    return element.all(by.css('select'));
  }
}
