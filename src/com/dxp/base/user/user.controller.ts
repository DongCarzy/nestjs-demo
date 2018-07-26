import {Controller, Get, Post, Body, Patch, HttpCode, Param, Delete} from '@nestjs/common';
import {User} from './user';
import {UserService} from './user.service';
import {InputUser} from './input';
import {UpdateUser} from './update';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    /**
     * findAll
     */
    @Get()
    @HttpCode(200)
    public findAll(): Array<User> {
        return this.userService.findAll();
    }

    @Post()
    @HttpCode(201)
    public add(@Body() input: InputUser): User {
        if (input.id === undefined) {
            throw new Error('未带入ID');
        }
        const user: User = {
            ...input,
        };
        return this.userService.add(user);
    }

    @Patch(':id')
    @HttpCode(203)
    public update(@Param() param, @Body() update: UpdateUser): User {
        const userInfo = this.userService.findOne(param.id);
        if (!userInfo) {
            throw new Error('该用户不存在');
        }
        userInfo.no = update.no;
        userInfo.name = update.name;
        return this.userService.update(userInfo);
    }

    @Delete(':id')
    @HttpCode(204)
    public remove(@Param() param): void {
        this.userService.remove(param.id);
    }

    @Get(':id')
    @HttpCode(200)
    public findOne(@Param() param): User {
        return this.userService.findOne(param.id);
    }
}
