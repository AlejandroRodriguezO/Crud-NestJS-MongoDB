import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './interfaces/product.interface';
import { CreateAccountDTO } from './dto/account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel('Account') private readonly accountModel: Model<Account>,
  ) {}

  async getAccounts(): Promise<Account[]> {
    const accounts = await this.accountModel.find();
    return accounts;
  }

  async getAccount(accountID: string): Promise<Account> {
    const account = await this.accountModel.findById(accountID);
    return account;
  }

  async createAccount(createAccountDTO: CreateAccountDTO): Promise<Account> {
    const createdAccount = await new this.accountModel(createAccountDTO);
    await createdAccount.save();
    return createdAccount;
  }

  async deleteAccount(accountID: string): Promise<Account> {
    const deletedAccount = await this.accountModel.findByIdAndDelete(accountID);
    return deletedAccount;
  }

  async updateAccount(
    accountID: string,
    createAccountDTO: CreateAccountDTO,
  ): Promise<Account> {
    const updatedAccount = await this.accountModel.findByIdAndUpdate(
      accountID,
      createAccountDTO,
      { new: true },
    );

    return updatedAccount;
  }
}
