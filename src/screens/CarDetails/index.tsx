import React from "react";
import { Container, Header, CarImages } from "./styles";
import { BackButton } from "../../components/BackButton";
import { StatusBar } from "react-native";

import { ImageSlider } from "../../components/ImageSlider";

export function CarDetails() {
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
    </Container>
  );
}
