import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";

import { Container, Header, TotalCars, HeaderContent } from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

export function Home() {
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
    </Container>
  );
}
