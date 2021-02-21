import { Layout } from "../ui";
import { Row, Column } from "../ui";
import styled from "styled-components";

export default function About() {
  return (
    <Layout>
      <Row style={{ backgroundColor: "red" }}>
        <StyledColumn>
          <p>
            asdasd -- 1 --- ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd
            ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl
            fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl fhksd
            fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf
            asdasd ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf
          </p>
        </StyledColumn>

        <StyledColumn>
          <p>
            asdasd -- 2 ---ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd
            ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl
            fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl fhksd
            fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf
            asdasd ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf
            f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl
            fhksd fls;df; sflhf{" "}
          </p>
        </StyledColumn>

        <StyledColumn>
          <p>
            asdasd -- 3 --- ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd
            ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl
            fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl fhksd
          </p>
        </StyledColumn>

        <StyledColumn>
          <p>
            asdasd -- 4 ---ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd
            ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl
            fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl fhksd
            fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf
            asdasd ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf
            f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl
            fhksd fls;df; sflhf{" "}
          </p>
        </StyledColumn>
        <StyledColumn>
          <p>
            asdasd -- 5 ---ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd
            ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl
            fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl fhksd
            fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf{" "}
          </p>
        </StyledColumn>

        <StyledColumn>
          <p>
            asdasd -- 6 ---ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd
            ssdhksdhf f hjsl fs sflhf asdasd ssdhksdhf f hjsl fsfhskl fhksd
            fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf
            asdasd ssdhksdhf f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf
            f hjsl fsfhskl fhksd fls;df; sflhf asdasd ssdhksdhf f hjsl fsfhskl
            fhksd fls;df; sflhf{" "}
          </p>
        </StyledColumn>
      </Row>
    </Layout>
  );
}

const StyledColumn = styled(Column).attrs(() => ({
  small: 12,
  medium: 4,
  large: 2,
}))``;
