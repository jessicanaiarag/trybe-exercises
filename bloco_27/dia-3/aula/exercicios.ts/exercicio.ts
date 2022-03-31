interface Character {
  name: string;
  specialMove: string;
}

class  DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

// interface Imodel {
//   add(character: Character) : Character;
//   getAll(): Character[];
//   getById(id: number): Character; 
// }

abstract class Imodel {
  abstract add(character: Character) : Character;
  abstract getAll(): Character[];
  abstract getById(id: number): Character; 
}

class LocalDbModel extends Imodel {
  add(character: Character): Character {
    return {} as Character;
  }
  getAll(): Character[] {
    return [] as Character[];
  }
  getById(id: number): Character {
    return {} as Character;
  }
}

class MockDbModel implements IModel {

}

class CharacterService {
  public db: LocalDbModel;

  constructor(db: LocalDbModel) {
    this.db = db;
  }

  add(character: Character): Character {
    return this.db.add(character);
  }
  getAll(): Character[] {
    return this.db.getAll();
  }
  getById(id: number): Character {
    return this.db.getById(id);
  }

}

const LocalDbModel = new LocalDbModel();
const MockDbModel = new MockDbModel();

new CharacterService(LocalDbModel);
new CharacterService(LocalDbModel);