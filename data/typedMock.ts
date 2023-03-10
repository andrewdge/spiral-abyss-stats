import HeroesFile from './heroes.json'


export const loadData = () => JSON.parse(JSON.stringify(HeroesFile));

/** characters like hu tao, kaedehara kazuha now have an _ instead of {space}  */
// export const getHeroes = () => {
//     // const names = characters('names', { matchCategories: true });
//     // const heroes = names?.map(name => characters(name)!);
//     // return heroes?.map(hero => ({
//     //     name: hero.name,
//     //     element: hero.element as EElement,
//     //     image: `/images/characters/${(hero.name.toLowerCase()).replace(' ', '_')}.png`,
//     // }));
//    return HeroesFile;
    
// }




export const useSpecificHero = (hero: string) => {
    const name = hero.toLowerCase();
    const heroesList = HeroesFile;
    return heroesList.find( hero => hero.name.toString().toLowerCase() === name);
}