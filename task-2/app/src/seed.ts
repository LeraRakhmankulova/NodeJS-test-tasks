import { faker } from '@faker-js/faker';
import { createConnection } from "typeorm";
import { UserEntity } from "./user/entities/user.entity";

async function seed() {
    const connection = await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Le26ra1703.',
      database: 'test',
      entities: [UserEntity],
      synchronize: true,
    });
  
    const userRepository = connection.getRepository(UserEntity);
  
    for (let i = 0; i < 10000; i++) {
      const user = new UserEntity();
      user.firstName = faker.person.firstName();
      user.lastName = faker.person.lastName();
      user.age = Math.floor(Math.random() * 100);
      user.gender = Math.random() > 0.5 ? 'male' : 'female';
      user.hasProblems = Math.random() > 0.5;
      await userRepository.save(user);
    }
  
    await connection.close();
  }
  
  seed().then(() => console.log('Seeding complete')).catch(error => console.error(error));