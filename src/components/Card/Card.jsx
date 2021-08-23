import style from './Card.module.css';
import img from '../../img/stars.png';

const Card = ({ item }) => {
    return (
        <div className={style.card}>
            <h4 className={style.card_title}>{item.name}</h4>
            <div className={style.card_img}><img src={item.owner['avatar_url']} alt="" /></div>
            <h3 className={style.card_language}>Languages:
                {
                    item.language
                        ? item.language
                        : "language not specified"
                }
            </h3>
            <div>Description:</div>
            <div className={style.card_description}>{item.description}</div>
            <h6>Owner login: {item.owner.login}</h6>
            <h6 className={style.card_stars}> 
                <div className={style.card_stars_img}><img src={img} alt="" /></div>
                <div className={style.card_stars_num}>{item['stargazers_count']}</div>
            </h6>
            <a className={style.card_href} href={item['html_url']} target="_blank">Go to repository →</a>
        </div>
    )
}

export default Card;