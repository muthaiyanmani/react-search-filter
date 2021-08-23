import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  const brand = [
    "Toyota",
    "Volkswage",
    "BMW",
    "Mercedes-Benz",
    "Ford",
    "Nissan",
    "Honda",
    "Porsche",
    "Hyundai Motors",
    "Renault",
    "Peugeot",
    "Chevrolet",
    "Fiat",
    "Audi",
    "Kia Motors",
    "Suzuki",
    "General Motors",
    "Citroën",
    "Daimler",
    "GMC",
    "JLR",
    "Ferrari",
    "Tata Motors",
    "Mazda",
    "Subaru",
    "Lexus",
    "Volvo",
    "MINI",
    "Vauxhall",
    "Isuzu",
    "Dongfeng Motor",
    "Mitsubishi Motors",
    "Mahindra and Mahindra",
    "Daihatsu",
    "Jeep",
    "Kenworth",
    "Dodge",
    "Cadillac",
    "Chrysler",
    "Skoda",
    "Acura",
    "Infiniti",
    "Buick",
    "Lincoln",
    "RAM Trucks",
    "Maruti Suzuki",
    "Smart",
    "Dacia",
    "FAW",
    "Seat",
  ];

  // fetched Data
  const [data, setData] = useState([]);

  //Search input
  const [searchInput, setSearchInput] = useState("");

  //Brand CheckBox
  const [isChecked, setIsChecked] = useState(
    new Array(brand.length).fill(false)
  );
  const [checkedValue, setCheckedValue] = useState([]);

  // Color Radio Button
  const [colorPicker, setColorPicker] = useState("");

  useEffect(() => {
    fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/cars")
      .then((res) => res.json())
      .then((data) => setData([...data]))
      .catch((err) => console.log(err));
  }, []);

  const handleCheckbox = (position) => {
    const updated = isChecked.map((item, index) =>
      index === position ? !item : item
    );
   
    setIsChecked(updated);

    const updatedValue = updated.map((item, index) =>{
      if(item === true){
        return brand[index]
      }
    });
    setCheckedValue([...updatedValue]);
  };

  console.log(checkedValue);
  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <label htmlFor="search" className="mb-1">
          Search
        </label>
        <div className="col-lg-12">
          <div className="input-group">
            <input
              type="text"
              id="search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3">
          <ul className="list-group">
            <li className="list-group-item list-group-item-dark">Brands</li>
            <li className="list-group-item">
              {brand.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={item}
                        name={item}
                        checked={isChecked[index]}
                        onChange={() => {
                          handleCheckbox(index);
                        }}
                        id={index}
                      />
                      <label className="form-check-label" htmlFor={index}>
                        {item}
                      </label>
                    </div>
                  </Fragment>
                );
              })}
            </li>
          </ul>
          <br />
          <ul className="list-group">
            <li className="list-group-item list-group-item-dark">Color</li>
            <li className="list-group-item">
              {color.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value={item}
                        onChange={(e) => {
                          setColorPicker(item);
                        }}
                        name="flexRadioDefault"
                        id={item}
                      />
                      <label className="form-check-label" htmlFor={item}>
                        {item}
                      </label>
                    </div>
                  </Fragment>
                );
              })}
            </li>
          </ul>
        </div>
        <div className="col-lg-9">
          <div className="justify-content-md-center row">
            {data
              .filter((val) => {
                if (searchInput == "") {
                  return val;
                } else if (
                  val.productName
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                ) {
                  return val;
                }
              })
              .filter(val =>{
                if(checkedValue.length === 0){
                  return val
                // }else if(checkedValue){
                  
                //   checkedValue.map(item => { 
                //     if(item !== undefined){
                //       return val == item
                //     }
                //   })
               }
              })
              .filter((val) => {
                if (colorPicker == "") {
                  return val;
                } else if (val.carColor === colorPicker) {
                  return val;
                }
              })
              .map((item, index) => {
                return (
                  <Fragment key={index}>
                    <Card item={item} />
                  </Fragment>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
