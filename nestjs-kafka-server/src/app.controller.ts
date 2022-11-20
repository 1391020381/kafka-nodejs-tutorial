import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user-topic')
  getHello(@Payload() message) {
    const id = message.value.userid;
    return this.appService.findUserByUserId(+id);
  }
}
