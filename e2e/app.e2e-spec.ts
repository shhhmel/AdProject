import { AdProjectPage } from './app.po';

describe('ad-project App', () => {
  let page: AdProjectPage;

  beforeEach(() => {
    page = new AdProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
