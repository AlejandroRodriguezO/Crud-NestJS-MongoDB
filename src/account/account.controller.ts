import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  Body,
  Param,
  Query,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';

import { CreateAccountDTO } from './dto/account.dto';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createAccountDTO: CreateAccountDTO) {
    console.log(createAccountDTO);
    const account = await this.accountService.createAccount(createAccountDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Cuenta Creada',
      account,
    });
  }

  @Get('/')
  async getAccounts(@Res() res) {
    const account = await this.accountService.getAccounts();
    return res.status(HttpStatus.OK).json({
      account,
    });
  }

  @Get('/:accountID')
  async getAccount(@Res() res, @Param('accountID') accountID) {
    const account = await this.accountService.getAccount(accountID);
    if (!account) throw new NotFoundException('Cuenta no existe');
    return res.status(HttpStatus.OK).json(account);
  }

  @Delete('/delete')
  async deleteAccount(@Res() res, @Query('accountID') accountID) {
    const account = await this.accountService.deleteAccount(accountID);
    if (!account) throw new NotFoundException('Cuenta no existe');
    return res.status(HttpStatus.OK).json({
        message: 'Cuenta Eliminada',
       account,
      });
  }
  @Put('/update')
  async updateAccount(@Res() res, @Body() createAccountDTO: CreateAccountDTO, @Query('accountID') accountID) {
    const account = await this.accountService.updateAccount(accountID, createAccountDTO);
    if (!account) throw new NotFoundException('Cuenta no existe');
    return res.status(HttpStatus.OK).json({
        message: 'Cuenta Actualizada',
        account,
      });
  }
}
