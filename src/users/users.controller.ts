import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { Roles } from "../shared/decorators";
import { Role } from "./enum";


@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  @Roles(Role.ADMIN, Role.SUPERVISOR)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()

  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  @Roles(Role.ADMIN, Role.SUPERVISOR, Role.RENTER, Role.RESIDENT)
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")

  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  @Roles(Role.ADMIN, Role.SUPERVISOR, Role.RENTER, Role.RESIDENT)
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
