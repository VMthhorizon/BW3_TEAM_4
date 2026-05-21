import { Col, Container, Row } from "react-bootstrap";
import Card1SidebarSx from "../pagina home/sidebarSxHome/card1SidebarSx";
import getProfilePersonaleAction from "../../redux/actions/profileAction/profiloPersonal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterAdCard from "../pagina profilo/SidebarRightProfilo/components/FooterAdCard";
import CentralNotifiche from "./CentralNotifiche";

const Notifiche = function () {
  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfilePersonaleAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="my-4">
      <Row>
        {/* sidebar sinistra */}
        <Col xs={12} lg={3} className="mb-2">
          <div className="sticky-sidebar">
            <Card1SidebarSx profilo={profilo} />
          </div>
        </Col>

        {/* feed centrale */}
        <Col xs={12} lg={6}>
          <CentralNotifiche />
        </Col>

        {/* sidebar destra */}
        <Col xs={12} lg={3}>
          <FooterAdCard />
        </Col>
      </Row>
    </Container>
  );
};
export default Notifiche;
