import RestroCard from "./RestroCard";
import restroList from "../utils/dummyData";

const BodyComponent =()=>{
    return (
     <div className="restro-list">
      {
        restroList.map((restro) => {        
          return <RestroCard restaurants={restro} key={restro.info.id}/>
        })
      }
    </div>
    )
  }

  export default BodyComponent;