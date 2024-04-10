import { Div } from "../../../components/Div/Div"
import "./HowItWorks.css"

export const HowItWorks = () => {
  return (
    <div style={{marginTop: "25px"}}>
        <Div title="How It Works"/>
        <div className="hiw-contain">
            <div className="hiw-card">
                <i className="fa fa-unlock"></i>
                <h2>Create an Account</h2>
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et.</p>
            </div>
            <div className="hiw-card">
                <i className="fa fa-search"></i>
                <h2>Search job</h2>
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et.</p>
            </div>
            <div className="hiw-card">
                <i className="fa fa-save"></i>
                <h2>Save and Apply</h2>
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et.</p>
            </div>
        </div>
    </div>
  )
}
