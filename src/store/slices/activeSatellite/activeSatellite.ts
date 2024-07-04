import { createSlice } from '@reduxjs/toolkit';

interface IActiveSatellite {
	props: {
		id: number | null
		group: number | null
		top: number | null
		left: number | null
	}
}

const initialState: IActiveSatellite = {
	props: {
		id: null,
		group: null,
		top: null,
		left: null
	}
}

const activeSatellite = createSlice({
	name: 'activeSatellite',
	initialState,
	reducers: {
		setActiveSatellite: (state, action) => {
			state.props = action.payload
		},
	}
})

export const { setActiveSatellite } = activeSatellite.actions
export default activeSatellite.reducer