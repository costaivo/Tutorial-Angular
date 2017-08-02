import { RedditClonePage } from './app.po';

describe('reddit-clone App', () => {
  let page: RedditClonePage;

  beforeEach(() => {
    page = new RedditClonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
