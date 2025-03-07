import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env globally
    TypeOrmModule.forRoot({
      type: 'mysql', // ✅ Change to MySQL
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT ?? '3306', 10), // ✅ Ensure default value
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '9947',
      database: process.env.DB_NAME || 'PeakFitNativeDB',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Don't use true in production
    }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
