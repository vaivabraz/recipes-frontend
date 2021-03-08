import styled from "styled-components";

import { Colors } from "../constants";
import { Layout, Row, Text } from "../ui";

export default function Planner() {
  return (
    <Layout>
      Cia bus: 1. aplinka kaupti uzrasams, prideti kelis default uzrasus su
      saltiniias (pvz kiek laiko kepti skirtingas darzoves )
      <Text type={"h1"} text={'headline h1 - "39.06px"'} />
      <Text type={"h2"} text={'headline h2 - "31.25px"'} />
      <Text type={"h3"} text={'headline h3 - "25px"'} />
      <Text type={"h4"} text={'headline h4 - "20px"'} />
      <Text type={"h5"} text={'headline h5 - "16px"'} />
      <Text type={"body1"} text={'body 1  - "16px"'} />
      <Text type={"body2"} text={'body 2  - "14px"'} />
      <Text type={"subtitle1"} text={'subtitle1 - "16px"'} />
      <Text type={"subtitle2"} text={'subtitle2   - "14px"'} />
      <Text type={"button"} text={'button - "14px"'} />
      <Text type={"caption"} text={'caption- "10px"'} />
      <Row>
        <ColorSample color={Colors.AccentColor} />
        <Text text="Colors.AccentColor -> " />
        <Text text={Colors.AccentColor} />
      </Row>
      <Row>
        <ColorSample color={Colors.Background} />
        <Text text="Colors.Background -> " />
        <Text text={Colors.Background} />
      </Row>
      <Row>
        <ColorSample color={Colors.BackgroundLight} />
        <Text text="Colors.BackgroundLight -> " />
        <Text text={Colors.BackgroundLight} />
      </Row>
      <Row>
        <ColorSample color={Colors.Border} />
        <Text text="Colors.Border -> " />
        <Text text={Colors.Border} />
      </Row>
      <Row>
        <ColorSample color={Colors.BorderDarker} />
        <Text text="Colors.BorderDarker -> " />
        <Text text={Colors.BorderDarker} />
      </Row>
      <Row>
        <ColorSample color={Colors.DarkGrey} />
        <Text text="Colors.DarkGrey -> " />
        <Text text={Colors.DarkGrey} />
      </Row>
      <Row>
        <ColorSample color={Colors.ShadowNude} />
        <Text text="Colors.ShadowNude -> " />
        <Text text={Colors.ShadowNude} />
      </Row>
      <Row>
        <ColorSample color={Colors.Text} />
        <Text text="Colors.Text -> " />
        <Text text={Colors.Text} />
      </Row>
      <Row>
        <ColorSample color={Colors.errorsRed} />
        <Text text="Colors.errorsRed -> " />
        <Text text={Colors.errorsRed} />
      </Row>
    </Layout>
  );
}

const ColorSample = styled.div`
  height: 6rem;
  width: 6rem;
  background-color: ${(props) => props.color};
  border: 1px ${Colors.Border} solid;
`;
