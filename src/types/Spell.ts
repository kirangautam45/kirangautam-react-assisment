export interface SpellType {
  index: string;
  name: string;
  url: string;
}

export interface SingleSpellsType {
  index: string;
  name: string;
  desc: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  area_of_effect: {
    type: string;
    size: number;
  };
  school: {
    index: string;
    name: string;
    url: string;
  };
  classes: SpellType[];
  subclasses: SpellType[];
  url: string;
}
