import { cardCategories } from "../../../assets/constants"
import { Div } from "../../../components/Div/Div"
import "./CategoriesView.css"

export const CategoriesView = () => {
  return (
    <div className="category-home-contain">
        <Div title="Popular Category"/>

        <div className="category-contain">
            {cardCategories.map((c, index) => {
                return(
                    <div key={index} className="card">
                        <i className={`${c.icon}`}></i>
                        <h3>{c.name}</h3>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
