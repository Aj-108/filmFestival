import React from 'react'
import ImageCard2 from '../modals/ImageCard2'
import image1 from '../Assets/committe/steering/1.png'
import image2 from '../Assets/committe/steering/2.png'
import image3 from '../Assets/committe/steering/3.png'
import image4 from '../Assets/committe/steering/4.png'
import image5 from '../Assets/committe/steering/5.png'
import image6 from '../Assets/committe/steering/6.png'
import image7 from '../Assets/committe/steering/7.png'
import image8 from '../Assets/committe/steering/8.png'
import image9 from '../Assets/committe/steering/9.png'
import image10 from '../Assets/committe/steering/10.png'
import image11 from '../Assets/committe/steering/11.png'
import image12 from '../Assets/committe/steering/12.png'
import image13 from '../Assets/committe/steering/13.png'
import image14 from '../Assets/committe/steering/14.png'
import image15 from '../Assets/committe/steering/15.png'
import image16 from '../Assets/committe/steering/16.png'
import pic1 from '../Assets/backgroundPics/back1.png'


function SteringContent() {
  return (
    <div className='str'>
        <div className="backPic">
            <div className="picTray">
                <img src={pic1} alt="asasa" className='backPic'/>
                <img src={pic1} alt="asasa" className='backPic2'/>
            </div>
            <img src={pic1} alt="asasa" className='backPic3'/>
            <img src={pic1} alt="asasa" className='backPic4'/>
        </div>
        <div className="container-lg str__container">
            <div className="row str__row">
                <div className="col str__col " align='center'>
                    <div className="str__colorStrap">
                        <h1 className="str__heading"> Steering Members </h1>
                    </div>
                </div>
            </div>

            <div className="row str__row">
                <div className="col-lg-3 col-md-6 str__col">
                    <ImageCard2 name={'Bhagat Singh Koshyari'} designation='Governor of Maharashtra' bgcolor={'green'} img1={image1}/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
               
                <ImageCard2 name={'Pushkar Singh Dhami'} designation='Chief Minister of Uttrakhand' bgcolor={'green'} img1={image3}/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
                <ImageCard2 name={'Anurag Thakur'} designation='Minister of Youth Affairs and Sports of India' bgcolor={'green'} img1={image2}/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
                <ImageCard2 name={'Devendra Fadnavis'} designation='Deputy Cheif Minister of Maharashtra' bgcolor={'green'} img1={image5}/>
                </div>
            </div>

            <div className="row str__row">
                <div className="col-lg-3 col-md-6 str__col">
                    
                    <ImageCard2 name={'Ashok Kumar, IPS'} designation='DGP Uttrakhand' bgcolor={'green'} img1={image4}/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
                <ImageCard2 name={'Shweta Shalini'} designation='BJP Spokesperson of Maharashtra' bgcolor={'green'} img1={image6}/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
                <ImageCard2 name={'Satpal Maharaj'} designation='Tourism Minister of Uttrakhand' bgcolor={'green'} img1={image7} loadinng='lazy'/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
                <ImageCard2 name={'Premchand Aggarwal'} designation='Minister of Finance of Uttrakhand' bgcolor={'green'} img1={image8}/>
                </div>
            </div>
            <div className="row str__row">
                <div className="col-lg-3 col-md-6 str__col">
                    <ImageCard2 name={'Dhan Singh Rawat'} designation='Minister of Health,Edu. and Coporative of Uttarkhand' bgcolor={'green'} img1={image10}/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
                <ImageCard2 name={'Subod Uniyal'} designation='Aggriculture Minister of Uttrakhand' bgcolor={'green'} img1={image11}/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
                <ImageCard2 name={'Rekha Arya'} designation='Cabinet Minister of Women and Child Welfare of Uttrakhand' bgcolor={'green'} img1={image9}/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
                <ImageCard2 name={'Ganesh Joshi'} designation='Minister of Soldier Welfare,Agri. and Rural Development of Uttrakhand' bgcolor={'green'} img1={image12}/>
                </div>
            </div>
            <div className="row str__row">
                <div className="col-lg-3 col-md-6 str__col">
                    <ImageCard2 name={'Chandan Ram Das'} designation='Member of the Uttrakhand Legislative Assembly' bgcolor={'green'} img1={image13}/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
                <ImageCard2 name={'Saurabh Bahuguna'} designation='Member of the Uttrakhand Legislative Assembly' bgcolor={'green'} img1={image14}/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
                <ImageCard2 name={'Manoj Tiwari'} designation='Member of Parliament' bgcolor={'green'} img1={image15}/>
                </div>
                <div className="col-lg-3 col-md-6 str__col">
                <ImageCard2 name={'Ravi Kishan'} designation='Member of Parliament' bgcolor={'green'} img1={image16}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SteringContent