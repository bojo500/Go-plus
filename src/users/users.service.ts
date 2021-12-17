import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    return this.repository.save(createUserDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id,updateUserDto);
  }

  remove(id: number) {
    return this.repository.delete(+id);
  }


  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.repository.save(createUserDto);
    if (!user) {
      throw new BadRequestException();
    }
    return user;
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.repository.findOne({ userName: username });
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.repository.findOne({ email });
  }

}
