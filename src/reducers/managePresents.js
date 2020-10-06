export function managePresents(state, action){
  switch(action.type) {
    case 'INCREASE':
      return {numberOfPresents: numberOfPresents.count + 1}
    default:
      return state;
  }
}

let state = { numberOfPresents: 0 }

let action = { type: "INCREASE" }