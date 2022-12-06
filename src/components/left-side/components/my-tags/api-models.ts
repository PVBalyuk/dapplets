export interface ITagDataDto {
    data: ITag[],
    success: boolean,
}

export interface ITag {
    id: string;
    name: string;
}