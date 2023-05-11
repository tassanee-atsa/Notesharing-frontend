import { useNavigate } from "react-router-dom";
export default function Title ({className}) {
    let navigate = useNavigate();
    async function HomeLink() {
        navigate("/");
      }
    return (
        <div className={className} onClick={() => HomeLink()}  >
            <h1>NOTEBOOK</h1>
        </div>
    )    
};
