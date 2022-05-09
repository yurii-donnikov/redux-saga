import style from "./style.module.scss";
import MainRoutes from "./components/MainRoutes/MainRoutes";

function App() {
  return (
    <div className={style.App}>
      <MainRoutes />
    </div>
  );
}

export default App;
