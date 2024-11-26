import React, { useEffect, useState } from "react";
import { Card } from "./Card";



const Fetch = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        console.log(json); 
        setData(json); 
      })
      .catch((error) => console.error("Error:", error));
  }, []); 
  console.log (data)
  return (
    <div className="flex flex-wrap justify-center mx-1 my-2 w-full">
      {data.length > 0 ? (data.map((item, index) => (
          <Card
            id={item.id}
            key={index}
            img={item.image}
            Harga={item.price}
            Tittle={item.title}
            category={item.category}
          />
        ))
      ) : (
        <h2>Loading data...</h2> 
      )}
    </div>
  );
}

export default Fetch;
