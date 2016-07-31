export class NearbyPokemonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nearby-pokemon-app h1')).getText();
  }
}
