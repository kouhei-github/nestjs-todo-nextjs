import { BadRequestException, PipeTransform } from "@nestjs/common";

export class UserPasswordPipe implements PipeTransform {

    readonly notAllowTitle = 8;


    transform(value: string) {

        if(this.isTitleValid(value)) {
            throw new BadRequestException();
        }

        return value;
    }

    private isTitleValid(title: string) {
        return this.notAllowTitle > title.length;
    }

}