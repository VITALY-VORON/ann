import i1 from "../assets/Rectangle 25.png";
import i2 from "../assets/Rectangle 26.png";
import i3 from "../assets/Rectangle 27.png";
import i4 from "../assets/Rectangle 28.png";
import i5 from "../assets/Rectangle 29.png";
import i6 from "../assets/Rectangle 30.png";
import Block from "./block";

const Examples = () => {
    return ( 
        <div style={{
            display: "flex",
            justifyContent: "center",
            padding: 50
        }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "100px",
            }}>
                <Block children={<span>собери свой букет </span>} img={i1} />
                <Block children={<span>Открытки</span>} img={i2} />
                <Block children={<span>в коробочке</span>} img={i3} />
                <Block children={<span>в корзиночке</span>} img={i4} />
                <Block children={<span>дополнительно</span>} img={i5} />
                <Block children={<span>отзывы</span>} img={i6} />
            </div>
        </div>
     );
}
 
export default Examples;
