import "./SearchBar.css";
import { countries } from "../../assets/constants";
import { CSeachBarProps } from "../../models/search.model";
import { useState } from "react";

export const SearchBar: React.FC<CSeachBarProps> = ({
  forHeaderHome = false,
  forOther = false,
}) => {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  console.log(country)

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
            <input type="text" placeholder="Buscar empleo..." />
            <select value={country} onChange={handleCountryChange}>
              <option value="">Selecciona un país</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <select value={category} onChange={handleCategoryChange}>
              <option value="">Selecciona una categoría</option>
              {/* Aquí puedes agregar las opciones de categorías cuando estén disponibles */}
            </select>
            <button type="submit">Buscar</button>
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
