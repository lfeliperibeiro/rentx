import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";

import { Container, Header, TotalCars, HeaderContent } from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";
import { Car } from "../../components/Car";

export function Home() {
  const carDataOne = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png?fit=around%7C875:492.1875",
  };

  const carDataTwo = {
    brand: "Porshe",
    name: "Huracan",
    rent: {
      period: "Ao dia",
      price: 340,
    },
    thumbnail:
      "https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png?fit=around%7C875:492.1875",
  };

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
      <Car data={carDataOne} />
      <Car data={carDataTwo} />
    </Container>
  );
}
