import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async getProblemsCount(): Promise<number> {
    const usersWithProblems = await this.userRepository.find({ where: { hasProblems: true } });
    const count = usersWithProblems.length;

    await this.userRepository.update({ hasProblems: true }, { hasProblems: false });

    return count;
  }
}
