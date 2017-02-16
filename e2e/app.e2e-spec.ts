import { LagaBankPage } from './app.po';

describe('laga-bank App', function() {
  let page: LagaBankPage;

  beforeEach(() => {
    page = new LagaBankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
