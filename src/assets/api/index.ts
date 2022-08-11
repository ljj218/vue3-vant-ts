import request from "../js/request";

export const getartProvs=()=>{
  return request.get('https://m.51sdx.com/test-choice/art/base/artProvs')
}