import { PersonalPage } from './app.po';

describe('personal App', () => {
  let page: PersonalPage;

  beforeEach(() => {
    page = new PersonalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
