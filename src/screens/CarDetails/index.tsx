import React from "react";
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import { BackButton } from "../../components/BackButton";
import { StatusBar } from "react-native";

import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export function CarDetails() {
  const navigation: NavigationProp<any> = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("Schedule");
  }

  return (
    <Container>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imageUrl={[
            "https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png?fit=around%7C875:492.1875",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory name={"300/km/h"} icon={SpeedSvg} />
          <Accessory name={"3.2s"} icon={AccelerationSvg} />
          <Accessory name={"800 HP"} icon={ForceSvg} />
          <Accessory name={"Gasolina"} icon={GasolineSvg} />
          <Accessory name={"Auto"} icon={ExchangeSvg} />
          <Accessory name={"2 pessoas"} icon={PeopleSvg} />
        </Accessories>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button
          title={"Escolher período do aluguel"}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
