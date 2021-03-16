import React , {useState} from 'react'
import {FaArrowLeft ,FaArrowRight} from 'react-icons/fa'
import { courses , sale } from '../../dummyData/courses'
import useWindowSize from '../../customHooks/useWindowSize'
import {useDispatch ,useSelector} from 'react-redux'
import {setAlert} from '../../redux/actions/alertActions'
import {addToCart} from '../../redux/actions/cartActions'

const  CourseSlider = () => {
    const [ courseCount , setCourseCount ] = useState(0)
    const [courseSliderAnimate , setCourseSliderAnimate] = useState("course-slider__courses")

    const {cart} = useSelector((state) => state.cartReducer)
    const cartAdd = (item) => {
        dispatch(addToCart(cart ,item))
    }
    
    const { width } = useWindowSize();
    
    let showCourses = 3

    if(width <= 596) showCourses = 2;

    let courseCopy = [...courses]

    const dispatch = useDispatch()
    
//     courseCopy.push({
//         title : 'See More Courses' ,
//         price:' varies',
//         author : 'our authors',
//         img : require('../../images/books.jpg').default, //default added
//         position: 99999999,
//         id : 99999999
//    })

    
    const changeCourseCountForward = (e) => {
        e.stopPropagation()
        setCourseSliderAnimate('course-slider__courses course-slider__slideout')
        setTimeout(() => {
            setCourseCount(courseCount + showCourses)
            setCourseSliderAnimate('course-slider__courses course-slider__slidin')
            } ,150)
    }

    const changeCourseCountBack = (e) => {
        e.stopPropagation()
        setCourseSliderAnimate('course-slider__courses course-slider__slideout-right')
        setTimeout(() => {
            setCourseCount(courseCount - showCourses)
            setCourseSliderAnimate('course-slider__courses course-slider__slidein-right')
            } ,150)
    }

   const courseList = courseCopy.map(el => (
       <div key = {el.position} className = "course-slider__course">
           <img className = "course-slider__course--img"
            src = {el.img}
            alt = {el.name} />
            <div className = "course-slider__course--bottom">
                <div className ="course-slider__course--bottom--title">{el.title}</div>
                {/* <div className ="course-slider__course--bottom--author">by : {el.author}</div> */}

                { el.saleOptIn && sale ? <div className ="course-slider__course--bottom--price">
                 <span className = "course-slider__course--bottom--strike"> Ksh{el.price}</span>
                 Sale Ksh{el.price * sale}
                  </div>
                :
                <div className ="course-slider__course--bottom--price">Price Ksh{el.price}</div> 
                }

                {el.position === 99999999 ? <div /> :
                    <div className = "course-slider__course--bottom--buttons" >
                        <input className = "course-slider__course--bottom--button1"
                        type = "submit"
                        value = 'add to cart' 
                        onClick = {() => cartAdd(el)}
                        />
                        
                        <div  className = 'course-slider__course--bottom--button2' >
                            <a href="https://wa.me/0722882815"  className = 'course-slider__course--bottom--button2--link '>
                                <img src = 'imgs/whatsapp-medium.png' alt='whatsapp' className = 'course-slider__course--bottom--button2--image'/> 
                            </a>
                            <a href="https://wa.me/0722882815" className = 'course-slider__course--bottom--button2--link '>
                            <p className = 'course-slider__course--bottom--button2--paragraph'>Contact to Buy</p>
                            </a>
                        </div>
                        
                    </div>
                }
            </div>
       </div>
   ))
    
    let activeList = []
    showCourses === 3 ? activeList = [ courseList[courseCount] , courseList[courseCount + 1]  , courseList[courseCount + 2]] : activeList= [courseList[courseCount] , courseList[courseCount + 1]]

    console.log(courseList)

    return (
        <div className = "course-slider">
            <div className = "course-slider__title">Our Cuisines</div> 
            <div className = "course-slider__underline" />

            <div className = "course-slider__container" >
                { courseCount === 0 ? <div />  : <div className = "course-slider__course--back"
                onClick = {(e) => changeCourseCountBack(e)}>
                <FaArrowLeft/></div> } 
                
                <div className = {courseSliderAnimate}>{activeList}</div>

                { courseCount + showCourses >= courseCopy.length ? <div /> : 
                <div className = "course-slider__course--forward"
                onClick = {(e) => changeCourseCountForward(e)}><FaArrowRight/></div> }

            </div>
        </div>
    )
    
}

export default CourseSlider
