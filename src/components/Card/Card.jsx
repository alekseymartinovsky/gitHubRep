import style from './Card.module.css';

const Card = ({item}) => {
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
            <p>Description: {item.description}</p>
            <h6>Owner login: {item.owner.login}</h6>
            <h6>Stars: {item['stargazers_count']}</h6>
            <a className={style.card_href} href={item['html_url']} target="_blank">Go to repository</a>
        </div>
    )
}

export default Card;