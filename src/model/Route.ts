import { Grade } from './Grade'
import { Tag } from './Tag'
import { Wall } from './Wall'

export interface Route{
    name?: string;
    grade?: Grade;
    tag?: Tag[];
    wall?: Wall;
}