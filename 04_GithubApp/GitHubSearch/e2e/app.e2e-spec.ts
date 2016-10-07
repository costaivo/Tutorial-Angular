import { GitHubSearchPage } from './app.po';

describe('git-hub-search App', function() {
  let page: GitHubSearchPage;

  beforeEach(() => {
    page = new GitHubSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
