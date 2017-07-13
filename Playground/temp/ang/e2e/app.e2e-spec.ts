import { AngPage } from './app.po';

describe('ang App', () => {
  let page: AngPage;

  beforeEach(() => {
    page = new AngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
