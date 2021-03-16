import { Switch, Route } from "react-router-dom";

import Products from "./components/Products/product";
import Variety from "./components/Variety/variety";
import Checkout from "./components/Checkout/checkout";
import NavBar from "./components/NavBar/navbar";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/product/:id/varieties" exact component={Variety} />
      <Route path="/checkout" exact component={Checkout} />
      <Route
        render={() => (
          <h2 style={{ textAlign: "center" }}>Error 404: page not found</h2>
        )}
      />
    </Switch>
  );
  return (
    <>
      <NavBar />
      {routes}
    </>
  );
};

export default App;
