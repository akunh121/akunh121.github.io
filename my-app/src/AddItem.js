import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export function AddItem(user) {
  
  const submitHandler = (e) => {
    e.preventDefault();
    let Products = JSON.parse(localStorage.getItem("products"));
    console.log(e);
    const ProductName = e.target[0].value;
    console.log(ProductName);
    const ProductType = e.target[1].value;
    console.log(ProductType);
    const ProductPrice = e.target[2].value;
    console.log(ProductPrice);
    const Image = e.target[3].value;
    console.log(Image);
    

    
    Products.push({"id": (Products.length).toString(), "type": ProductType, "name": ProductName, "price": ProductPrice, "picture": Image, "Quanity": "1"});
    localStorage.setItem("products", JSON.stringify(Products));
    alert("המוצר נוסף בהצלחה")

  }
  const navigate = useNavigate();
  useEffect(() => {
    if (user.access != "admin") navigate("/");
    return null;
  }, []);
  return (
    <form onSubmit={submitHandler}>
      <div className="form-innerr">
        <h2>הוספת מוצר</h2>
        
        <div className="form-group">
          
         
        </div>
        <div className="form-group">
          <label htmlFor="email">שם המוצר</label>
          <input type="name" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="type" style={{    margin: "10px"}}>קטגוריה</label>
          <br />
            
          <select id="type">
                <option value="עוגיות">עוגיות</option>
                <option value="גלידה">גלידה</option>
                <option value="עוגת יום הולדת">עוגת יום הולדת</option>
                <option value="מאפים מלוחים">מאפים מלוחים</option>
                <option value="מאפים מתוקים">מאפים מתוקים</option>
               
            </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">מחיר המוצר</label>
          <input type="price" name="price" id="price" />
        </div>
        <div className="form-group">
        <label htmlFor="image">הוספת תמונה</label>
          <input type="image " name="image " id="image " />
          </div>
        <input type="submit" value="התחברות" />
      </div>
    </form>
  );
}
