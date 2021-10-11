import axios from "axios";

import { setLastRequestCode, setRequestStatus, setError, requestStatus } from "redux/status";

export const getRequest = async (endpoint, id = null) => {
  setRequestStatus(requestStatus.PENDING);

  const url = `${endpoint}${id ? `/${id}` : ""}`;
  let res = null;
  try {
    res = await axios.get(url);
    setRequestStatus(requestStatus.OK);
  } catch (err) {
    setRequestStatus(requestStatus.ERROR);
    setError(err);
  } finally {
    setLastRequestCode(res.status);
    return res?.data || null;
  }
};
