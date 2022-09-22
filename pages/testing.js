import { useState } from "react";
import calculateCosts from "../libs/calculator";

export default function Testing() {
  const [value, setValue] = useState(undefined);
  return (
    <div className="text-white">
      <div>
        <button
          className="border border-green-500 rounded-md p-4"
          onClick={() => setValue(calculateCosts(9000, 1.39, 1.0, 0.6, 1.0, ["AA", "VE", "GM", "PCI", "SCA", "SVD", "CCTV"], 1.05, 6, "DRO + CI"))}
        >
          Calculadora
        </button>
        <pre>{value && JSON.stringify(value, null, 2)}</pre>
      </div>
    </div>
  );
}
