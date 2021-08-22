import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Card from './components/Card/Card';
import { useEffect } from "react";
import { getInfo } from "./store/acyncAction/getInfo";
import style from './App.module.css';


function App() {
  const data = useSelector(state => state.topReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo({ lang: 'all', pages: 10 }));
  }, [dispatch]);

  return (
    <div className="App">
      <Header></Header>
        {
          data.length > 0
            ? <div className={style.content}>{data[0].items.map((item, id) => {
              return <Card item={item} key={'card_' + id}></Card>;
            })}</div>
            : <div>Загрузка...</div>
        }
    </div>
  );
}

export default App;
