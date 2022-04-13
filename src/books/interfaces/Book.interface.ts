import { Document } from 'mongoose';

export interface Book extends Document{
    readonly id?: number;
    readonly isbn: number;
    readonly title: string;
    readonly description: string;
    readonly category: number;
    readonly year_published: string;
    readonly publishin_house_id: number;
    readonly createAt: Date;
}