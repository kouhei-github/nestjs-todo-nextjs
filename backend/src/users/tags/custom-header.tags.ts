import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import {CustomError} from "../../common/custom-error";

const pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

export const UserTodoApp = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        ctx.switchToHttp().getRequest()
        const userEmail = request.body[data];

        if (!pattern.test(userEmail)){
          　throw new CustomError("メールアドレスの書式が違います!");
        }

        return userEmail;
    },
);