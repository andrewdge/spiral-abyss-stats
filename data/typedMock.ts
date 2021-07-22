import { useRef } from 'react';
import { EElement } from './enums/EElement';
import type { IHero } from './interfaces/IHero';

import { characters } from 'genshin-db';


/** characters like hu tao, kaedehara kazuha now have an _ instead of {space}  */
export const getHeroes = (): IHero[] => {
    const names = characters('names', { matchCategories: true });
    const heroes = names?.map(name => characters(name)!);
    return heroes?.map(hero => ({
        name: hero.name,
        element: hero.element as EElement,
        image: `/images/characters/${(hero.name.toLowerCase()).replace(' ', '_')}.png`,
    }));
}

export const useHeroes = () => {
    const heroesRef = useRef<IHero[]>(getHeroes());
    return heroesRef.current;
}
