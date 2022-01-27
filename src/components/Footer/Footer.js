import { Mobile, Desktop } from '../../utils/mediaQuery';
import SocialList from '../SocialList/SocialList';

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
                <SocialList/>
            </div>   
            <Mobile>
                <div className={s.FooterOther}>
                    <ul>
                        <li className={s.text}>Privacy Policy</li>
                        <li className={s.text}>Terms of Use</li>
                        <li className={s.text}>© 2021 All rights reserved</li>
                    </ul>
                </div>
            </Mobile>
            <Desktop>        
                <div className={s.FooterOther}>
                    <ul>
                        <li className={s.text}>Privacy Policy</li>
                        <li className={s.text}>© 2021 All rights reserved</li>
                        <li className={s.text}>Terms of Use</li>
                    </ul>
                </div>
            </Desktop> 
        </div>
)};

export default Footer;