describe('application home screen', () => {
  it('should visit the app', () => {
    cy.visit('/');
  });

  it('should click login button and get to login screen', () => {
    cy.get('nav a')
      .last()
      .click();

    cy.url().should('eq', 'http://localhost:3000/login');
  });
});

describe('login process', () => {
  it('should visit the app', () => {
    cy.visit('/login');
  });

  it('should provide correct data and login to service', () => {
    cy.get('input#useState')
      .type('qwe@we.we');

    cy.get('input#password')
      .type('qwe123');

    cy.get('button')
      .click()
      .wait(2000);

    cy.url().should('eq', 'http://localhost:3000/');
  });
});
