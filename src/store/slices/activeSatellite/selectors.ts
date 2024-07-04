import { RootState } from '../../store';

export const getActiveSatellite = (state: RootState) => {
	return state.activeSatellite.props;
};
