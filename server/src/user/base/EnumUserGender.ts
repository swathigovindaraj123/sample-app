/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumUserGender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

registerEnumType(EnumUserGender, {
  name: "EnumUserGender",
});
