import { browser, element, by } from 'protractor';

export class ScenarioEditorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('se-root h1')).getText();
  }
}
