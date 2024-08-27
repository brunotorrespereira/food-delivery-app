
import React from 'react';
import Listagem from '../../src/Listagem';
import renderer from 'react-test-renderer';

describe('Listagem Component', () => {
  it('deve renderizar corretamente os dados fornecidos', () => {
    const data = {
      cargo: 'Desenvolvedor',
      nome: 'Bruno',
      sobreNome: 'Pereira',
    };
    const component = renderer.create(<Listagem data={data} />);
    const tree = component.toJSON();
    
    // Verifica se cada dado está presente na renderização
    expect(tree).toMatchSnapshot();
    expect(tree.children[0].children[0]).toBe(data.cargo);
    expect(tree.children[1].children[0]).toBe(data.nome);
    expect(tree.children[2].children[0]).toBe(data.sobreNome);
  });
});
