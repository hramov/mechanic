import { Property } from './../database/entities/property.entity';

export default (target: Property): Property => {
    return Object.assign(new Property(), target);
}