import { Degrees } from './Degrees'
import { Center } from './Center'
import { Route } from './Route'

export interface Wall{
    degrees?: Degrees;
    center?: Center;
    Routes?: Route[];
}