import { AngularShoppingAppPage } from './app.po';

describe('angular-shopping-app App', () => {
  let page: AngularShoppingAppPage;

  beforeEach(() => {
    page = new AngularShoppingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
