export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    // const checkExist = [...this.members].forEach((item) => Object.values(member).forEach((key) =>
    // // eslint-disable-next-line indent
    // // eslint-disable-next-line implicit-arrow-linebreak
    //   Object.values(item).includes(key)));
    // eslint-disable-next-line no-trailing-spaces
    const checkExist = [...this.members].some((item) => Object.values(member).every((key) => 
      // eslint-disable-next-line implicit-arrow-linebreak
      // eslint-disable-next-line implicit-arrow-linebreak
      Object.values(item).includes(key)));
    if (checkExist) {
      throw new Error('Такой персонаж уже существует');
    }
    this.members.add(member);
  }

  addAll(...members) {
    members.forEach((member) => {
      try {
        this.add(member);
      } catch (error) {
        console.log(error.message);
      }
    });
  }

  toArray() {
    return [...this.members];
  }
}
