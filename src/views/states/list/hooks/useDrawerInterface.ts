import { useHistory } from 'react-router';

import { NodeNetworkConfigurationInterface, V1beta1NodeNetworkState } from '@types';
import useURLParams from '@utils/hooks/useURLParams';

import { baseListUrl } from '../constants';

const useDrawerInterface = () => {
  const history = useHistory();
  const params = useURLParams();

  const {
    selectedInterface: selectedInterfaceName,
    selectedInterfaceType,
    selectedState: selectedStateName,
    ...filtersParameters
  } = params;

  return {
    selectedInterfaceName,
    selectedInterfaceType,
    selectedStateName,
    setSelectedInterfaceName: (
      nodeNetworkState?: V1beta1NodeNetworkState,
      nodeNetworkInterface?: NodeNetworkConfigurationInterface,
    ) => {
      if (!nodeNetworkInterface) return history.push(baseListUrl);

      const query = new URLSearchParams({
        ...(filtersParameters || {}),
        selectedInterface: nodeNetworkInterface.name,
        selectedInterfaceType: nodeNetworkInterface.type,
        selectedState: nodeNetworkState?.metadata?.name,
      });

      history.push(`${baseListUrl}?${query.toString()}`);
    },
  };
};

export default useDrawerInterface;
