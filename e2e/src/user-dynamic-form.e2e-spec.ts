import { UserDynamicFormPage } from './user-dynamic-form.po';
import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Tuebora App', () => {
  const  textboxinput = ['govind', 'raju', 'hyderabad'];
  const  textboxoutput = ['govind', 'raju', 'hyderabad'];
  const emailinput = ['govinda@rpwebapps.in'];
  const emailoutput = ['govinda@rpwebapps.in'];
  const numberinput = ['9491372989', '500016'];
  const numberoutput = ['9491372989', '500016'];
  let page: UserDynamicFormPage;
  let app: AppPage;
  beforeEach(async () => {
    page = new UserDynamicFormPage();
    app = new AppPage();
    await page.navigateTo();
  });
  async function getinputelement(cnt, input, output) {
    await page.getAllInputText().get(cnt).sendKeys(input);
    await expect(page.getAllInputText().get(cnt).getAttribute('value')).toEqual(output);
  }
  async function getemailelement(cnt, input, output) {
    await page.getAllEmail().get(cnt).sendKeys(input);
    await expect(page.getAllEmail().get(cnt).getAttribute('value')).toEqual(output);
  }
  async function getnumberelement(cnt, input, output) {
    await page.getAllInputNumber().get(cnt).sendKeys(input);
    await expect(page.getAllInputNumber().get(cnt).getAttribute('value')).toEqual(output);
  }
  it('validate input text fields', async () => {
    await page.navigateTo();
    const input = await page.getAllInputText().count();
    expect(input).not.toBeNull();
    expect(input).not.toBeUndefined();
    for (let x = 0; x < input; x++) {
      getinputelement(x, textboxinput[x], textboxoutput[x]);
    }
  });
  it('validate email fields', async () => {
    await page.navigateTo();
    const input = await page.getAllEmail().count();
    for (let x = 0; x < input; x++) {
      getemailelement(x, emailinput[x], emailoutput[x]);
    }
  });
  it('validate input number fields', async () => {
    await page.navigateTo();
    const input = await page.getAllInputNumber().count();
    for (let x = 0; x < input; x++) {
      getnumberelement(x, numberinput[x], numberoutput[x]);
    }
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
