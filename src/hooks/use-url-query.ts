function useUrlQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  function getAllParams() {
    const params: Record<string, unknown> = {};
    urlParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  }

  function getParam(name: string) {
    return urlParams.get(name);
  }

  function setParam(name: string, value: string) {
    urlParams.set(name, value);
    const updatedSearch = `?${urlParams.toString()}`;
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${updatedSearch}`
    );
  }

  function removeParam(name: string) {
    urlParams.delete(name);
    const updatedSearch = `?${urlParams.toString()}`;
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${updatedSearch}`
    );
  }

  return { getAllParams, getParam, setParam, removeParam };
}

export default useUrlQuery;
