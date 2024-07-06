import Examples from "./examples";
import Prew from "./prew";
import ImageCarousel from "./Slider";

const Scoup = () => {
    return ( 
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 100
        }}>
            <Prew />
            <ImageCarousel />
            <Examples />
        </div>
     );
}
 
export default Scoup;