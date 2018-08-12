import { persistStore } from 'redux-persist';


// Create a function that pairs the persistor with the callback for determining when the
// hydration has been complete. Allowing us to use a PersistGate component for loading
export default function (store, config) {
  // hold persistor in function scope
  let _persistor = null;

  const rehydrated = new Promise((resolve) => {
    _persistor = persistStore(
      store,
      config,
      resolve
    )
  });
  _persistor.rehydrated = rehydrated;

  return _persistor;
}
