export function managePresents(state, action){
  switch(action.type) {
    case 'INCREASE':
      return {count: stat.count + 1}
    default:
      return state;
  }
}
