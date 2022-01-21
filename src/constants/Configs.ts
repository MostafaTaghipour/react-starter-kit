import {
  API_URL,
  ENVIRONMENT,
  USE_MOCK_DATA,
  LOG_NETWORK_REQUEST,
  LOG_REDUX_ACTIONS,
  NETWORK_REQUEST_TIMEOUT_IN_SEC,
} from "../../_env.json";

export default {
  IS_DEBUG: !process.env.NODE_ENV || process.env.NODE_ENV === "development",
  ENVIRONMENT,
  API_URL,
  USE_MOCK_DATA,
  LOG_REDUX_ACTIONS,
  LOG_NETWORK_REQUEST,
  NETWORK_REQUEST_TIMEOUT_IN_SEC,
};
