import React from 'react';

const About = () => {
    return (
        <div className="py-16 bg-white">
             <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                 <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                     <div className="md:5/12 lg:w-5/12">
                         <img
                             src="https://tailus.io/https://www.bing.com/images/search?view=detailV2&ccid=bSJCkwST&id=BFA7424A25B335A8B9FBA5762AB5C0CD9D3DF1A0&thid=OIP.bSJCkwSTavqQtHod3SakqAHaEK&mediaurl=https%3a%2f%2fwww.atulhost.com%2fwp-content%2fuploads%2f2017%2f10%2fblog.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6d22429304936afa90b47a1ddd26a4a8%3frik%3doPE9nc3AtSp2pQ%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=image+blog&simid=608019232427756594&FORM=IRPRST&ck=57E4512729AD405446EBCCE1686DD048&selectedIndex=2&itb=0/blocks/left-image/preview/images/startup.png"
                             alt="image"
                         />
                     </div>
                     <div className="md:7/12 lg:w-6/12">
                         <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                             React development is carried out by passionate developers
                         </h2>
                         <p className="mt-6 text-gray-600">
                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                             accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                             aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                         </p>
                         <p className="mt-4 text-gray-600">
                             Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                             Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                         </p>
                     </div>
                 </div>
             </div>
         </div>
    );
}

export default About;
