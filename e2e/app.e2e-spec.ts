import { ScenarioEditorPage } from './app.po';

describe('scenario-editor App', () => {
  let page: ScenarioEditorPage;

  beforeEach(() => {
    page = new ScenarioEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('se works!');
  });
});
