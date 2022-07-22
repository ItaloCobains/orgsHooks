import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import {carregaProdutores} from '../../../servicos/carregaDados';

export default function produtores({topo: Topo}) {
  const [title, setTitle] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitle(retorno.title);
    setLista(retorno.lista);
  }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{title}</Text>
      </>
    );
  };
  return (
    <FlatList
      data={lista}
      renderItem={({item: {nome}}) => <Text>{nome}</Text>}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
