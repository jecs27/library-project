export class CreateBookDTO {
    readonly isbn: number;
    readonly title: string;
    readonly description: string;
    readonly category: number;
    readonly year_published: string;
    readonly publishin_house_id: number;
}