import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getInfo } from '../../store/acyncAction/getInfo';
import { cleanData } from '../../store/topReducer';
import style from './Header.module.css';

const Header = () => {
    const languages = [
        { name: 'all' },
        { name: 'python' },
        { name: 'javascript' },
        { name: 'java' },
        { name: 'c#' },
        { name: 'c' },
        { name: 'c++' },
        { name: 'php' },
        { name: 'r' },
        { name: 'swift' },
        { name: 'ruby' },
        { name: 'go' },
    ]

    const numberCard = [10, 20, 50, 100];

    const dispatch = useDispatch();

    const [settings, setSettings] = useState({ lang: languages[0].name, pages: numberCard[0] });

    const changeLang = (e) => {
        setSettings({ ...settings, lang: e.target.value });
    }

    const changePage = (e) => {
        setSettings({ ...settings, pages: e.target.value });
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log('qorls');
        dispatch(cleanData([]));
        dispatch(getInfo(settings));
    }

    return (
        <div className={style.header}>
            <h1 className={style.header_title}>Github Viewer</h1>
            <div className={style.header_menu}>
                <form className={style.header_menu_form} onSubmit={handleSumbit}>
                    <div className={style.header_form_cell}>
                        <p className={style.form_title}>Choose the languages:</p>
                        <select className={style.header_select} value={settings.lang} onChange={changeLang}>
                            {languages.map((lang) => <option key={'lang_' + lang.name} value={lang.name}>{lang.name}</option>)}
                        </select>
                    </div>
                    <div className={style.header_form_cell}>
                        <p className={style.form_title}>Choose the number of project:</p>
                        <select className={style.header_select} value={settings.pages} onChange={changePage}>
                            {numberCard.map((number) => <option key={'num_' + number} value={number}>{number.toString()}</option>)}
                        </select>
                    </div>
                    <div className={style.header_form_cell}>
                        <button className={style.header_form_button} type="sumbit">Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Header;