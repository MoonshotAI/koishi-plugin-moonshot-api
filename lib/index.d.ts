import { Context, Schema } from 'koishi';
export declare const name = "moonshot-api";
export interface Config {
    name: string;
    apiKey: string;
    apiAddress: string;
    model: string;
    temperature: number;
    maxTokens: number;
    topP: number;
    frequencyPenalty: number;
    presencePenalty: number;
    stop: string[];
    errorMessage: string;
    triggerWord: string;
    pictureMode: boolean;
}
export declare const Config: Schema<Config>;
export declare function apply(ctx: Context, config: Config): Promise<void>;
