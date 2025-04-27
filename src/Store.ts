import Identifiable from "./Identifiable";
import Predicate from "./Predicate";

export default class Store<T extends Identifiable> {
  items: T[] = [];
  add(item: T): void {
    const exists = this.items.some(
      (existingItem) => existingItem.id === item.id
    );
    if (exists) {
      throw new Error(`Item with id ${item.id} already exists`);
    }
    this.items.push(item);
    //TODO
    //adds new item with validation of unique id value
    //if item with the given id exists the method throws exception
  }
  getById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
    //TODO
    //returns item with the given id or undefined if such item doesn't exist
   
  }
  find(predicate: Predicate<T>): T[] | undefined {
    const result = this.items.filter((item) => predicate.test(item));
    return result.length > 0 ? result : undefined;
  }
  remove(id: string): T | undefined {
    //TODO
    //removes item with the given id value
    //returns a reference to being removed item or undefined if an item doesn't exist
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      const [removed] = this.items.splice(index, 1);
      return removed;
    }
    return undefined;
  }
}
