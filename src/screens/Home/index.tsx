import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import api from "../../services/api";
import { CarDTO } from "../../dtos/carDTO";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";
import { Car } from "../../components/Car";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Load } from "../../components/Load";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation: NavigationProp<any> = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchCar().then();
  }, []);

  return (
    <Container>
      {Platform.OS === "ios" ? (
        <SafeAreaView style={{ backgroundColor: theme.colors.header }} />
      ) : null}
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
}
