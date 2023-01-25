import { Router } from 'express';
import carController from '../controllers/carsController.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import { carSchema, carUpdateSchema } from '../schemas/carSchema.js';

const carsRouter = Router();

carsRouter.get('/cars', carController.getAllCars);
carsRouter.get('/cars/:carId', carController.getSpecificCar);
carsRouter.post(
  '/cars',
  validateSchemaMiddleware(carSchema),
  carController.createCar
);
carsRouter.put(
  '/cars/:carId',
  validateSchemaMiddleware(carUpdateSchema),
  carController.updateCar
);
carsRouter.delete('/cars/:carId', carController.deleteCar);

export default carsRouter;
