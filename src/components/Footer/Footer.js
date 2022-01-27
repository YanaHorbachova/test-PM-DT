import { Mobile, Desktop  } from '../../utils/mediaQuery'
import {ReactComponent as Twitter} from '../../icon/twitter.svg'
import {ReactComponent as Linkedin} from '../../icon/linkedin.svg'
import {ReactComponent as Facebook} from '../../icon/facebook.svg'
import {ReactComponent as Instagram} from '../../icon/instagram.svg'
import {ReactComponent as Youtube} from '../../icon/youtube.svg'
import {ReactComponent as Whatsapp} from '../../icon/whatsapp.svg'
import s from './Footer.module.css'


const Footer = () => {
    return (
        <div className={s.Footer}>
            <div className={s.FooterList}>
                <div className={s.list}>
                    <h3 className={s.title}>Другое</h3>
                    <ul className={s.items}>
                        <li>Про Нас</li>
                        <li>Блог</li>
                    </ul>
                </div>
                <div className={s.list}>
                    <h3 className={s.title}> Сотрудничество с нами </h3>
                    <ul className={s.items}>
                        <li>Реклама на сайте</li>
                        <li>Партнерская программа</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className={s.SocialList}>
                    <ul className={s.SocialList}>
                        <li className={s.SocialItem}><a href=" "><Twitter/></a></li>
                        <li className={s.SocialItem}><a href=" "><Linkedin/></a></li>
                        <li className={s.SocialItem}><a href=" "><Facebook/></a></li>
                        <li className={s.SocialItem}><a href=" "><Instagram/></a></li>
                        <li className={s.SocialItem}><a href=" "><Youtube/></a></li>
                        <li className={s.SocialItem}><a href=" "><Whatsapp/></a></li>
                    </ul>
                </div>
            </div>   
            <Desktop>        
                <div className={s.FooterOther}>
                    <ul>
                        <li className={s.text}>Privacy Policy</li>
                        <li className={s.text}>© 2021 All rights reserved</li>
                        <li className={s.text}>Terms of Use</li>
                    </ul>
                </div>
            </Desktop> 
            <Mobile>
                <div className={s.FooterOther}>
                    <ul>
                        <li className={s.text}>Privacy Policy</li>
                        <li className={s.text}>Terms of Use</li>
                        <li className={s.text}>© 2021 All rights reserved</li>
                    </ul>
                </div>
            </Mobile>
            

        </div>
)};

export default Footer;