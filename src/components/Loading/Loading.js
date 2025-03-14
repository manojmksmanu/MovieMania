import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
};

function Loader({ setLoader }) {
    let [loading, setLoading] = useState(setLoader);
    let [color, setColor] = useState("#ffffff");

    return (
      <div style={{width:"100vw",height:"90vh",display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="sweet-loading">
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
}

export default Loader;