import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { response } from "express";

@Controller('users')
export class UsersController {

  @Post('/registrasi')
  rigester(@Body() payload: any):string{
    console.log(payload);
    return 'Register';
  }

  @Post('/createprofile/:id')
  createProfile(@Body() payload: any, @Param('id')id: string): string{
    console.log(payload);
    return `Create Profile Id ${id}`;
  }

  @Post('/login')
  login(@Body() payload: any):string{
    console.log(payload);
    return 'login';
  }

  @Get('/getprofile/:id')
  getProfile(@Param('id')id: string):string{
    console.log(id);
    return `Get Profile ${id}`
  }

  @Put('/updateprofile/:id')
  updateProfile(@Body() payload: any, @Param('id')id: string): string{
    console.log(payload);
    return `Update Profile ${id}`;
  }
}
