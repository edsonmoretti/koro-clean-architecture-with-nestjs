import express, {Express, Request, Response} from 'express';
import {BrandInMemoryRepository} from '../../fd/db/brand-in-memory.respository';
import {CreateBrandUseCase} from '../../../application/abr/brand/create-brand.use-case';

const app: Express = express();
app.use(express.json());

const brandRepository = new BrandInMemoryRepository();

app.post('/brands', async (req: Request, res: Response) => {
  const createUseCase = new CreateBrandUseCase(brandRepository);
  const output = await createUseCase.execute(req.body);
  res.status(201).json(output);
})

app.get('/brands', async (req: Request, res: Response) => {
  const brands = await brandRepository.findAll();
  res.status(200).json(brands);
})


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Server is running on port ' + port);
})
