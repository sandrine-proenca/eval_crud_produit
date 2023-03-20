import { Injectable } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { Produit } from './entities/produit.entity';


@Injectable()
export class ProduitsService
{


  /* Creating a new product. */
  async create(createProduitDto: CreateProduitDto)
  {
    const newProduit = Produit.create({...createProduitDto})
    return await newProduit.save()
  }


  /* Recovery of all products. */
  async findAll()
  {
    return await Produit.find();
  }


  /* Recovery of a product by name. */
  async findByName(name: string)
  {
    return await Produit.findOneBy({ name })
  }


  /* Recovery of a product by its id. */
  async findOne(id: number)
  {
    return await Produit.findOneBy({ id });
  }


  /* Modification of a product by its id. */
  async update(id: number, updateProduitDto: UpdateProduitDto)
  {
    return await Produit.update(id, updateProduitDto);
  }

  
  /* Deleting a product by its id. */
  async remove(id: number)
  {
    const deletedProduit = await Produit.findOneBy({ id });
    deletedProduit.remove()
    return deletedProduit;
  }
}
