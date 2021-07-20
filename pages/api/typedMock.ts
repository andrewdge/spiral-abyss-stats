import { EElement } from './enums/EElement';
import type { IHero } from './interfaces/IHero';

import { characters } from 'genshin-db';

export const getHeroes = (): IHero[] => {
    const names = characters('names', { matchCategories: true });
    const heroes = names?.map(name => characters(name)!);
    return heroes?.map(hero => ({
        name: hero.name,
        element: hero.element as EElement,
    }));
}
