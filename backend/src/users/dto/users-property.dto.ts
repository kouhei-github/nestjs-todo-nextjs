import { IsNotEmpty } from "class-validator";

export class UserPropertyDto {
    @IsNotEmpty()
    screenName: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    email: string;

    niokname: string
}