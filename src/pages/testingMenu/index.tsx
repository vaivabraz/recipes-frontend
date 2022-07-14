import React from "react";
import { HSpace, Row, Link, PrivatePage } from "../../ui";

export default function testingMenu() {
  //TODO: show only in dev env
  return (
    <PrivatePage withMenu>
      <h3>test menu page</h3>
      <Row>
        <Link href="/testingMenu/Columns" title="Receptai" bold />
        <HSpace width={2} />
      </Row>
    </PrivatePage>
  );
}
