import Form from "../component/Form";
import Logo from "../component/Logo";
import List from "../component/List";
import { useState } from "react";

function Home() {
  const [update, setUpdate] = useState(false);
  return (
    <div className="app">
      <Logo />
      <Form setUpdate={setUpdate} />
      <List update={update} setUpdate={setUpdate} />
    </div>
  );
}
export default Home;
