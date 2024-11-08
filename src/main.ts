import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: "*"
	});

	const config = new DocumentBuilder()
		.setTitle("Agiletech test")
		.setVersion("1.0")
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, config);

	const swaggerPath = "/backend";
	const swaggerCDN = "https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.7.2";
	SwaggerModule.setup(swaggerPath, app, document, {
		customCssUrl: [`${swaggerCDN}/swagger-ui.css`],
		customJs: [
			`${swaggerCDN}/swagger-ui-bundle.js`,
			`${swaggerCDN}/swagger-ui-standalone-preset.js`
		],
		swaggerOptions: {
			displayOperationId: true
		}
	});

	const PORT = process.env.PORT || 3000;
	await app.listen(PORT);
	console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
