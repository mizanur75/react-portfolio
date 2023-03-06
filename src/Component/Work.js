import "./Work.css";
import ProjectCard from "./ProjectCard";

import workData from "./WorkData";

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {
                    workData.map((val, i)=>{
                        return(
                            <ProjectCard
                                key={i}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                text={val.text}
                                view={val.view}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};


export default Work;