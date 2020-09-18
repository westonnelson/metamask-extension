import { MESSAGE_TYPE } from '../../enums'

/**
 * This RPC method
 */

const getProviderState = {
  methodName: MESSAGE_TYPE.GET_PROVIDER_STATE,
  implementation: getProviderStateHandler,
}
export default getProviderState

/**
 * @typedef {Object} GetProviderStateOptions
 * @property {Function} getProviderState - A function that gets the current
 * provider state.
 */

/**
 * @typedef {Object} GetProviderStateResult
 * @property {string} action - The action taken (get or set).
 * @property {string} name - The window.web3 property name subject to the action.
 */

/**
 * @param {import('json-rpc-engine').JsonRpcRequest<[]>} req - The JSON-RPC request object.
 * @param {import('json-rpc-engine').JsonRpcResponse<GetProviderStateResult>} res - The JSON-RPC response object.
 * @param {Function} _next - The json-rpc-engine 'next' callback.
 * @param {Function} end - The json-rpc-engine 'end' callback.
 * @param {GetProviderStateOptions} options
 */
async function getProviderStateHandler (
  _req, res, _next, end,
  { getProviderState: _getProviderState },
) {
  res.result = {
    ..._getProviderState(),
  }
  return end()
}
