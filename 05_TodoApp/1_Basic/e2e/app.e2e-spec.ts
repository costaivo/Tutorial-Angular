import { ToDoAppPage } from './app.po';

describe('to-do-app App', () => {
  let page: ToDoAppPage;

  beforeEach(() => {
    page = new ToDoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
