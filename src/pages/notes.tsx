import { Layout, Text } from "../ui";

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
    </Layout>
  );
}
