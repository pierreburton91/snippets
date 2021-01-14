/**
 * @returns {Object} { Instance of Services, Generic function "serviceCall" }
 */
export default () => {
  const store = useStore();
  const router = useRouter();
  const services = new Services(router, store);

  /**
   * @param {String} serviceName
   * @param {String} serviceMethod
   * @param {?any} args
   */
  async function serviceCall(
    serviceName,
    serviceMethod,
    args = null
  ) {
    try {
      const { data } = await services[serviceName][serviceMethod](args);
      return data;
    } catch (err) {
      if (err) {
        // defined in response error interceptor
        throw err.customMessage;
      }
    }
  }

  return { services, serviceCall };
}