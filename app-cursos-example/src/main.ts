import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(json({ limit: '60mb' }));

  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });
  const config = new DocumentBuilder().setTitle('API NestJS Curso').build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  console.log('--------env---------', process.env.PORT);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap().catch((error) => {
  console.error('Error al iniciar la aplicación:', error);
});
