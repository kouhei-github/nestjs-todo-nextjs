import { BadRequestException, PipeTransform } from "@nestjs/common";

export class UsersScreenNamePipe implements PipeTransform {

    readonly notAllowTitle = "";


    transform(value: string) {

        if(this.isTitleValid(value)) {
            throw new BadRequestException();
        }


        return value;
    }

    private isTitleValid(title: string) {
        return this.notAllowTitle === title;
    }

}