export default function data(state = [], action = {}) {
  switch (action.type) {
    case ('GET_DATA'):
      return {
        headers: action.headers,
        rows: action.rows
      };
    default:
      return state;
  }
}
