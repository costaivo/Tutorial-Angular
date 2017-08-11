import { AdManagerAppPage } from './app.po';

describe('ad-manager-app App', () => {
  let page: AdManagerAppPage;

  beforeEach(() => {
    page = new AdManagerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
