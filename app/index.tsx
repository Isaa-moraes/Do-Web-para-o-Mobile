import React from "react";
import { Text, View, StyleSheet, TextInput, Image, ScrollView } from "react-native";

const MenuInicial = () => {
  return (
    <ScrollView style={Styles.container}>

      {/* header */}
      <View style ={Styles.header}>
        <View style ={Styles.topBar}>
          <Image
            source={require('../assets/images/logo.png')}
            style={Styles.logo}
          />
          <View style={Styles.brandInfo}>
            <Text style={Styles.brandAcr}>OCN</Text>
            <Text style={Styles.brandName}>Osvaldo City News</Text>
          </View>
        </View>
      </View>

      {/* Destaque Principal */}
      <View style={Styles.mainNews}>
          <Image
            source={require('../assets/images/n1.png')}
            style={Styles.mainImage}
          />

          <Text style={Styles.mainTitle}>
            Fogo em Hong Kong destrói complexo residencial
          </Text>

          <Text style={Styles.mainText}>
            Incêndio atingiu um conjunto habitacional com cerca de
            2 mil apartamentos, causando grandes prejuízos.
          </Text>
      </View>

      {/* Notícias secundárias */}
      <View style={Styles.secondarySection}>
        <Text style={Styles.sectionTitle}>Outras notícias</Text>

        <View style={Styles.secondaryCard}>
          <Text style={Styles.secondaryTitle}>
            Operação policial fecha via importante
          </Text>
          <Text style={Styles.secondaryText}>
            Ação ocorreu durante a manhã e afetou o trânsito local.
          </Text>
        </View>

        <View style={Styles.secondaryCard}>
          <Text style={Styles.secondaryTitle}>
            Senado aprova aposentadoria especial
          </Text>
          <Text style={Styles.secondaryText}>
            Projeto beneficia agentes de saúde após anos de discussão.
          </Text>
        </View>
      </View>

      {/* footer  */}
      <View style={Styles.footer}>
        <Text style={Styles.footerTitle}>Osvaldo City News</Text>
        <Text style={Styles.footerText}>
          © 2025 OCN — Osvaldo City News. Acompanhe todas as notícias ao redor do mundo!
        </Text>
      </View>
    </ScrollView>
    
  );
}

const Styles = StyleSheet.create({
  container:{
    backgroundColor: '#f5f5f5',
  },
  
  header:{
    backgroundColor: '#f0dbda'
  },

  topBar:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  logo:{
    width: 40,
    height: 40,
    marginRight: 10,
    margin: 10,
  },

  brandInfo:{
    flexDirection: 'column',
  },
  
  brandAcr:{
    fontSize: 20,
    fontWeight: 'bold',
  },

  brandName:{
    fontSize: 16,
    color: '#555',
  },

  mainNews: {
    padding: 15,
  },

  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },

  mainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  mainText: {
    fontSize: 14,
    marginTop: 5,
  },


  secondarySection: {
    padding: 15,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  secondaryCard: {
    backgroundColor: '#F7DDE2',
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  secondaryTitle: {
    fontWeight: 'bold',
    color: '#D96A8C'
  },

  secondaryText: {
    fontSize: 13,
  },

  footer: {
    backgroundColor: '#f3dfdb', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  footerTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },

  footerText: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
  }

});

export default MenuInicial;