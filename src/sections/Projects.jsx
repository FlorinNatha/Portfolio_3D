import { Suspense, useState } from "react";
import { myProjects } from "../constants"
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import ErrorBoundary from "../components/ErrorBoundary";



const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const [fullScreenImage, setFullScreenImage] = useState(null);

  const currentProject = myProjects[selectedProjectIndex]; 
  
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
        if(direction === 'previous') {
            return prevIndex === 0 ? projectCount -1 : prevIndex -1;
        } else {
            return prevIndex === projectCount -1 ? 0 : prevIndex +1
        }
    })
  }

  return (
    <section className="c-space my-20">
        <p className="head-text">My Work</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 shadow-2xl shadow-black-200">
                <div className="absolute top-0 right-0 pointer-events-none">
                    <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl opacity-30" />
                </div>

                <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg relative z-10" style={currentProject.logoStyle}>
                    <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
                </div>

                <div className="flex flex-col gap-5 text-white-600 my-5 relative z-10">
                    <p className="text-white text-2xl font-semibold animatedText">{selectedProjectIndex + 1}. {currentProject.title}</p>
                    <p className="animatedText">{currentProject.desc}</p>
                    <p className="animatedText">{currentProject.subdesc}</p>
                </div>

                {currentProject.images && (
                    <div className="flex gap-3 my-2 relative z-10 overflow-x-auto w-full pb-2 custom-scrollbar">
                        {currentProject.images.map((imgSrc, idx) => (
                            <img 
                                key={idx} 
                                src={imgSrc} 
                                alt={`screenshot ${idx + 1}`} 
                                className="h-24 sm:h-32 object-contain rounded-lg border border-black-300 shadow-md bg-black-200 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => setFullScreenImage(imgSrc)}
                            />
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-between flex-wrap gap-5">
                    <div className="flex items-center gap-3">
                        {currentProject.tags.map((tag, index) => (
                            <div key={index} className="tech-logo">
                                <img src={tag.path} alt={tag.name} />
                            </div>
                        ))}
                    </div>
                    <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
                        <p>{currentProject.href.includes('github') ? 'Check GitHub Repo' : 'Check Live Site'}</p>
                        <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
                    </a>
                </div>

                <div className="flex justify-between items-center mt-7">
                    <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                        <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
                    </button>
                    <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                        <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                    </button>
                </div>
            </div>

        
        <div className="border border-black-300 gb-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
                <ambientLight intensity={Math.PI} />
                <directionalLight position={[10,10,5]} />

                <Center>
                    <Suspense fallback={<CanvasLoader />}>
                        <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                            <ErrorBoundary fallback={null}>
                                <DemoComputer texture={currentProject.texture} />
                            </ErrorBoundary>
                        </group>
                    </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI / 2}/>
            </Canvas>
        </div>
                
        </div>

        {fullScreenImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setFullScreenImage(null)}>
                <div className="relative max-w-7xl max-h-[90vh]">
                    <button 
                        className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
                        onClick={() => setFullScreenImage(null)}
                    >
                        &times;
                    </button>
                    <img src={fullScreenImage} alt="Fullscreen screenshot" className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl" />
                </div>
            </div>
        )}
    </section>
  )
}

export default Projects
