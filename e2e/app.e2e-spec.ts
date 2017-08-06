import { ErrorResearchPage } from './app.po';

describe('error-research App', () => {
  let page: ErrorResearchPage;

  beforeEach(() => {
    page = new ErrorResearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
