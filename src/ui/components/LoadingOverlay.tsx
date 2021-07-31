import React, { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Text } from "../../ui";

const useCreatePortalInBody = () => {
  const wrapperRef = useRef(null);
  if (wrapperRef.current === null && typeof document !== "undefined") {
    const div = document.createElement("div");
    div.setAttribute("data-body-portal", "");
    wrapperRef.current = div;
  }
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || typeof document === "undefined") {
      return;
    }
    document.body.appendChild(wrapper);
    return () => {
      document.body.removeChild(wrapper);
    };
  }, []);
  return (children) =>
    wrapperRef.current && createPortal(children, wrapperRef.current);
};

const LoadingOverlay: React.FC = () => {
  const createBodyPortal = useCreatePortalInBody();
  const OverlayComponent = (
    <OverlayBackground>
      <Text>Kraunasi.....</Text>
    </OverlayBackground>
  );
  return createBodyPortal(OverlayComponent);
};

export default React.memo(LoadingOverlay);

const OverlayBackground = styled.div`
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: #c4a399b5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  backdrop-filter: blur(3px);
`;
