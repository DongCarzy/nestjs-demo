import { Injectable } from '@nestjs/common';
import { User } from './user';
import { MockUser } from '../../mock/MockUser';

@Injectable()
export class UserService {
    private mockUser = new MockUser();

    public findAll(): Array<User> {
        return this.mockUser.data;
    }

    public add(user: User): User {
        this.mockUser.data.push(user);
        return user;
    }

    public update(user: User): User {
        this.remove(user.id);
        this.mockUser.data.push(user);
        return user;
    }

    public remove(id: number): void {
        this.mockUser.data = this.mockUser.data.filter(v => v.id != id);
    }

    public findOne(id: number): User {
        return this.mockUser.data.find(v => v.id == id);
    }
}
