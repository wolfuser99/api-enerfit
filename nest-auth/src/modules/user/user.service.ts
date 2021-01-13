import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { FIREBASE_ADMIN_INJECT, FirebaseAdminSDK } from '../firebase';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @Inject(FIREBASE_ADMIN_INJECT) private firebaseAdmin: FirebaseAdminSDK,
  ) {}
  async create(createUserInput: CreateUserInput) {
    try {
      const res = await this.firebaseAdmin.auth().createUser(createUserInput);
      this.logger.log(res);

      await this.firebaseAdmin.auth().setCustomUserClaims(res.uid, {
        'https://hasura.io/jwt/claims': {
          'x-hasura-user-id': res.uid,
          'x-hasura-default-role': 'user',
          'x-hasura-allowed-roles': ['user'],
        },
      });

      return (res as unknown) as User;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findAll() {
    const temp = await this.firebaseAdmin.auth().listUsers();
    this.logger.log(temp);
    const res = temp.users.map((user) => {
      this.logger.log(user);
      return (user as unknown) as User;
    });
    return res;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  async remove(uid: string) {
    try {
      const res = await this.firebaseAdmin.auth().deleteUser(uid);
      return `User with UID: ${uid} was deleted`;
    } catch (error) {
      return error.message;
    }
  }
}
