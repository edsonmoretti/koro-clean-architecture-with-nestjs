const fastify = require('fastify')({logger: true})

import {BrandInMemoryRepository} from '../../db/brand-in-memory.respository';
import {CreateBrandUseCase} from '../../../../application/abr/brand/create-brand.use-case';


const brandRepository = new BrandInMemoryRepository();

//fastfy json
fastify.post('/brands', async (req: any, res: any) => {
  const createUseCase = new CreateBrandUseCase(brandRepository);
  const output = await createUseCase.execute(req.body);
  return output
})

fastify.get('/brands', async (req: any, res: any) => {
  const brands = await brandRepository.findAll();
  return brands;
})

const port = process.env.PORT || 3000

// Run the server!
const start = async () => {
  try {
    await fastify.listen({port: 3000})
    console.log('Server is running on port ' + port);
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
