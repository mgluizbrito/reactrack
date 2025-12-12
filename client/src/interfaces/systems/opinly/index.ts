export interface IOpinionData {
    id: string;
    title: string;
    body: string;
    userName: string;
    votes: number;
}

export interface IEnteredValues {
    title: string;
    body: string;
    userName: FormDataEntryValue | string; 
}

export interface IFormState {
    errors: string[] | null;
    enteredValues?: IEnteredValues; 
}