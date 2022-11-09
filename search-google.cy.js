describe('Google Search', () => {
  it('loads search page', () => {
    cy.visit('https://www.google.com');
  });

  it('searches for `polinema`', () => {
    cy.get('input[name="q"]').type('polinema{enter}');
  });

  it('gets first search result', () => {
    cy.get('#search a')
      .invoke('attr', 'href')
      .then((href) => console.log(href));
  });
});