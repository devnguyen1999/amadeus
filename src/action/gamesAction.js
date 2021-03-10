import { FECTH_GAME, FILER_GAME_BY_TYPE, ORDER_GAME, SEARCH_GAME } from "./type";
export const  fetchGames = () => async(dispacth) => {
    const res = await fetch("http://amadeuss.herokuapp.com/products");
    const data = await res.json();
    dispacth({
        type: FECTH_GAME,
        payload: data,
    })
}
export const filterGamesByType = (games, type) => (dispacth) =>{
    dispacth({
        type: FILER_GAME_BY_TYPE,
        payload: {
            type: type,
            items: type ===""? games : games.filters(x => x.category.indexOf(type) >= 0)
        }
    })
}
export const sortGames =(filteredGame, sort) => (dispacth) => {
    const sortedGames = filteredGame;
    if(sort === "") {
        sortedGames.sort((a,b) => (a.id > b.id ? 1 : -1));
    }
    else if(sort === "highest") {
        sortedGames.sort((a,b) => (a.price < b.price ? 1 : -1 ));
    }
    else {
        sortedGames.sort((a,b) => (a.price > b.price ? 1 : -1));
    }
    dispacth({
        type: ORDER_GAME,
        payload: {
            items: sortedGames
        }
    })
}
export const searhGames = (filteredGame, searchKey) => (dispacth) => {
    const games = filteredGame;
    let resultList = [];
    games.forEach(item => {
        if(item.name.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())){
            resultList.push(item);
        }
    })
    if(resultList.length === 0) {
        resultList = games;
    }
    dispacth({
        type: SEARCH_GAME,
        payload: resultList
    })
}