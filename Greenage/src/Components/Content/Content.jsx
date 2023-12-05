import React from 'react'

export const Content = () => {
    return (
        <div className=" h-auto lg:h-screen bg-white ">
            <div className="text-3xl md:text-4xl font-semibold py-20 text-center">We Build Tools For the Web</div>
            <div className="grid justify-items-center lg:flex  lg:mx-32 gap-12">
            <div className=" h-96 lg:-m-8 w-64 shadow-2xl">
                <img src="https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg?size=338&ext=jpg" alt="web" />
                <h3 className="text-lg text-center font-semibold">Web Designing</h3>
                <h5 className="text-sm text-gray-500 p-2">Web design encompasses many different skills and disciplines in the production and maintenance of websites. </h5>
            </div>
            <div className="h-96 lg:m-6 w-64 shadow-2xl">
                <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg" alt="web" />
                <h3 className="text-lg text-center py-3 font-semibold">Search engine optimization</h3>
                <h5 className="text-sm text-gray-500 p-4">Search engine optimization is the process of improving the quality and quantity of website traffic
                 to a website or a web page from search engines </h5>
            </div>
            <div className="h-96 lg:m-10 w-64 shadow-2xl">
                <img className="p-2" src="https://cdni.iconscout.com/illustration/premium/thumb/software-and-hardware-solutions-for-cryptocurrency-mining-3327891-2793795.png" alt="web" />
                <h3 className="text-lg text-center p-2 font-semibold">social media marketing</h3>
                <h5 className="text-sm text-gray-500 p-3">Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. .</h5>
            </div>
            <div className="h-96 w-64 shadow-2xl">
                <img src="https://www.roughglazemedia.com/wp-content/uploads/2021/01/istockphoto-1072179256-612x612-1.jpg" alt="web" />
                <h3 className="text-lg text-center p-2 font-semibold">Graphic design</h3>
                <h5 className="text-sm text-gray-500 p-3">Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography </h5>
            </div>

            </div>
        </div>
    )
}
