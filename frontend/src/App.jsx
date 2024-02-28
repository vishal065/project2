import { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [arr, setarr] = useState([]);
  const [r, setremark] = useState("");
  let c = document.querySelector("#input2");
  let d = document.querySelector("#mytext");

  const submit = async (e) => {
    e.preventDefault();
    let b = document.querySelector(".input1");
    let res = await axios.get(`/api/configurations/${b.value}`);
    setarr(res.data[0].data);
  };

  const clickme = async (e) => {
    e.preventDefault();
    await axios
      .put(`/api/configurations/${c.value}`, `/api/configurations/${d.value}`)
      .then((resp) => console.log(resp));
  };

  return (
    <>
      <div className="main mb-2 mt-4">
        <input type="text" className="input1" />
        <button className="ml-4" onClick={submit}>
          submit
        </button>
      </div>

      <div className="box mt-12">{arr.at(0)}</div>
      <div className="box mt-2">{arr.at(1)}</div>
      <div className="box mt-2">{arr.at(2)}</div>
      <div className="box2 flex flex-col gap-4">
        <input className="input2" id="input2" type="text" />
        <textarea
          id="mytext"
          onChange={(e) => setremark(e.target.value)}
          rows="4"
          cols="50"
        ></textarea>
        <button className="ml-4" onClick={clickme}>
          clickme
        </button>
        <p>{r}</p>
      </div>
    </>
  );
}

export default App;
