import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Periscope for accountants

  return (
    <div className="App">
         <div className=""></div>
      <section className=" home-page">
        <div className="title">
     <img src="http://edconsulting-rks.com/wp-content/uploads/2022/04/cropped-EDLogo.png" alt="ED Consulting" width={200} />
     <h2>Accounting & Tax Services</h2>
     <h1>ED CONSULTING</h1>
     <p>Invest your time and efforts on running your business. Leave the accounting to me</p>
     </div>
     <button>Contact</button>
      </section>
      <section className="about-us"></section>

      <section className="services"></section>
      <section className="contact"></section>
    </div>
  );
}

export default App;
