import { AngularclidemoPage } from './app.po';

describe('angularclidemo App', function() {
  let page: AngularclidemoPage;

  beforeEach(() => {
    page = new AngularclidemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
