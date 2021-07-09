export const QueryComponent = (
  query,
  ComponentSucceed,
  ComponentLoading = null,
  ComponentError = null
) => {
  const { loading, error, data } = query;
  if (loading) {
    if (ComponentLoading != null) return ComponentLoading;
    console.log("Loading...");
  }
  if (error) {
    if (ComponentError != null) return ComponentError;
    console.log("Error: " + error);
  }
  return ComponentSucceed;
};
