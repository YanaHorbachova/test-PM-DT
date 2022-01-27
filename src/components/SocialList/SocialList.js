import {ReactComponent as Twitter} from '../../icon/twitter.svg'
import {ReactComponent as Linkedin} from '../../icon/linkedin.svg'
import {ReactComponent as Facebook} from '../../icon/facebook.svg'
import {ReactComponent as Instagram} from '../../icon/instagram.svg'
import {ReactComponent as Youtube} from '../../icon/youtube.svg'
import {ReactComponent as Whatsapp} from '../../icon/whatsapp.svg'

import s from './SocialList.module.css'


const SocialList = () => {
    return (
        <div>
            <ul className={s.SocialList}>
                <li className={s.SocialItem}><a href=" "><Twitter/></a></li>
                <li className={s.SocialItem}><a href=" "><Linkedin/></a></li>
                <li className={s.SocialItem}><a href=" "><Facebook/></a></li>
                <li className={s.SocialItem}><a href=" "><Instagram/></a></li>
                <li className={s.SocialItem}><a href=" "><Youtube/></a></li>
                <li className={s.SocialItem}><a href=" "><Whatsapp/></a></li>
            </ul>
        </div>
    )};

export default SocialList;