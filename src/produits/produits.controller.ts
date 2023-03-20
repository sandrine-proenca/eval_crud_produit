import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, BadRequestException, ConflictException } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('PRODUITS')
@Controller('produits')
export class ProduitsController
{
  constructor(private readonly produitsService: ProduitsService) { }

  @ApiBody({ type: CreateProduitDto })
  @ApiOperation({ summary: `Creating a product.` })
  @Post()
  //Creating a product.
  async create(@Body() createProduitDto: CreateProduitDto)
  {
    const produitExist = await this.produitsService.findByName(createProduitDto.name)

    // Message to wander if the product exists.
    if (produitExist)
    {
      throw new HttpException(`The product already exists.`, HttpStatus.BAD_REQUEST);
    }
    // Creating a product that doesn't already exist.
    const newProduit = this.produitsService.create(createProduitDto);
    return {
      StatusCode: 201,
      message: `Successful product creation.`,
      data: newProduit
    }
  }

  @ApiBody({ type: CreateProduitDto })
  @ApiOperation({ summary: `Recovery of all products.` })
  @Get()
  // Recovery of all products.
  async findAll()
  {
    const allProduits = await this.produitsService.findAll()
    return {
      statusCode: 200,
      message: `Successful recovery of all products`,
      data: allProduits
    };
  }

  @ApiBody({ type: CreateProduitDto })
  @ApiOperation({ summary: `Recovery of a product by its id.` })
  @Get(':id')
  // Recovery of a product by its id.
  async findOneProduit(@Param('id') id: string)
  {
    const oneProduit = await this.produitsService.findOne(+id)

    // Error message if the product does not exist.
    if (!oneProduit)
    {
      throw new BadRequestException(`The product does not exist.`)
    }

    return {
      statusCode: 200,
      message: `Successful recovery of a product by its id(n° ${id}).`,
      data: oneProduit
    };
  }

  @ApiOperation({ summary: `Modification of a product by its id.` })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProduitDto: UpdateProduitDto)
  {
    // Checks if the product to be modified exists.
    const produitExist = await this.produitsService.findOne(+id)

    // Error message if the product does not exist.
    if (!produitExist)
    {
      throw new BadRequestException(`The product does not exist.`)
    }

    // Verify that the new product does not already exist.
    if (updateProduitDto.name)
    {
      const newProduit = await this.produitsService.findByName(updateProduitDto.name)
      if (newProduit && produitExist.name !== updateProduitDto.name)
      {
        throw new ConflictException(`The product already exists.`)
      }
    }
    //Edit the affected product.
    const updatedProduit = await this.produitsService.update(+id, updateProduitDto);
    return {
      statusCode: 200,
      message: `The product has been modified.`,
      data: updatedProduit
    }
  }


  @ApiOperation({summary: `Deleting a product by its id.`})
  @Delete(':id')
  // Deleting a product by its id.
  async remove(@Param('id') id: string)
  {
    // Checks if the product to be modified exists.
    const produitExist = await this.produitsService.findOne(+id)

    // Error message if the product does not exist.
    if (!produitExist)
    {
      throw new BadRequestException(`The product does not exist.`)
    }

    // Remove the product.
    const deletedProduit = await this.produitsService.remove(+id)
    return  {
      statusCode: 200,
      message: `Successful removal of the product.`,
      data: deletedProduit
    } ;
  }
}
