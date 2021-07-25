import "./styles.css";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { PriceList } from "./PriceList";
import { useState } from "react";

export default function App() {
  const [price, setprice] = useState([]);
  const Buyplans = ["Free", "plus", "Pro"];
  return (
    <div className="price">
      <ul>
        {Buyplans.map((Buyplan) => (
          <PriceList>{Buyplan}</PriceList>
        ))}
      </ul>
    </div>
  );
}
