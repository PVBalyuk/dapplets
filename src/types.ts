export enum DirectionFilter {
    ASC = 'ASC',
    DESC = 'DESC'
}

export type Filter = {
    property: string;
    values: string;
}

export type Sort = {
    property: string;
    direction: DirectionFilter;
}

export interface IGetDuppletsParams {
    start: number;
    filter: Filter;
    sort: Sort
}