import { Model, UpdateQuery, FilterQuery } from "mongoose";
export abstract class DBCrudBaseRepository<T> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    try {
      console.log(data)
      const doc = await this.model.create(data);
      return doc;
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string): Promise<T | null> {
    try {
      const doc = await this.model.findById(id);
      return doc;
    } catch (error) {
      throw error;
    }
  }

  async find(query: FilterQuery<T> = {}): Promise<T[]> {
    try {
      const docs = await this.model.find(query);
      return docs;
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: string, data: UpdateQuery<T>): Promise<T | null> {
    try {
      const updatedDoc = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updatedDoc;
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id: string): Promise<void> {
    try {
      await this.model.findByIdAndRemove(id);
    } catch (error) {
      throw error;
    }
  }
}
