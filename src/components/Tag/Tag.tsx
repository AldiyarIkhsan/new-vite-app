import './Tag.css'

type Props = {
    title:string;
    color: string
    onClick?:()=>void
}
function Tag (props:Props) {
    const {title, color, onClick} = props;
    return <div className="tag" style={{background: color}} onClick={onClick}>{title}</div>
}

export default Tag