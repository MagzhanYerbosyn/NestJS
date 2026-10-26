import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 40)
  title: string;

  @IsString({ message: 'Название должно быть строкой' })
  @IsOptional()
  description: string;

  @IsInt({ message: 'Приоритет должен быть целым числом' })
  @IsPositive({ message: 'Приоритет должен быть положительным' })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'Теги должны быть массивом' })
  @IsString({ each: true, message: 'Каждый тег должен быть строкой' })
  @IsOptional()
  tags: string[];
}
