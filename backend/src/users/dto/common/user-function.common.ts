import {Injectable} from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserFunctionCommon {
    passwordValidate(password: string): boolean {
        let flag = true;
        if(password.length < 6) {
            flag = false
        }
        return flag
    }

    async hash(password: string): Promise<string> {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }

    async isCorrectPassword(
        password: string,
        hashedPassword: string
    ) :Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword)
    }
}