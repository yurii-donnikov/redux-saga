import { Navigate, Route, Routes } from "react-router-dom";
import Container from "../container/Container";
import NavMenu from "../NavMenu/NavMenu";
import { Path } from "../../Path/Path";

function MainRoutes() {
  return (
    <Container>
      <main>
        <Routes>
          <Route path={Path.weather} element={<NavMenu />} />
          <Route path="/" element={<Navigate replace to={Path.weather} />} />
        </Routes>
      </main>
    </Container>
  );
}

export default MainRoutes;
