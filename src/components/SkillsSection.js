import React from 'react';

const SkillsSection = () =>{
    return(

        <section className="skillSection">
                
            <div className="wrap spacetop-2em">
                <div className="image-header spacetop">
                    <h1>
                        <div className=" personalImg pImage" alt="Personal Image"></div>
                        <div className="otherPageCartoon cImage" alt="Cartoon Image"> </div>
                    
                    </h1>

                    <div className="html-content">
                        <SkillsBar/>
                    </div>
                </div>
            </div>

        
        </section>
    )
}

export default SkillsSection;