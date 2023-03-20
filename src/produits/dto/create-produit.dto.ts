import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";


export class CreateProduitDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    quantity: number
}
