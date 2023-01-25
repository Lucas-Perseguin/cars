import { cars } from '@prisma/client';
import prisma from '../config/database.js';

async function getCars(): Promise<cars[] | null> {
  const data = await prisma.cars.findMany();
  return data;
}

async function getCar(id: number): Promise<cars | null> {
  const data = await prisma.cars.findUnique({ where: { id } });
  return data;
}

async function getCarWithLicensePlate(
  licensePlate: string
): Promise<cars | null> {
  const data = await prisma.cars.findUnique({
    where: { licensePlate },
  });
  return data;
}

async function createCar(
  model: string,
  licensePlate: string,
  year: number,
  color: string
) {
  await prisma.cars.create({
    data: {
      model,
      color,
      licensePlate,
      year: `${year}`,
    },
  });
}

async function deleteCar(id: number) {
  await prisma.cars.delete({ where: { id } });
}

async function updateCar(
  id: number,
  model: string,
  year: number,
  color: string
) {
  await prisma.cars.update({
    where: {
      id: id,
    },
    data: {
      model,
      year: `${year}`,
      color,
    },
  });
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
  updateCar,
};

export default carRepository;
