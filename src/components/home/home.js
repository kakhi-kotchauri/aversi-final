import './home.css'
import { useState, useEffect } from 'react'
import cart from './pictures/cart.png'
import calendar from './pictures/calendar.png'
import doctor from './pictures/doctor.png'
import pill from './pictures/pill.png'
import eye from './pictures/eye.png'
import stick from './pictures/stick.png'
import cosmetic from './pictures/cosmetic.png'
import feeder from './pictures/feeder.png'
import sanit from './pictures/sanit.png'
import group from './pictures/group.png'
import bag from './pictures/bag.png'
import tray from './pictures/tray.png'
import salad from './pictures/salad.png'
import phone from './pictures/s22.png'
import play from './pictures/play.png'
import apple from './pictures/apple.png'
import right from './pictures/arrow-right.png'
import left from './pictures/arrow-left.png'



export function Home(props) {

    // console.log(props.data)

    const [productarr, setproductarr] = useState([])
    const [start, setstart] = useState(0)
    const [end, setend] = useState(4)

    useEffect(() => {

      
    function promise(data) {
        return new Promise(resolve => {
           resolve(data)
        })
     }
  
     async function getdata() {
        await promise(props.data)
        .then(data => {
           setproductarr(data.slice(start, end))
        })
    }

    getdata()

    }, [props.data, start, end])


    function moveright() {
        if(end < props.data.length) {
            setstart(start + 4)
            setend(end + 4)
        }
    }

    function moveleft() {
        if(start > 0) {
            setstart(start - 4)
            setend(end - 4)
        }
    }
    

    return (
    <div>

      <div className='banner-wrapper'>
        <div className='banner'></div>
        <h1 className='ban-text'>შექმენით თქვენი პირადი სააფთიაქო თარო</h1>
        <button className='button'>გაიგეთ მეტი..</button>
      </div>



     <div className='slot-wrapper-par'>
      <div className='slot-wrapper'>

        <div className='slot'>
         <img className='slot-img' src={cart} alt="cart" />
         <p className='p1'>შეუკვეთე ონლაინ</p>
         <p className='p2'>ჩამოტვირთეთ ავერსის მობილური აპლიკაცია ან ისარგებლეთ გლოვოს მიტანის სერვისით</p>
        </div>  

        <div className='slot'>
         <img className='slot-img' src={calendar} alt="cart" />
         <p className='p1'>ექიმთან ჩაწერა</p>
         <p className='p3'>ნუ გადადებ ექიმთან ვიზიტს შორეულ მომავალზე, ჩაეწერე ონლაინ დღესვე</p>
        </div>  

        <div className='slot'>
         <img className='slot-img' src={doctor} alt="cart" />
         <p className='p1'>მტრედი ბარათი</p>
         <p className='p4'>დააგროვე ბონუსები და ამავე დროს შეიძინე პროდუქცია ფასდაკლებით</p>
        </div>  

      </div>
      </div>


    <section className='live-product-par'>

    <div className='product-head-wrapper'>
              <p className='product-head-p'>ლიდერები გაყიდვაში</p>
              <div className='arrow-wrapper'>
                 <img onClick={moveleft} className='arrows' src={left} alt="left" /> 
                 <img onClick={moveright} className='arrows' src={right} alt="right" /> 
              </div>
          </div>

      <div className='live-product'>

        {
            productarr? 
            productarr.map((item, index) => {
                return(
                  <div key={index} className='product-slot'>
                      <div className='picture-wrapper'>
                        <img className='product-img' src={item.img} alt="item-pic" />  
                      </div>
                      <p className='product-title'>{item.title}</p>
                      <p className='product-category'>{item.Category}</p>
                      <div className='price-wrapper'>
                         <p className='price'>{item.price} ლარი</p> 
                         <button className='buy'>ყიდვა</button>
                      </div>

                  </div>
                )
            })
            : <div>no</div>
        }
      </div>

      </section>


      <div className='catalog-title'>პროდუქციის კატალოგი</div>
      <div className='catalog-par'>
      <div className='catalog'>

        <div className='catalog-slot'>
            <img className='catalog-img' src={pill} alt="pill" />
            <p className='catalog-p'>წამლები</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={cosmetic} alt="pill" />
            <p className='catalog-p'>კოსმეტიკა</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={feeder} alt="pill" />
            <p className='catalog-p'>საბავშვო კვება</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={stick} alt="pill" />
            <p className='catalog-p'>ორთოპედია</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={eye} alt="pill" />
            <p className='catalog-p'>ოპტიკა</p>
        </div>  

            <div className='catalog-slot'>
            <img className='catalog-img' src={sanit} alt="pill" />
            <p className='catalog-p'>ჰიგიენა</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={tray} alt="pill" />
            <p className='catalog-p'>დიაგნოსტიკა</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={bag} alt="pill" />
            <p className='catalog-p'>პირველადი დახმარება</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={salad} alt="pill" />
            <p className='catalog-p'>ბალახეული</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={group} alt="pill" />
            <p className='catalog-p'>სხვა</p>
        </div>    

      </div>
    </div>


    <div className='ad'>
       <img className='phone' src={phone} alt="phone" />
       <div className='left-text'>
           <h2 className='left-text-h2'>ჩამოტვირთე ავერსის მობილური აპლიკაცია</h2>
           <p className='left-text-p'>შეიძინე პროდუქცია სახლიდან გაუსვლელად</p>
           <p className='left-text-p'>გაეცანი სრული პროდუქციის კატალოგს</p>
           <p className='left-text-p'>შეამოწმე ქულები მტრედი ბარათზე</p>
           <p className='left-text-p'>იხილე აფთიაქებისა და კლინიკების მისამართები</p>
           <div className='store-par'>
               <img className='store' src={apple} alt="apple" />
               <img className='store' src={play} alt="play" />
           </div>
       </div>
    </div>

    
    </div>

    )
}