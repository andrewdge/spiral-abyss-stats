import { useEffect, useRef, useState } from 'react'
import tableau from "tableau-api-js"

const Tableau = () => {
    const ref = useRef(null)
    const vizUrl = "https://public.tableau.com/views/SpiralStats/SpiralUsage?:language=en-US&:display_count=n&:origin=viz_share_link"
    let viz;
    
    function initTableau (){
        viz && viz.dispose();
        const options = {
            //has to be 100% so tableau would resize automatically based  on iframe dimensions
            height: "100%",
            width: "100%"
        };
        viz = new window.tableau.Viz(ref.current, vizUrl, options);   
     }
     useEffect(() => {
        initTableau();
    },[])

    

    return (
        <div className='h-[70rem] lg:min-h-[120vh] pt-12 md:pt-0 px-4 md:px-0'>
            <div className='md:scale-75 w-full h-full flex place-content-center md:px-0'>
                <div ref={ref} className='w-full flex place-content-center max-w-[1400px] min-h-[100%]'></div>
                {/* -translate-x-32 -translate-y-48 */}
            </div>
        </div>
    );  
}

export default Tableau;
