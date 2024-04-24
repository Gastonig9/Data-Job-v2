/* eslint-disable @typescript-eslint/no-explicit-any */
import "./SearchBar.css";
import { countries, categories, seniority } from "../../assets/constants";
import { CSeachBarProps } from "../../models/search.model";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SearchBar: React.FC<CSeachBarProps> = ({
  forHeaderHome = false,
  forOther = false,
}) => {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [senior, setsenior] = useState("")

  const handleSeniorityChange = (event: any) => {
    setsenior(event.target.value)
  }

  const handleCountryChange = (event: any) => {
    setCountry(event.target.value);
  };

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
  };

  return (
    <>
      {forHeaderHome && (
        <form className="form-search-header">
          <div className="info-contain">
          <select value={senior} onChange={handleSeniorityChange}>
              <option value="">Select a seniority</option>
              {seniority.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <select value={country} onChange={handleCountryChange}>
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <select value={category} onChange={handleCategoryChange}>
              <option value="">Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <Link to={`/filter?category=${category}&country=${country}&seniority=${senior}`}>
              <button type="submit">Buscar</button>
            </Link>
          </div>
        </form>
      )}
      {forOther && (
        /* Aquí puedes agregar cualquier otro contenido o formulario que necesites */
        <form>{/* Otros campos o componentes aquí */}</form>
      )}
    </>
  );
};
