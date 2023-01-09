import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {}

  async login(userDto: CreateUserDto) {}

  async registration(userDto: CreateUserDto) {
    const condidate = await this.userService.getUserByEmail(userDto.email);
    if (condidate) {
      throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt;
  }
}
