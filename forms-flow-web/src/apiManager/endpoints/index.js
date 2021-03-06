import {
  INSIGHTS_BASE_API,
  INSIGHTS_API_KEY,
  WEB_BASE_URL,
} from "./config";

const API = {
  INSIGHTS_API_KEY: INSIGHTS_API_KEY,
  GET_TASK_API: `${WEB_BASE_URL}/task`,
  GET_TASK_DETAIL_API: `${WEB_BASE_URL}/task/`,
  GET_DASHBOARDS: `${INSIGHTS_BASE_API}/dashboards`,
  METRICS_SUBMISSIONS: `${WEB_BASE_URL}/application/metrics`,
  APPLICATION_START: `${WEB_BASE_URL}/application`,
  PROCESS_STATE: `${WEB_BASE_URL}/process/<process_key>/task/<task_key>/state`,
  GET_APPLICATION: `${WEB_BASE_URL}/application/<application_id>`,
};

export default API;
