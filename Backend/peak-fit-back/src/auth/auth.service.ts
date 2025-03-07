import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity'; // Ensure User is correctly imported
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signup(email: string, password: string): Promise<User> { // Ensure return type
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userService.createUser(email, hashedPassword);
  }

  async login(email: string, password: string): Promise<{ message: string; user: Omit<User, 'password'> }> {
    const user = await this.userService.findByEmail(email);
    console.log('User fetched from DB:', user); // ✅ Debugging step
  
    if (!user) {
      throw new UnauthorizedException('User not found'); // More specific error
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Password comparison result:', isPasswordValid); // ✅ Debugging step
  
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
  
    // Return user **without** password
    const { password: _, ...userWithoutPassword } = user;
    return { message: 'Login successful', user: userWithoutPassword };
  }
  
}
