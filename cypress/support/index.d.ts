/// <reference types="cypress" />

declare interface User {
  email: string;
  username: string;
  password: string;
}

declare namespace Cypress {
  interface Chainable<Subject> {
    login(): Chainable<User>;
  }
}