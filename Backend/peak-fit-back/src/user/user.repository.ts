import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      console.log(`🔍 Searching for user with email: ${email}`);
      const user = await this.findOne({ where: { email } });

      if (!user) {
        console.error(`❌ User not found: ${email}`);
      } else {
        console.log(`✅ User found: ${email}`);
      }

      return user;
    } catch (error) {
      console.error(`🔥 Database error while finding user: ${error.message}`);
      throw error;
    }
  }
}
