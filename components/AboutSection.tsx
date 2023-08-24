import React from 'react'

const skills = [
    {skill: "JavaScript"},
    {skill: "TypeScript"},
    {skill: "Node.Js"},
    {skill: "Next.Js"},
    {skill: "Tailwind CSS"},
    {skill: "Git"},
    {skill: "MongoDB"},
]

function AboutSection() {
    return (
        <section id='about'>
            <div className='my-12 pb-12 md:pt-2 md:pb-48'>
                <h1 className='text-center font-bold text-1xl'>
                    Technologies that i recently used :
                </h1>
                <div>
                    <div className='flex flex-wrap flex-row justify-center mt-3'>
                        {skills.map((item, idx)=>{
                            return <p 
                            key={idx}
                            className="bg-gray-300 px-4 py-2 mr-2 mt-2 text-gray-900"
                            >
                                {item.skill}
                            </p>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection