import { TvShowsPage } from './app.po';

describe('tv-shows App', () => {
  let page: TvShowsPage;

  beforeEach(() => {
    page = new TvShowsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
