import { Contato } from './contato';

describe('Contato', () => {
  it('should create an instance', () => {
    expect(new Contato("Samuel Haag", null, "Masculino")).toBeTruthy();
  });
});
