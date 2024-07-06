import "./block.css"

const Block = ({ img, children }) => {
    return ( 
        <div style={{
            height: 400,
            width: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
            borderRadius: 20
        }}
        className="block"
        >
            <h1 style={{color: "white"}}>{children}</h1>
        </div>
     );
}
 
export default Block;
