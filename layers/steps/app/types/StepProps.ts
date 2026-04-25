export interface Props<T extends string | number | boolean = string> {
    initialValue?: T;
    name: string;
}
