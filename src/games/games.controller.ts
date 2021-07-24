import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('games')
export class GamesController {
  @Get('about')
  findAll(@Req() request: Request): string {
    return 'This action returns all games';
  }
}
