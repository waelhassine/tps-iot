import { Injectable } from '@nestjs/common';
import { UserI } from '../../../user/model/user.interface';

@Injectable()
export class UserHelperService {

  createUserDtoToEntity(createUserDto: any): UserI {
    return {
      email: createUserDto.email,
      password: createUserDto.password
    };
  }

  loginUserDtoToEntity(loginUserDto: any): UserI {
    return {
      email: loginUserDto.email,
      password: loginUserDto.password
    };
  }

}
