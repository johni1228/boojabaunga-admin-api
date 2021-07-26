import { Controller, Get, Post, Put, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('games')
export class GamesController {
  @Get('')
  findAll(@Req() request: Request): string {
    return 'This action returns all games';
  }

  @Post()
  creat(): string {
    return 'This action create a new game ';
  }

  @Put()
  update(): string {
    return 'This action update a game';
  }
}
