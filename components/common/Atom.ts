
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

  
 export const UserName = atom({
    key: 'UserName', // unique ID (with respect to other atoms/selectors)
    default: 'kdjnvkdjnvk', // default value (aka initial value)
  });

  export const Password = atom({
    key: 'password', // unique ID (with respect to other atoms/selectors)
    default: ' kavklan', // default value (aka initial value)
  });

 export const Email = atom({
    key: 'Email', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });