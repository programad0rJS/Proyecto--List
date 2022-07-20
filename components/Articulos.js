import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Image
  // TextInput,
} from "react-native";


const Articulos = () => {
  const [coins, setCoins] = useState([]);


  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ff35c2" />


      <FlatList
        style={styles.list}
     
      data={coins}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerItem}>
              <View style={styles.coinName}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.containerNames}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.textSymbol}>{item.symbol}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.textPrice}>${item.current_price}</Text>
                <Text
                  style={[
                    styles.pricePercentage,
                    item.price_change_percentage_24h > 0
                      ? styles.priceUp
                      : styles.priceDown,
                  ]}
                >
                  {item.price_change_percentage_24h.toFixed(2)}%
                </Text>
              </View>
            </View>
          )
        }}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    alignItems: "center",
  },

 
  list: {
    width: "90%",
  },
 
  containerItem: {

    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
 
  textPrice: {
   
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
                           
    textTransform: "uppercase",
  },
});

export default Articulos;