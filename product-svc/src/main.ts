import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { PRODUCT_SERVICE } from 'y/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC, 
    options: {
      package: PRODUCT_SERVICE,
      protoPath: join(__dirname, '../product_service.proto'),
      url: '0.0.0.0:50055',
    }
  });
  await app.listen();
}
bootstrap();
