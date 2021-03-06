import { useEffect, useRef, useState } from 'react'
import eye from '../pictures/eye.png'
import { useNavigate } from 'react-router-dom';



export function Profileinfo({props}) {


    const [newphone, setnewphone] = useState(props.currentuser ? props.currentuser.phone : null)
    const [newemail, setnewemail] = useState(props.currentuser ? props.currentuser.email : null)
    const [newpassword, setnewpassword] = useState(props.currentuser ? props.currentuser.password : null)
    const [confirmpassword, setconfirmpassword] = useState('')
    const [pas, setpas] = useState(false)
    const [showpass, setshowpass] = useState(false)
    const [changed, setchanged] = useState(false)
    const [newcolor, setnewcolor] = useState('')
    const [toglecolor, settoglecolor] = useState(false)
    const {curentuserupdate, setcurentuserupdate} = props.update
    const {setfavorite} = props.setfavorite

    const phoneref = useRef()
    const emailref = useRef()
    const passwordref = useRef()
    const confirmpasswordref = useRef()


    const nav = useNavigate()



    // console.log(props.users)


    function submit(e) {

        e.preventDefault()

        const find = props.users.find(item => item.email === newemail && item.id !== props.currentuser.id)

        // console.log(find)
        
        if(newcolor) {
            setcurentuserupdate(!curentuserupdate)
            props.currentuser.color = newcolor
            window.scroll(0, 0)
            setchanged(true)
            setTimeout(() => {
                setchanged(false)
            }, 2000);
            console.log('color')
            setnewcolor('')
            settoglecolor(false)
        }


        if(newphone && newemail && newpassword) {

            if(newphone && newphone !== props.currentuser.phone) {
                props.currentuser.phone = newphone
                window.scroll(0, 0)
                setchanged(true)
                phoneref.current.style.borderColor = 'green'
                setTimeout(() => {
                    setchanged(false)
                }, 2000);    
            console.log('phone')
            }
            if(newemail && !find && newemail !== props.currentuser.email) {
                props.currentuser.email = newemail
                window.scroll(0, 0)
                setchanged(true)
                emailref.current.style.borderColor = 'green'
                emailref.current.placeholder = '??????????????????'
                setTimeout(() => {
                    setchanged(false)
                }, 2000); 
            console.log('email')

            }
            if(newpassword && confirmpassword && newpassword === confirmpassword && newpassword !== props.currentuser.password) {
                props.currentuser.password = newpassword
                window.scroll(0, 0)
                setchanged(true)
                passwordref.current.style.borderColor = 'green'
                passwordref.current.placeholder = '??????????????????'
                setconfirmpassword('')
                setTimeout(() => {
                    setchanged(false)
                }, 2000); 
                console.log('password')
            }


        }


        if(!newphone) {
            setnewphone('')
            phoneref.current.style.borderColor = 'red'
            phoneref.current.placeholder = '???????????? ????????????????????????'
        }

        if(!newemail) {
            setnewemail('')
            emailref.current.style.borderColor = 'red'
            emailref.current.placeholder = '???????????? ????????????????????????'
        }

        if(find) {
            emailref.current.style.borderColor = 'red'
            emailref.current.placeholder = '???????????????????????? ?????????????????? ???????????? ???????????????????????????????????????'
            setnewemail('')
          }

        if(!newpassword) {
            setnewpassword('')
            passwordref.current.style.borderColor = 'red'
            passwordref.current.placeholder = '???????????? ????????????????????????'
        }

        if(!confirmpassword && showpass) {
            setconfirmpassword('')
            confirmpasswordref.current.style.borderColor = 'red'
            confirmpasswordref.current.placeholder = '???????????? ????????????????????????'
        }

        if(newpassword && confirmpassword && newpassword !== confirmpassword) {
            setconfirmpassword('')
            confirmpasswordref.current.style.borderColor = 'red'
            confirmpasswordref.current.placeholder = '???????????????????????? ?????? ???????????????????????? ???????????????????????????'
            setnewpassword('')
            passwordref.current.style.borderColor = 'red'
            passwordref.current.placeholder = '???????????????????????? ?????? ???????????????????????? ???????????????????????????'
        } else if(props.currentuser.password === newpassword) {
            setshowpass(false)
        } 

    }




    return (


          
        <form className='profileinfo-par' onSubmit={(e) => submit(e)}>
  
        <div className='profile-info-par'>

            <p className='profile-maintitle'>?????????????????? ????????????????????????????????? ?????????????????????????????????</p>

              {
                  changed ?
                  <p className='profilechanged'>?????????????????????????????? ???????????????????????????</p>
                  : null
              }


            <div className='profile-img-par'>
                <div style={{backgroundColor : newcolor ? newcolor : props.currentuser.color}} className='profile-img'>{props.currentuser.firstname}</div>
                <div className='profile-change-par'>
                <p onClick={() => settoglecolor(!toglecolor)} className='profile-change'>??????????????? ??????????????????</p>
                {
                    toglecolor ?
                    <input value={'#4ed1e6'} className='colorpicker' onChange={(e) => setnewcolor(e.target.value)} type="color" />
                     : null
                }
                </div>
            </div>



            <div className='profile-inputs'>
                <p className='profile-input-title'>??????????????????????????? ??????????????????</p>
                <div className='profile-input-par'>
                <input ref={phoneref} onChange={(e) => setnewphone(e.target.value)} value={newphone} className='profile-input' type="number" />
                </div>
            </div>

            <div className='profile-inputs'>
                <p className='profile-input-title'>??????-???????????????</p>
                <div className='profile-input-par'>
                <input ref={emailref} onChange={(e) => setnewemail(e.target.value)} value={newemail} className='profile-input' type="text" />
                </div>
            </div>

            <div onFocus={() => !showpass ? setshowpass(!showpass) : null} className='profile-inputs'>
                <p className='profile-input-title'>??????????????????</p>
                <div className='profile-input-par'>
                <input ref={passwordref} onChange={(e) => setnewpassword(e.target.value)} value={newpassword} className='profile-input' type={pas ? 'text' : 'password'} />
                <img onClick={() => setpas(!pas)} className='profile-eye' src={eye} alt="visibility" />
                </div>
            </div>

            {
                showpass ? 

               <div className='profile-inputs'>
                <p className='profile-input-title'>?????????????????????????????? ??????????????????</p>
                <div className='profile-input-par'>
                <input ref={confirmpasswordref} onChange={(e) => setconfirmpassword(e.target.value)} value={confirmpassword} className='profile-input' type={pas ? 'text' : 'password'} />
                <img onClick={() => setpas(!pas)} className='profile-eye' src={eye} alt="visibility" />
                </div>
               </div>

               : null

            }



            <button type='submit' className='profile-button'>?????????????????????</button>


        </div>

        </form>


    )
}