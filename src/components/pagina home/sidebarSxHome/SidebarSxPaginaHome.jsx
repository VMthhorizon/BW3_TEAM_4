import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import getProfilePersonaleAction from "../../../redux/actions/profileAction/profiloPersonal";
import Card1SidebarSx from "./card1SidebarSx";
import Card2SidebarSx from "./Card2SidebarSx";
import Card3SidebarSx from "./Card3Sidevasx";

const SideBarSxPaginaHome = () => {
  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfilePersonaleAction());
  }, []);

  if (!profilo) return null;
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={2}>
          <Card1SidebarSx profilo={profilo} />
          <Card2SidebarSx />
          <Card3SidebarSx />
        </Col>
      </Row>
    </Container>
  );
};
export default SideBarSxPaginaHome;
