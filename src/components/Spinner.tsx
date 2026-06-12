import { useState } from "react";
import { type CSSProperties } from "react";
import { ClipLoader } from "react-spinners";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("");

  return (
    <div className="sweet-loading min-h-svh flex  justify-center items-center">
      <button onClick={() => setLoading(!loading)}></button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
      />
     

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    
       
    </div>
  );
}

export default Spinner;