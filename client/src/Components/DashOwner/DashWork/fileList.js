import FileCard from "./fileCard";


function List({file}){

    
    return (
        <div style={{display:"flex", justifyContent:'space-between' , flexWrap:"wrap"}}  >
      {{fileName: file.name, filePath: `/uploads/${file.name}`}.map(file=> <FileCard file={file}/>)}
        </div>
    )
}
export default List 