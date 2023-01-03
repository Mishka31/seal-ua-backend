import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'misha@mail.ua', description: 'Электронная почта' })
  readonly email: string;
  @ApiProperty({ example: '123Querty', description: 'Пароль' })
  readonly password: string;
}
