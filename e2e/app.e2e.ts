import { NearbyPokemonPage } from './app.po';

describe('nearby-pokemon App', function() {
  let page: NearbyPokemonPage;

  beforeEach(() => {
    page = new NearbyPokemonPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nearby-pokemon works!');
  });
});
