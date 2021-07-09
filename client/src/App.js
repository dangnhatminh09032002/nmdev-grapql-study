import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Lauches from "./components/Lauches";

import "./App.css";
import logo from "./css/SpaceX-White-Logo.wine.svg";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img
          src={logo}
          alt="SpaceX"
          width={350}
          height={50}
          style={{ display: "block", margin: "0 auto" }}
        />
        <Lauches />
      </div>
    </ApolloProvider>
  );
}

export default App;
