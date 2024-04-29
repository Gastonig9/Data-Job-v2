import "./Div.css"

interface DivProps {
    title: string | undefined
}

export const Div = ({ title }: DivProps) => {
  return (
    <div className="div-contain">
        <h2>{title}</h2>
        <div className="one"></div>
        <div className="two"></div>
    </div>
  )
}
