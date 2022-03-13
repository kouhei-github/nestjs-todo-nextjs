import {Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./users.entity";
import {Repository} from "typeorm";
import {UserPropertyDto} from "./dto/users-property.dto";
import {CustomError} from "../common/custom-error";
import {UserFunctionCommon} from "./dto/common/user-function.common";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private userFunctionCommon: UserFunctionCommon
    ) {}

    async create(
        userPropertyDto: UserPropertyDto,
    ): Promise<User> {
        let {screenName, password, email, niokname} = userPropertyDto;
        const validator = this.userFunctionCommon.passwordValidate(password);
        if (!validator){
            throw new CustomError("パスワードが短すぎます")
        }
        password = await this.userFunctionCommon.hash(password)
        this.findByScreenName(screenName);

        if (niokname === "") {
            niokname = screenName
        }

        const user = new User();
        user.screenName = screenName;
        user.password = password;
        user.email = email;
        user.niokname = niokname;
        console.log(user)

        try {
            await this.userRepository.save(user);
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return user;
    }

    async findByScreenName(screenName: string):  Promise<User> {
        let found = await this.userRepository.findOne(
            {screenName: screenName}
        )

        if (found) {
            throw new CustomError("別のユーザー名を入力してください")
        }

        return found
    }

    async findByNickName(niokname: string): Promise<boolean> {
        let flag = false;
        const found =  await this.userRepository.findOne(
            {niokname: niokname}
        )
        if (!found) {
            flag = true
        }
        return flag
    }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getUserById(id: number): Promise<User> {
        const found = await this.userRepository.findOne(id);

        if (!found) {
            throw new NotFoundException();
        }

        return found;
    }
}
