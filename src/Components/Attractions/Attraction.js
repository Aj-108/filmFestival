import React from 'react'
import Banner from '../modals/Banner'
import Navbar from '../modals/Navbar'
import Card from './Card'
import Footer from '../modals/Footer'
import './Attraction.css'
import Logo from '../modals/Logo'
import pic1 from '../Assets/attraction/1.jpg'
import pic2 from '../Assets/attraction/2.jpg'
import pic3 from '../Assets/attraction/3.jpg'
import pic4 from '../Assets/attraction/4.jpg'
import pic5 from '../Assets/attraction/5.jpg'
import pic6 from '../Assets/attraction/6.jpg'
import pic7 from '../Assets/attraction/7.jpg'
import pic8 from '../Assets/attraction/8.jfif'
import pic9 from '../Assets/attraction/9.jpg'
import pic10 from '../Assets/attraction/10.jpg'

function Attraction() {
  return (
    <div  className='attraction'>
        <Logo/>
        <Navbar/>
        <Banner/>


        <div className="container-lg my-5" aling='center'>
            <div className="row" align='center'>
                <div className="col">
                <h1 className="attraction__heading"> Places to visit nearby </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 my-2">
                <Card topImg={pic1} name={'Kempty Falls'} bodyText={"Kempty Falls is a waterfall in Ram Gaon and at the south of Kempty, in the Tehri Garhwal District of Uttarakhand, India. The Kempty Falls, and the area around is surrounded by high mountain ranges at an altitude of 4500 feet. Kempty Falls were developed as a tourist destination by British officer John Mekinan, around 1835. The name Kempty is probably derived from the word 'camp-tea'. "}/>
                </div>
                <div className="col-lg-4 col-md-6 my-2">
                <Card topImg={pic2} name={'Dhanaulti'} bodyText={"Dhanaulti is a quiet hill station at an elevation of 2286 meters above sea level, it offers panoramic views of the lofty Himalayas.Dhanaulti is a paradise for the ones seeking nature and privacy. Its pristine beauty will rejuvenate your mind body and soul.The pleasant weather, woodee slopes, beautiful views of the snow-capped peaks of the Himalayas adds peace and tranquility for the people visiting Dhanaulti."}/>
                </div>
                <div className="col-lg-4 col-md-6 my-2">
                    <Card topImg={pic3} name={'Sahasradhara'} bodyText={"Sahasradhara, meaning thousandfold spring, is one of the most popular tourist destinations located in Dehradun in Uttarakhand state of India. It lies on 30.387231 latitude and 78.131606 longitude. This place is situated on the banks of the small river, Kali Gad which a tributary of Song River. The place has magnificent beauty of nature where water drips from the limestone stalactites, making the water abundant in sulpur and thus the place is known for its sulphur springs."}/>
                </div>
            </div>

            <div className="row my-3">        
            </div>
            <div className="row my-3">
                <div className="col-lg-4 col-md-6 my-2">
                    <Card topImg={pic4} name={'mussorie'} bodyText={"Mussoorie is a hill station and a municipal board, near Dehradun city in the Dehradun district of the Indian state of Uttarakhand. It is about 35 kilometres (22 mi) from the state capital of Dehradun and 290 km (180 mi) north of the national capital of New Delhi. The hill station is in the foothills of the Garhwal Himalayan range. The adjoining town of Landour, which includes a military cantonment, is considered part of 'greater Mussoorie', as are the townships of Barlowganj and Jharipani."}/>
                </div>
                <div className="col-lg-4 col-md-6 my-2">
                    <Card topImg={pic5} name={'rishikesh'} bodyText={"Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of the Indian state Uttarakhand. It is situated on the right bank of the Ganges River and is a pilgrimage town for Hindus, with ancient sages and saints meditating here in search of higher knowledge. There are numerous temples and ashrams built along the banks of the river.It is known as the 'Gateway to the Garhwal Himalayas' and 'Yoga Capital of the World'. The city has hosted the annual 'International Yoga Festival' on the first week of March since 1999."}/>
                </div>
                <div className="col-lg-4 col-md-6 my-2">
                    <Card topImg={pic6} name={'kedarnath'} bodyText={"One of the most revered temple destinations of India, Kedarnath town is nestled in the mighty Garhwal Himalayas, about 3,583 m (11,755 ft) above sea level near the Chorabari Glacier, which is the source of the Mandakini river.The Kedarnath temple, dedicated to Lord Shiva, is a part of Char Dham pilgrimage circuit, and is one of the 12 Jyotirlingas of Lord Shiva in India. The town is flanked by snow-capped peaks, most prominently the Kedarnath Mountain. "}/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-lg-4 col-md-6 my-2">
                    <Card topImg={pic7} name={'badrinath'} bodyText={"Badrinath is a town and nagar panchayat in Chamoli district in the state of Uttarakhand, India. A Hindu holy place, it is one of the four sites in India's Char Dham pilgrimage and is also part of India's Chota Char Dham pilgrimage circuit. It gets its name from the Badrinath Temple.The Badrinath temple is the main attraction in the town. According to legend, Adi Shankaracharya discovered a black stone image of Lord Badrinarayan made of Shaligram stone in the Alaknanda River. He originally enshrined it in a cave near the Tapt Kund hot springs."}/>
                </div>
                <div className="col-lg-4 col-md-6 my-2">
                    <Card topImg={pic8} name={'yamunotri'} bodyText={"Yamunotri, also Jamnotri, is the source of the Yamuna River and the seat of the Goddess Yamuna in Hinduism. It is situated at an altitude of 3,293 metres (10,804 ft) in the Garhwal Himalayas and located approximately 150 kilometers (93 mi) North of Uttarkashi, the headquarters of the Uttarkashi district in the Garhwal Division of Uttarakhand, India. It is one of the four sites in India's Chhota Char Dham pilgrimage. The sacred shrine of Yamunotri, source of the river Yamuna, is the westernmost shrine in the Garhwal Himalayas, perched atop a flank of Bandar Poonch Parvat. "}/>
                </div>
                <div className="col-lg-4 col-md-6 my-2">
                    <Card topImg={pic9} name={'gangotri'} bodyText={"Gangotri is a town and a Nagar Panchayat (municipality) in Uttarkashi district in the state of Uttarakhand, India. It is 99 km from Uttarkashi, the main district headquarter. It is a Hindu pilgrim town on the banks of the river Bhagirathi – the origin of the river Ganges. The town is located on the Greater Himalayan Range, at a height of 3,100 metres (10,200 ft). According to popular Hindu legend, Goddess Ganga descended here when Lord Shiva released the mighty river from the locks of his hair."}/>
                </div>
            </div>
            <div className="row my-3" align='center'>
                <div className="col-lg-4 col-md-6 my-2">
                    <Card topImg={pic10} name={'har ki pauri'} bodyText={`Har Ki Pauri is a famous ghat on the banks of the Ganges in Haridwar in the Indian state of Uttarakhand. This revered place is the major landmark of the holy city of Haridwar. Literally, "Har" means "God", "Ki" means " 's " and "Pauri" means "steps". Lord Vishnu is believed to have visited the Brahmakund in Har Ki Pauri in the Vedic times.It is believed that it is the precise spot where the Ganges leaves the mountains and enters the plains. The ghat is on the west bank of Ganges canal through which the Ganges is diverted just to the north.`}/>
                </div>
            </div>
        </div>

        <Footer/>

    </div>
  )
}

// badrinath kedarnath yamnotri gangotri mana  ramjhula laksham jhula jim corbett national park nanital mussorie auli joshimhat tumbnath 

export default Attraction