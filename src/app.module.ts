import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORM } from './config/typeORM';
import { RolesModule } from './roles/rol.module';
import { LenguajesModule } from './lenguajes/lenguaje.module';
import { AutosModule } from './autos/auto.module';
import { DireccionesModule } from './direcciones/direcciones.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORM()), UsersModule, RolesModule, LenguajesModule, AutosModule, DireccionesModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
