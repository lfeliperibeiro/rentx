import React from "react";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
}

export function Button({ title, color, enabled = true, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      color={color ? color : theme.colors.main}
      enabled={enabled}
      style={{ opacity: enabled ? 1 : 0.5 }}
    >
      <Title>{title}</Title>
    </Container>
  );
}
