import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Game } from '../games/game.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(type => Game, game => game.user)
  photos: Game[];
}

