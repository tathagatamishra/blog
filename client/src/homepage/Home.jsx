import React, { useEffect, useState } from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://blogity-blog.vercel.app/all");
      const jsonData = await response.json();
      setData(jsonData.data);
    };

    fetchData();
  }, []);

  if (data) {
    return (
      <div className="components">
        <NavLink to="/create-blog" style={{ textDecoration: "none" }}>
          <div className="addCard addCard__secondary">
            <IonIcon icon={add} />
          </div>
        </NavLink>

        {data.map((e, i) => {
          return (
            <NavLink key={i} to="/blog" style={{ textDecoration: "none" }}>
              <div  className="card card__secondary">
                <h2>{e.title}</h2>
                <p>{e.content}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    );
  }
}
