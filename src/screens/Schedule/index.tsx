import React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateValue,
  DateTitle,
  DateValueText,
  Content,
  Footer,
} from "./styles";
import { BackButton } from "../../components/BackButton";
import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export function Schedule() {
  const theme = useTheme();
  const navigation: NavigationProp<any> = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails");
  }
  return (
    <Container>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={"transparent"}
      />
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueText>02/08/2021</DateValueText>
            <DateValue selected={false} />
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueText>12/08/2021</DateValueText>
            <DateValue selected={false} />
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title={"confirmar"} onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
