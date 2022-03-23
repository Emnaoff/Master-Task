import { useSelector } from "react-redux";
import Card from "./card";

function List(){

    const members = useSelector(state=>state.memberReducer.memberList)
    return (
        <div style={{display:"flex", justifyContent:'space-between' , flexWrap:"wrap"}}  >
      {members.map(el=> <Card el={el}/>  )}
        </div>
    )
}
export default List 