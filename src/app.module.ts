import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Produit } from './produits/entities/produit.entity';
import { ProduitsModule } from './produits/produits.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Produit],
      synchronize: true,
      logging: true,
    }),
    ProduitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {constructor(private datasource: DataSource) { }}
