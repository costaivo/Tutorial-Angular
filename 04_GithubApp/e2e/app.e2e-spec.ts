import { GithubAppPage } from './app.po';

describe('github-app App', () => {
  let page: GithubAppPage;

  beforeEach(() => {
    page = new GithubAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
