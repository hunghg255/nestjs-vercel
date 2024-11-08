import {
	MiddlewareConsumer,
	Module,
	NestModule,
	RequestMethod
} from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthMiddleware } from "./auth.middleware";
import { AuthModule } from "./auth/auth.module";
import { GalleriesModule } from "./galleries/galleries.module";
import { PostsController } from "./posts/posts.controller";
import { PostsService } from "./posts/posts.service";
import { PostsModule } from "./posts/posts.module";
import { ScheduleModule } from "@nestjs/schedule";
import { HttpModule } from "@nestjs/axios";

@Module({
	imports: [
		HttpModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => {
				return {
					timeout: 60000
					// baseURL: configService.get(ENVIRONMENT.HTTP_GOOGLE_RECAPTCHA),
				};
			},
			inject: [ConfigService]
		}),
		ScheduleModule.forRoot(),
		ConfigModule.forRoot(),
		AuthModule,
		GalleriesModule,
		PostsModule
	],
	controllers: [AppController, PostsController],
	providers: [AppService, PostsService]
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(AuthMiddleware).forRoutes(
			{
				path: "/auth/logout",
				method: RequestMethod.DELETE
			},
			{
				path: "/tags",
				method: RequestMethod.GET
			},
			{
				path: "/posts",
				method: RequestMethod.GET
			},
			{
				path: "/posts",
				method: RequestMethod.POST
			},
			"/posts/*"
		);
	}
}
