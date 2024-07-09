import { createSlice } from '@reduxjs/toolkit'

const CountSlice = createSlice({
  name: 'numberCount',
  initialState: {
    count: 0,
  },
  reducers: {
    /**Redux로 작성한 전역상태 count를 1만큼 증가시킴 */
    Increase(state) {
      state.count += 1
    },
    /**Redux로 작성한 전역상태 count를 1만큼 감소시킴 */
    Decrease(state) {
      state.count -= 1
    },
    /**count가 홀수일 때만 값이 증가되도록 로직 작성 */
    OddIncrease(state) {
      if (state.count % 2 !== 0) {
        state.count += 1
      }
    },
    /**parameter는 actions.payload를 통해 사용 가능 */
    CustomIncrease(state, actions) {
      state.count = parseInt(actions.payload)
    },
  },
})

export const { Increase, Decrease, OddIncrease, CustomIncrease } = CountSlice.actions
export default CountSlice.reducer
