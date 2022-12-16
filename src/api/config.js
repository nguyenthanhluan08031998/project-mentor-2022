const setup = (instance) => {
    instance.interceptors.response.use(
        function (response) {
            if (response.status === 200 || response.status === 201) {
                return response
            }
        },
        function (error) {
            return Promise.reject(error)
        }
    )
}
export default {
    setup
}