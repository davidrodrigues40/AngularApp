export enum FilterTypes {
    Color,
    Body,
    Title,
    Framework
}
export class Filter {
    type: FilterTypes;
    value: string;
}
