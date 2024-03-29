import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Producto} from '../models';
import {ProductoRepository} from '../repositories';

export class ProductoController {
  constructor(
    @repository(ProductoRepository)
    public productoRepository : ProductoRepository,
  ) {}

  @get('/productos/categoria/{categoria}',{
    responses: {
      '200' : {
        description: 'Success',
        content: {'application/json': {schema: getModelSchemaRef(Producto)}},
      },
    },
  })
  async filterCategoria(
    @param.path.string('categoria') categoria: String,
  ) :Promise<Producto[]>{
    return this.productoRepository.find({where: {ID_Categoria : categoria}});
  }

  @get('/productos/categoria/{categoria}/count', {
    responses: {
      '200': {
        description: 'Producto category model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async countCat(
    @param.path.string('categoria') categoria: String, @param.where(Producto) where?: Where<Producto>, 
  ): Promise<number>{
    return (await this.productoRepository.find({where: {ID_Categoria : categoria}})).length;
  }

  @get('/productos/nombre/{nombre}',{
    responses: {
      '200' : {
        description: 'Success',
        content: {'application/json': {schema: getModelSchemaRef(Producto)}},
      },
    },
  })
  async searchName(
    @param.path.string('nombre') nombre: String,
  ) :Promise<Producto[]>{
    return this.productoRepository.find({where: {nombre: {regexp: new RegExp(`${nombre}?.*`,"i")}}});
  }

  @post('/productos', {
    responses: {
      '200': {
        description: 'Producto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Producto)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Producto, {
            title: 'NewProducto',
            exclude: ['id'],
          }),
        },
      },
    })
    producto: Omit<Producto, 'id'>,
  ): Promise<Producto> {
    return this.productoRepository.create(producto);
  }

  @get('/productos/count', {
    responses: {
      '200': {
        description: 'Producto model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Producto) where?: Where<Producto>,
  ): Promise<Count> {
    return this.productoRepository.count(where);
  }

  @get('/productos', {
    responses: {
      '200': {
        description: 'Array of Producto model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Producto, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Producto) filter?: Filter<Producto>,
  ): Promise<Producto[]> {
    return this.productoRepository.find(filter);
  }

  @patch('/productos', {
    responses: {
      '200': {
        description: 'Producto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Producto, {partial: true}),
        },
      },
    })
    producto: Producto,
    @param.where(Producto) where?: Where<Producto>,
  ): Promise<Count> {
    return this.productoRepository.updateAll(producto, where);
  }

  @get('/productos/{id}', {
    responses: {
      '200': {
        description: 'Producto model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Producto, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Producto, {exclude: 'where'}) filter?: FilterExcludingWhere<Producto>
  ): Promise<Producto> {
    return this.productoRepository.findById(id, filter);
  }

  @patch('/productos/{id}', {
    responses: {
      '204': {
        description: 'Producto PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Producto, {partial: true}),
        },
      },
    })
    producto: Producto,
  ): Promise<void> {
    await this.productoRepository.updateById(id, producto);
  }

  @put('/productos/{id}', {
    responses: {
      '204': {
        description: 'Producto PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() producto: Producto,
  ): Promise<void> {
    await this.productoRepository.replaceById(id, producto);
  }

  @del('/productos/{id}', {
    responses: {
      '204': {
        description: 'Producto DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productoRepository.deleteById(id);
  }


}
