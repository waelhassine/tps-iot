import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path';
import { MongooseModule } from "@nestjs/mongoose"
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from '@nestjs/config';
import { AuthMiddleware } from './middleware/auth.middleware';
@Module({
 imports: [ 
 
  ConfigModule.forRoot({isGlobal: true}),
  MongooseModule.forRoot(
    "mongodb+srv://root:root@cluster0.joegh86.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  ),
   ServeStaticModule.forRoot({
    rootPath: join(__dirname, '../..', 'client/build')
  }),
   ChatModule,
   AuthModule,
   UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: '/api/users', method: RequestMethod.POST},
        {path: '/api/users/login', method: RequestMethod.POST}
      )
      .forRoutes('')
  }
}
