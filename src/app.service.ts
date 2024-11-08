import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
// import { Cron, CronExpression } from "@nestjs/schedule";
// import { firstValueFrom } from "rxjs";

@Injectable()
export class AppService {
	constructor(private readonly httpService: HttpService) {}

	getHello(): string {
		return `<h1>Welcome to Agiletech Test</h1>
    <a href="/backend" target="_blank">Link Swagger</a>
    <code style="font-size:16px">
      <h4>POST: /auth/login: Đăng nhập có accessToken, refreshToken (accessToken hết hạn sau 1 phút, refreshToken hết hạn sau 1 ngày)</h4>
      <h4>POST: /auth/refreshToken: Refresh token khi accessToken hết hạn</h4>
      <h4>POST: /auth/logout: Xoá access token</h4>
      <br />
      <h4>GET: /posts: Lấy danh sách posts</h4>
      <h4>GET: /posts?title=&page=: Lấy danh sách posts theo title hoặc phân trang</h4>
      <h4>POST: /posts: Tạo một posts</h4>
      <h4>PATCH: /posts/{postId}: Sửa thông tin post</h4>
      <h4>DELETE: /posts/{postId}: Xoá post</h4>
      <h4>GET: /posts/tags: Lấy danh sách tags của post</h4>
      <br />
      <h4>GET: /galleries: Lấy ảnh từ galleries</h4>
    </code>

    <h1>Yêu cầu</h1>
    `;
	}

	// @Cron(CronExpression.EVERY_DAY_AT_6PM)
	// async handleCron() {
	// 	try {
	// 		const webhook =
	// 			"https://discord.com/api/webhooks/1304358390671216661/MrukzHYVG2dASbd9M2xVlwda0l5u1MEXyV0rGapT0b8pIGTwd59Ty-gl8CnanhA9hS5g";

	// 		let embed: any = {};

	// 		embed.title = "Title";

	// 		embed.description = "Description";

	// 		embed.fields = [
	// 			{
	// 				name: "Repository",
	// 				value: `Repository`,
	// 				inline: true
	// 			},
	// 			{
	// 				name: "Ref",
	// 				value: "Ref",
	// 				inline: true
	// 			}
	// 		];

	// 		let discord_payload: any = {
	// 			embeds: [embed]
	// 		};

	// 		await firstValueFrom(
	// 			this.httpService.post(webhook, discord_payload)
	// 		);

	// 		console.log("Send message to discord");
	// 	} catch (error) {
	// 		console.log({
	// 			error: error.response.data
	// 		});

	// 		console.log("Error when send message to discord");
	// 	}
	// }
}
