export interface CharacterSheet {
  id: string;
  name: string;
  background: string;
  birthsign?: string;
  disposition?: string;
  coat?: string;
  physicalDetail?: string;
  abilities: {
    strength: {
      max: number;
      current: number;
    };
    dexterity: {
      max: number;
      current: number;
    };
    willpower: {
      max: number;
      current: number;
    };
  };
  hp: {
    max: number;
    current: number;
  };
  items: string[];
  pips: number;
  inventory?: InventoryItem[];
}

export interface InventoryItem {
  id: string;
  name: string;
  type: string;
  usesMax: number;
  usesCurrent: number;
  size: number;
  damageDie: string;
  clearCondition: string;
}
