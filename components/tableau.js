import { useEffect, useRef } from 'react'
import tableau from "tableau-api-js"

const Tableau = () => {
    const ref = useRef(null)
    const vizUrl = "https://public.tableau.com/views/SpiralStats/SpiralUsage?:language=en-US&:display_count=n&:origin=viz_share_link"
    let viz;
    
    function initTableau (){
        viz && viz.dispose();
        const options = {
            height: "1000px",
            width: "100vw",
            device:"phone"
        };
        viz = new window.tableau.Viz(ref.current, vizUrl, options);    }
     useEffect(() => {
        initTableau();
    },[])
    

    return (
        <div className='max-h-screen h-screen'>
            <div className='max-w-full max-h-screen w-100 h-screen flex place-content-center'>
                <div ref={ref} className='scale-[.70] -translate-y-32'></div>
                {/* -translate-x-32 -translate-y-48 */}
            </div>
        </div>
    );  
}

export default Tableau;
